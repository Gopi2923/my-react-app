import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)

        //updater function
        // setCount(count => count + 1)
        // setCount(count => count + 1)
        // setCount(count => count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
        
        //updater function
        // setCount(count => count - 1)
        // setCount(count => count - 1)
        // setCount(count => count - 1)
    }

    const reset = () => {
        setCount(0)
    }
  return (
    <div className='counter-container'>
       
        <p className='count-display'>{count}</p>
        <button onClick={decrement} className='counter-button'>-</button>

        <button onClick={reset} className='counter-button'>Reset</button>
        <button onClick={increment} className='counter-button'>+</button>
    </div>
  )
}

export default Counter
