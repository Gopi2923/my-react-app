import React, {useState} from 'react'

const MyComponent = () => {

    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Gopi")
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}> Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}> Increment Age</button>

      <p>Is employed: {isEmployed ? 'yes' : 'no'}</p>
      <button onClick={toggleEmployedStatus}> Toggle Status </button>
    </div>
  )
}

export default MyComponent
