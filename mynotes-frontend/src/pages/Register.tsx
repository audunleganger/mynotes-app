import { useState, FormEvent } from "react";

const validUsernamePattern = /^[a-z0-9_]+$/;
const validEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let containsError = false;
        // Username validation
        if (!username) {
            setUsernameError("A username is required");
            containsError = true;
        } else if (username.length < 4) {
            setUsernameError("Username must be at least 4 characters");
            containsError = true;
        } else if (!validUsernamePattern.test(username)) {
            setUsernameError(
                "Username can only contain letters, numbers, and underscores"
            );
            containsError = true;
        }

        // Email validation
        if (!email) {
            setEmailError("An email address is required");
            containsError = true;
        } else if (!validEmailPattern.test(email)) {
            setEmailError("Email address invalid");
            containsError = true;
        }

        // Password validation
        if (password.length < 8) {
            setPasswordError("Passwords require at least 8 characters");
        } else if (password !== confirmPassword) {
            setPasswordError("Passwords don't match");
            containsError = true;
        }
        if (containsError) {
            return;
        }
        // Send the request to whatever we've set up to handle auth
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="username"
                        id="username"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value.toLowerCase())
                        }
                    />
                    <p>{usernameError}</p>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>{emailError}</p>
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
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p>{passwordError}</p>
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    );
}
