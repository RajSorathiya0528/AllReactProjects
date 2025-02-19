import React from "react";
import { useState } from 'react';
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";

function Sigiup() {
    const [username, setUsername] = useState("");
    const [email, setEmali] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await account.create(email, password, username)
            .then(() => {
                navigate("/Login")
            })
        } catch (error) {
            setError("email already exist")
        }
    }

    return (
        <div>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmali(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Signup</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Sigiup