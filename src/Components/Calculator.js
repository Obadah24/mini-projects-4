import React, {useRef, useState} from 'react'

export default function Calculator() {
  const resultRef = useRef(null)
  const inputRef = useRef(null)
  const [result, setResult] = useState(0)
  function plus(e) {
    e.preventDefault()
    setResult(result + Number(inputRef.current.value)); 
  }
  function minus(e) {
    e.preventDefault()
    setResult(result - Number(inputRef.current.value))
  }
  function times(e) {
    e.preventDefault()
    setResult(result * Number(inputRef.current.value))
  }
  function divide(e) {
    e.preventDefault()
    setResult(result / Number(inputRef.current.value))
  }
  function resetInput(e) {
    e.preventDefault()
    inputRef.current.value = 0
  }
  function resetResult(e) {
    e.preventDefault()
    setResult(result - result)
  }
  return (
    <div className='article'>
      <div>
        <h1>Simplest Working Calculator</h1> 
      </div>
      <form>
        <div className='input' ref={resultRef}>
        {result}
        </div>
        <div>
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
          className='input'
        />
        </div>
        <button className='button' onClick={plus}>add</button>
        <button className='button' onClick={minus}>subtract</button> 
        <button className='button' onClick={times}>multiply</button> 
        <button className='button' onClick={divide}>divide</button> 
        <button className='button background' onClick={resetInput}>resetInput</button> 
        <button className='button background' onClick={resetResult}>resetResult</button> 
      </form>
    </div>
  )
}