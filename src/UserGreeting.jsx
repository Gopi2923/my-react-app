import PropTypes from 'prop-types';

const UserGreeting = (props) => {
   
    const welcomeMsg = <h1 className="welcome-msg">Welcome {props.userName}</h1>;

    const loginPromt = <h1 className="login-promt">Please login to continue</h1>;
    
    //  if (props.isLoggedIn) {
    //     return <h1>Welcome {props.userName}</h1>
    //  }
    //  else {
    //     return <h1>Please login to continue</h1>
    //  }

    // return (props.isLoggedIn ? <h1 className="welcome-msg">Welcome {props.userName}</h1> : 
    //                             <h1 className="login-promt">Please login to continue</h1>);
  
    return (props.isLoggedIn ? welcomeMsg : loginPromt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest"
}
export default UserGreeting
