import react from 'react'
import {useState} from 'react'
import Box from './Box.js'

function ProfilePage({googleObj}){

    const [searchValue, setSearchValue] = useState("")

    const [user, setUser] = useState([
        {
            box: Box
        },
    ])

    function getSearchValue(val){
        setSearchValue(val.target.value);
        console.log(searchValue)
    }


    return(
        <div>
            <div className="profile-info">
                <h1>{googleObj.name}</h1>
            </div>
            {/* {user.map((user) => (
                    <h3 name = {googleObj.name} box = {user.box}/>
            ))} */}
            <Box />
            <br></br>
            <div className="edit-box">
                <textarea name="text" wrap="soft" onChange={getSearchValue}/>
                <br/>
                <button> Search for sprite </button>
            </div>
        </div>
    )
}

export default ProfilePage;