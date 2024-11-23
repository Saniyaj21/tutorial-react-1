import { useState } from 'react'
import '../styles/passwordForm.scss'

const PasswordForm = ({onSavePassword}) => {

    

    const [title, setTitle] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // console.log(title)

    const handleSave = (e) =>{
        e.preventDefault()
        onSavePassword({title, username, password})
        setTitle("")
        setUsername("")
        setPassword("")

    }

    return (
        <div className='form-div'>
            <h2>Enter details</h2>

            <form>
                
                    <label htmlFor="website">Enter website Title</label>
                    <input onChange={(event)=> setTitle(event.target.value)} type="text" id="website" value={title} />
                

                
                    <label htmlFor="username">Enter  userName</label>
                    <input onChange={(event)=> setUsername(event.target.value)} type="text" id="username" value={username}/>
                

                
                    <label htmlFor="password">Enter Password</label>
                    <input onChange={(event)=> setPassword(event.target.value)} type="text" id="password" value={password}/>
                

                <button onClick={(e)=> handleSave(e)}>Save</button>
            </form>
        </div>
    )
}

// alt + shift + f

export default PasswordForm
