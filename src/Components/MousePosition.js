import React from 'react'
import Calculator from './Calculator'
import UseReducerWallet from './UseReducerWallet'
import SignUp from './SignUp'
import '../App.css'
const MousePosition = ({render}) => {
const [mousePosition, setMousePosition] = React.useState({
  x: 0,
  y: 0,
})
React.useEffect(() => {
  const handleMousePositiononChange = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    })
  }
  window.addEventListener('mousemove', handleMousePositiononChange)
  return () => {
    window.removeEventListener('mousemove', handleMousePositiononChange)
  }
},[])
return render({mousePosition})
}
const PanelMouseLogger = () => {
  return (
    <MousePosition
    render = {({mousePosition}) => (mousePosition.x > 200 && mousePosition.y > 150  ) ? (
      <div className='main'>
        <Calculator />
        <span className='poistionxy'>x: {mousePosition.x}</span>
        <span className='poistionxy'>y: {mousePosition.y}</span>
      </div>
    ) : (
      <div className='main'>
      </div>
    )}
    />
  )
}
const UseReducerWalletfn = () => {
  return (
    <MousePosition
    render = {({mousePosition}) => (mousePosition.x > 200 && mousePosition.y > 150 ) ? (
      <div className='main'>
      <UseReducerWallet />
        <span className='poistionxy'>x: {mousePosition.x}</span>
        <span className='poistionxy'>y: {mousePosition.y}</span>
      </div>
    ) : (
      <div className='main'>
      </div>
    )}
    />
  )
}

const SignUpfn = () => {
  return (
    <MousePosition
    render = {({mousePosition}) => (mousePosition.x > 200 && mousePosition.y > 150 ) ? (
      <div className='main'>
      <SignUp />
        <span className='poistionxy'>x: {mousePosition.x}</span>
        <span className='poistionxy'>y: {mousePosition.y}</span>
      </div>
    ) : (
      <div className='main'>
      </div>
    )}
    />
  )
}




export default function App() {
  return (
    <div>
      <h1 className='header'>The appearance of a calculator when the inicator becomes inside the first box</h1>
      <PanelMouseLogger />
      <h1 className='header'>The appearance of a Wallet when the inicator becomes inside the second box</h1>
      <UseReducerWalletfn />
      <h1 className='header'>The appearance of a SignUp panel when the inicator becomes inside the second box</h1>
      <SignUpfn />
    </div>
  )
}
