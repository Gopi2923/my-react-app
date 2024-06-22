import React, {useState, useEffect} from 'react'

const Useefffect = () => {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

  

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }

 useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED")

    return () => {
       window.removeEventListener("resize", handleResize)
    console.log("EVENT LISTENER REMOVED")

    }
 }, [])   

 useEffect(() => {
    document.title = `Size: ${width} X ${height}`
 }, [width, height])
    
   

    useEffect(() => {
        document.title = `Count: ${count} ${color}` 
    }, [count, color])

    const handlebtn = () => {
        setCount(c => c + 1)
    }
    const subtract = () => {
        setCount(c => c - 1)
    }
    const changeColor = () => {
        setColor(c=> c === 'green' ? "red" : 'green')
    } 
  return (
    <div>

        <p style={{color: color}}>Count: {count}</p>
        <button onClick={handlebtn}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={changeColor}>Change color</button>

        <p>Width: {width}</p>
        <p>Height: {height}</p>
    </div>
  )
}

export default Useefffect