import Button from "./Button/Button"
import Card from "./Card"
import Student from "./Student"
import UserGreeting from "./UserGreeting"

function App() {
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
 </>
) 
}

export default App
