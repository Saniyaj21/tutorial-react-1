import { useEffect, useState } from "react"
import Header from "./components/Header"
import PasswordForm from "./components/PasswordForm"
import PasswordList from "./components/PasswordList"



const App = () => {

  const [passwords, setPasswords] = useState([])

  useEffect(()=>{
    let storedPasswords = JSON.parse(localStorage.getItem("passwords")) || []
    setPasswords(storedPasswords)
  }, [])
  useEffect(()=>{
    localStorage.setItem("passwords", JSON.stringify(passwords))
  }, [passwords])

  const handleSavePassword = (password) => {
    setPasswords([...passwords, {...password, id : Date.now()}])
  }

  let age = () => {
    console.log("400")
  }
  return (
    <>
      <Header />
      <div className="container">
        <PasswordForm

          onSavePassword = {handleSavePassword}

        />

        <div className="list-container">
          <PasswordList 
          passwords = {passwords}
          />
        </div>
      </div>
    </>
  )
}

export default App