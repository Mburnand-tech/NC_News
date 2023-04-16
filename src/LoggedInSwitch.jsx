import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'
import { Avatar } from '@mui/material'


const LoggedInSwitch = ({isLoggedIn, setIsLoggedIn,  setLogInPortal}) => {
    
    const  {currentUser}  = useContext(UserContext)
    

    const handleSignOut = () => {
        console.log("Lets sign you out")
        setIsLoggedIn(false)
    }

    const handleLogin = () => {
        console.log("We are going to log you in")
        setLogInPortal(true)
    }
    if (isLoggedIn=== true){
        return (
            <div>
                <button onClick={handleSignOut}>Log out</button>
                <Avatar src={currentUser[0].avatar_url} alt='profile'  sx={{ width: 44, height: 44 }} variant="rounded"/>
                <h5>{currentUser[0].name}</h5>
                <p> User : {currentUser[0].username}</p>
            </div>
        )
    }
    if (isLoggedIn === false){
        return (
            <div>
                <button onClick={handleLogin} className="loginicon">Sign in</button>
            </div>
        )
    }
}

export default LoggedInSwitch