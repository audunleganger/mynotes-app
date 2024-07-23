import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!username || !password) {
            setError("Username and password are required");
            return;
        }
        navigate("/dashboard");
    };
    return (
        <>
            <h1>Please sign in</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username / Email</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
                <button type="button" onClick={() => navigate("/register")}>
                    Register
                </button>
                <p>{error}</p>
            </form>
        </>
    );
}
