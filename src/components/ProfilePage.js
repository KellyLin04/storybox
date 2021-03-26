import react from 'react'
import {useState, useEffect} from 'react'
import Box from './Box.js'
import axios from 'axios'

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

    const icon_api = process.env.icon_api_key;
    const searchTerm = searchValue
    const icon_url = 'https://search.icons8.com/api/iconsets/v5/search?term=' + searchTerm + '&platform=cotton&token=' + icon_api

    const [icon, setIcon] = useState('')

    useEffect(()=>{
        axios.get(icon_url)
        .then(response => {
                setIcon(response.data.icons[0].commonName)
        })
        .catch((error) => {
            console.log(error)
        });
    }, [icon_url])

    let url = JSON.stringify(icon)
    url = url.slice(1,-1)

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
                <img 
                src = {'https://img.icons8.com/cotton/40/000000/' + url + '.png'}
                alt  = "image"
                />   
            </div>
        </div>
    )
}

export default ProfilePage;