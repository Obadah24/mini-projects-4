import React from 'react'
import '../App.css'
const reducer = (state, action) => {
  if(action.type === 'buy-ingredients') return {money: state.money - 10}
  if(action.type === 'sell-a meal') return {money: state.money + 10}
  if(action.type === 'celebrity-visit') return {money: state.money + 5000}
  return state
}
export default function UseReducerWallet() {
  const initialState = {money: 100}
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <div className='usereducer1-component'>
      <div >
      <h1>Wallet:<span className='wallet-color'>{state.money}</span></h1>
      </div>
      <div className='box-dispatch'>
        <button onClick={() => dispatch({type:'buy-ingredients'})}>Shopping for veggies!</button>
        <button onClick={() => dispatch({type:'sell-a meal'})}>serve a meal  to the customer</button>
        <button onClick={() => dispatch({type:'celebrity-visit'})}>celebrity-visit</button>
      </div>
    </div>
  )
}
