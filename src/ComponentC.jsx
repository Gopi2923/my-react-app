import {useContext} from 'react'
import { UserContext } from './ComponentA'
import ComponentD from './ComponentD'

const ComponentC = () => {

  const value = useContext(UserContext);

  return (
    <div className='box'>
      ConponentC
        <h2>{`hello again ${value}`}</h2>
      <ComponentD />
      </div>
  )
}

export default ComponentC