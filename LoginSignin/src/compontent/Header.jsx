import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { useSelector }  from "react-redux"
import Logo from "./Logo";
import { account } from "../appwrite/appwriteConfig"
import { Button } from "../../../Blog/src/components";

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate(); 

    const logoutHandler = () => {
        account.deleteSession('current')
        .then(() => {console.log("Logged out")})
        .catch((error) => {console.log(error)})
    };
    
    const navItems = [
        {
            name:'Home',
            slug:"/",
            active:true
        },
        {
            name:'Login',
            slug:'/login',
            active: !authStatus
        },
        {
            name:'Signup',
            slug:'/signup',
            active: !authStatus
        }
    ]

    return(
        <>
            <header className="py-3 shadow bg-green-200">
                <nav className="flex">
                    <div className="mr-4">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                </nav>
                <ul className="flex ml-auto">
                    {navItems.map((item) =>
                        item.active ? (
                        <li key={item.name}>
                            <Button 
                            onClick = {() => navigate(item.slug)}
                            className="inline-block px-6 py-2 duration-200 hover:bg-green-100 rounded-full">
                                {item.name}
                            </Button>
                        </li>
                    ) : null)}
                    {authStatus && (
                        <li>
                            <Button className="inline-block px-6 py-2 duration-200 hover:bg-green-100 rounded-full"
                            onClick={logoutHandler}>Logout</Button>
                        </li>
                    )}
                </ul>
            </header>
        </>
    )
}

export default Header