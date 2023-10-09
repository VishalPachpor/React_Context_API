import UserContextProvider from "./context/UserContextProvider"
import './App.css'
import Profile from "./Components/Profile"
import Login from "./Components/Login"

function App() {


  return (
    <>
      <UserContextProvider>
        <div>This is the practice of Context Provider</div>
        <Login />
        <Profile />
      </UserContextProvider>

    </>
  )
}

export default App
