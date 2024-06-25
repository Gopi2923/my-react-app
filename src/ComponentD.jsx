import React, {useContext} from 'react'
import { UserContext } from './ComponentA'

const ComponentD = () => {

    const value = useContext(UserContext);

  return (
    <div className='box'>
        ComponentD
        <h2>{`bye ${value}`}</h2>
    </div>
  )
}

export default ComponentD