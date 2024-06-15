

const ProfilePicture = () => {

    const imageUrl = './assets/react.svg';

    const handleClick = (e) => e.target.style.display = "none"
  return (
    <div>
      <img onClick={(e) => handleClick(e)} src={imageUrl}/>
    </div>
  )
}

export default ProfilePicture
