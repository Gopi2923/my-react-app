import profile from './assets/Gopi,D.jpg'

const Card = () => {
  return (
    <div className="card">
        <img src={profile} alt="" className='cardImg'/>
        <h2 className='card-title'>Gopi</h2>
        <p className='card-text'>Frontend Developer</p>
    </div>
  )
}

export default Card
