import Button from "./Button/Button"
import Buttons from "./Buttons"
import Card from "./Card"
import ColorPicker from "./ColorPicker"
import Counter from "./Counter"
import DigitalClock from "./DigitalClock"
import List from "./List"
import MyComponent from "./MyComponent"
import OnChangeEvents from "./OnChangeEvents"
import ProfilePicture from "./ProfilePicture"
import Student from "./Student"
import ToDoList from "./ToDoList"
import UpadteArrayState from "./UpadteArrayState"
import UpdateArrayofObjectState from "./UpdateArrayofObjectState"
import UpdateObjectState from "./UpdateObjectState"
import Useefffect from "./Useefffect"
import UserGreeting from "./UserGreeting"


function App() {

    const fruits = [{id: 1, name: "apple", calories: 95},
        {id: 2, name: "orange", calories: 45}, 
        {id: 3, name:"banana", calories: 105},
        {id: 4, name:"coconut", calories: 159}, 
        {id: 5, name:"pineapple", calories: 37,}];
    
        const vegetables = [{id: 6, name: "apple", calories: 125},
            {id: 7, name: "potatos", calories: 415}, 
            {id: 8, name:"celery", calories: 23},
            {id: 9, name:"corn", calories: 67}, 
            {id: 10, name:"broccoli", calories: 87,}];    
        
return (
 <>
  <Card />
  <Card />
  <Button />
  <Student name="Gopi" age={28} isStudent={true}/>
  <Student name="Dhikshan" age={25} isStudent={false}/>
  <Student name="John" age={21} isStudent={false}/>
  <Student name="Doe" age={19} isStudent={true}/>
  <Student />

  <UserGreeting isLoggedIn={true} userName="Gopi"/>

   {/* {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
   {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null} */}

{fruits.length > 0 && <List items={fruits} category="Fruits"/>}
{vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}


<ProfilePicture />
  <Buttons />
  
  <MyComponent />
  <Counter />
  <OnChangeEvents />
  
  <ColorPicker />

  <UpdateObjectState />
  <UpadteArrayState />

  <UpdateArrayofObjectState />

  <ToDoList />

<useEffects />
  
  <Useefffect />

  <DigitalClock />
 </>
) 
}

export default App
