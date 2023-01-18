import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
function Login() {
  const {firebase} =useContext(FirebaseContext)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const history =useHistory()
  const handleLogin = (e)=>{
    e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
          history.push('/') 
        }).catch((error)=>{
          alert(error.message) 
        })
        
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='img' ></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
     <Link to={'/signup'} style={{color: 'black'}} >Signup</Link>
      </div>
    </div>
  );
}

export default Login;
