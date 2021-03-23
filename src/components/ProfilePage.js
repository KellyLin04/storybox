import react from 'react'
import {useState} from 'react'
import Box from './Box.js'

function ProfilePage({googleObj}){
    const [user, setUser] = useState([
        {
            box: Box
        },
    ])


    return(
        <div>
            <p>profile page</p>
            {/* {user.map((user) => (
                    <h3 name = {googleObj.name} box = {user.box}/>
            ))} */}
        </div>
    )
}

export default ProfilePage;