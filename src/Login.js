import "./Login.css"
import {useState} from "react"
import {Link, useHistory} from "react-router-dom"
import {auth} from './firebase'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = event =>{
        event.preventDefault()
    }

    const register = event =>{
        event.preventDefault()
    }

    return (
        <div className="login">
           <Link to="/">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className="login__logo" alt="" />
           </Link>
           <div className="login__container">
               <h1>Sign in</h1>
               <form action="">
                   <h5>Email</h5>
                   <input type="email" value={email} />
                   <h5>Password </h5>
                   <input type="password" value={password} />
                   <button type="submit" onClick={login} className="login__signInButton">Sign In</button>
               </form>
               <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy 
                   Notice, our Cookies Notice and our Interest-Based Ads Notice.
               </p>
               <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
           </div>
        </div>
    )
}

export default Login
