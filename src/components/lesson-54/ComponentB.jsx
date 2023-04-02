import React from 'react'
import { useContext } from 'react'
import { MyContext } from './ContextExample'
import { FetchContext } from './fetchContext'



const ComponentB = () => {

    const {counter, setCounter, handleClick } = useContext(MyContext);
    const {data} = useContext(FetchContext);

    console.log(data)
    
  return (
    <div>
    {counter}
    <button onClick={handleClick}>BUTTON</button>
    <button onClick={() => setCounter(counter - 1)}>BUTTON2</button>




    </div>
  )
}

export default ComponentB