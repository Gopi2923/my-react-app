
const Buttons = () => {
    
    // let count = 0;
    
    // const handleClick = (name) => {
    //    if(count < 3) {
    //     count++
    //     console.log(`${name} clicked ${count} times`)
    //    }
    //    else {
    //     console.log(`${name} stop clicking me`)
    //    }
    // }

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)

      const handleClick = (e)  => e.target.textContent = "hey!";
  return (
    <div>
      <button onDoubleClick={(e) => handleClick(e)}>Click me</button>
    </div>
  )
}

export default Buttons
