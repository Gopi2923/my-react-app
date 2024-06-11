import propType from 'prop-types'

const Student = (props) => {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

Student.proptypes = {
    name: propType.string,
    age: propType.number,
    isStudent: propType.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student
