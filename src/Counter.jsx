import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0); //Note: name should be: [X, setX]
    const handleAdd = () => {
        const addCount = count + 1;
        setCount(addCount);
    }
    const handleReduce = () =>{
        const reduceCount = count - 1;
        setCount(reduceCount);
    }
    return (
        <div style={{border:'2px solid red'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}> + </button>
            <button onClick={handleReduce}> - </button>
        </div>
    )
}