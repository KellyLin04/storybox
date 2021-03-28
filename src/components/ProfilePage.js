import react from 'react'
import {useState, useEffect} from 'react'
import Box from './Box.js'
import axios from 'axios'
import { IconBase } from 'react-icons/lib'

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
    const searchTerm = "test"
    const icon_url = 'https://search.icons8.com/api/iconsets/v5/search?term=' + searchTerm + '&platform=cotton&token=' + icon_api

    const [icon, setIcon] = useState([])

    useEffect(()=>{
        // axios.get(icon_url)
        // .then(response => {
        //         setIcon(response.data.icons[0].commonName)
        // })
        getIcon()
        .catch((error) => {
            console.log(error)
        });
    }, [])
    
    async function getIcon(){
        let response = await axios.get(icon_url)
        let arr = []
        for (var i = 0; i < 10; i++){
            let url = response.data.icons[i].commonName
            let png = "https://img.icons8.com/cotton/40/000000/" + url + ".png"
            arr.push(png)
        }
        setIcon(arr)
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
                <button> Add sprite </button>
            </div>
            <div className= "icons">
                {icon.map((icon) => {
                    return (
                    <div>
                        <img src= {icon} alt = 'image' />
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProfilePage;