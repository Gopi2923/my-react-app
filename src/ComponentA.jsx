import {useState, createContext} from 'react'
import ComponentB from './ComponentB'

//useContext() hook

export const UserContext = createContext();


const ComponentA = () => {

const [user, setUser] = useState("Gopi");

  return (
    <div className='box'>
        ComponentA
        <h2>{`hello ${user}`}</h2>

        <UserContext.Provider value={user}>
            <ComponentB />
        </UserContext.Provider>
        
    </div>
  )
}

export default ComponentA