import React, {useState} from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState("#FFFFFF")

    const handleColorchange = (event) => {
       setColor(event.target.value)
    }
  return (
    <div className='colorpicker-container'>
      <h1>Color Picker</h1>
      <div className='color-display' style={{backgroundColor: color}}>
         <p>Selected color: {color}</p>
      </div>
      <label>Select a color</label>
      <input type="color" value={color} onChange={handleColorchange} />
    </div>
  )
}

export default ColorPicker
