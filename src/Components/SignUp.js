import React from 'react'
const Button1 = ({type, children, ...buttonProps}) => {
  const st1 = {
    backgroundColor:'tomato',
    color: 'white',
    margin: '16px 0',
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight: '8px',
    padding: '8px 16px',
    borderRadius: '16px',
    cursor: 'pointer',
  }
  const st2 = {
    backgroundColor:'blue',
    color: 'white',
    margin: '16px 0',
    fontSize: '20px',
    fontWeight: 'bold',
    marginRight: '8px',
    padding: '8px 16px',
    borderRadius: '16px',
    cursor: 'pointer',
  }
  let calssNames = type === 'primary' ? {...st1} :{...st2}
  return (
    <button style={calssNames} {...buttonProps}>
      {children}
    </button>
  )
}
const LoginButton = ({type, children, ...buttonProps}) => {
  return (
    <Button1
    type='secondary'
    {...buttonProps}
    onClick = {() => {
      alert('Logging in!')
    }}
    >
    {children}
    </Button1>
  )
}
export default function SignUp() {
  const ui = {
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '2rem auto',
    border: '3px solid black',
    backgroundColor: '#edefee',
}
  return (
    <div  style={ui} >
    <h1>Little Lemon Restaurant</h1>
    <Button1 type='primary' onClick={() => alert('Signing up!')} >
      Sign up
    </Button1>
    <LoginButton type='secondary' onClick={() => alert('Signing up!')}>
      Login
    </LoginButton>
    </div>
    
  )
}
