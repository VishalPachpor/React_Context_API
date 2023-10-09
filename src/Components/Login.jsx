import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState(" ")

    const {setUser} = useContext(UserContext)
    
    const handleClick = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
    return (
    <div>
    <h2>Login</h2>
    <input type="text" 
    value={userName}
    onChange={(e)=>setUserName(e.target.value)}
    placeholder='userName'/>
    
    <input type="text"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    placeholder='password'/>

    <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login