### in brief this mini project about a Component of MousePosition

This mini project i used both of useState and useEffect Hooks and also i used the concept of renderprops
-useState : Enables use of components for controlling state, So i used it to put initial state.
-useEffect: call for setMousePosition to update of the pointer poistion pointer X & Y in every time.
-renderprops: special props mean that's new props injected as funtion parameters. meaning it will values of the pointer poistion as input for this funtion.

### in brief this mini project about a Component of UseReducerWallet

This mini project i used useReducer Hook. it has initial state and an action and retrun the new state.
addtionally i used it instead of useState because useReducer is best suitedfor complex state logic or when the next state depends on the previous one as in our mini projects.

### in brief this mini project about a Component of SignUp

This mini project i used a lots of topics that is existed in React like :
-Containment : For compoents that don't know children beforhand as well uses special children prop.
-Specialization: To define component as special cases.
-Spread: it helps some kind of control props which you want it in a certain compoents.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import Fetch1 from './Fetch1';

describe('Fetch1', () => {
  beforeEach(() => {
    jest.spyOn(window, 'fetch');
  });

  afterEach(() => {
    window.fetch.mockRestore();
  });

  it('displays the fetched BTC/USD data', async () => {
    const mockResponse = {
      bpi: {
        USD: {
          code: 'USD',
          symbol: '&#36;',
          rate: '36,346.0833',
          description: 'United States Dollar',
          rate_float: 36346.0833,
        },
      },
    };
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    render(<Fetch1 />);

    // Wait for the component to render and fetch data
    const fetchedDataElement = await screen.findByTestId('fetched-data');

    // Check that the fetched data is displayed
    expect(fetchedDataElement).toHaveTextContent('Current BTC/USD data');
    expect(fetchedDataElement).toHaveTextContent('Code: USD');
    expect(fetchedDataElement).toHaveTextContent('Symbol: $');
    expect(fetchedDataElement).toHaveTextContent('Rate: 36,346.0833');
    expect(fetchedDataElement).toHaveTextContent('Description: United States Dollar');
    expect(fetchedDataElement).toHaveTextContent('Rate Float: 36346.0833');

    // Check that the fetch function was called with the correct URL
    expect(window.fetch).toHaveBeenCalledWith('https://api.coindesk.com/v1/bpi/currentprice.json');
  });

  it('displays an error message if the API call fails', async () => {
    window.fetch.mockRejectedValueOnce(new Error('API call failed'));

    render(<Fetch1 />);

    // Wait for the component to render and fetch data
    const errorMessageElement = await screen.findByTestId('error-message');

    // Check that the error message is displayed
    expect(errorMessageElement).toHaveTextContent('Something went wrong');

    // Check that the fetch function was called with the correct URL
    expect(window.fetch).toHaveBeenCalledWith('https://api.coindesk.com/v1/bpi/currentprice.json');
  });
});
```
