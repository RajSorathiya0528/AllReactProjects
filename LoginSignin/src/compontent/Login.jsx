import React, { useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";

const login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const hendlelogin = async (e) => {
        e.preventDefault();
        try {
            await account.createSession(email, password)
            navigate("/")
        } catch (error) {
            setError("Invalid email or password")
        }
    }

    return (
        <div>
            <form onSubmit={hendlelogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default login