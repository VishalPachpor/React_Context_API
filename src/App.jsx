import UserContextProvider from "./context/UserContextProvider"
import './App.css'

function App() {


  return (
    <>
      <UserContextProvider>
        <div>This is the practice of Context Provider</div>
      </UserContextProvider>

    </>
  )
}

export default App
