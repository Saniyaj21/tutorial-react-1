import '../styles/PasswordList.scss';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const PasswordList = ({ passwords }) => {
  return (
    <div>
      {
        passwords.map(p => (
          <div className="password-list">

            <div className='details'>

              <p>id : {p.id}</p>
              <p>Title : {p.title}</p>
              <p>Username : {p.username}</p>
              <p> Password : {p.password}</p>

            </div>

            <div className='actions'>

              <p><FaEdit /></p>
              <p><MdDelete /></p>

            </div>

          </div>
        ))
      }
    </div>

  )
}

export default PasswordList
