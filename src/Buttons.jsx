
const Buttons = () => {

    const handleClick = () => {
        console.log("hello")
    }
    const handleClick2 = (name) => {
        console.log("first")
    }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Buttons
