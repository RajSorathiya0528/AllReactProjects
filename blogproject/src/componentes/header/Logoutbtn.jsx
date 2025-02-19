import React from "react"
import {useDispatch} from 'react-redux'
import AuthService from '../../Appwrite/auth'
import {logout} from '../../store/authSlice'

function Logoutbtn(){
    const dispatch = useDispatch()
    const logoutHendler = () => {
        AuthService.logout().then(() => {
            dispatch(logout())
        })
    }
    return(
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        onClick={logoutHendler}
        >Logout</button>
    )
}

export default Logoutbtn