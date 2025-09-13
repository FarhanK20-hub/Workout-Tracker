import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {Signup, isLoading, error} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await Signup(email, password);
    }

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Signup</h2>

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button disabled={isLoading} type="submit">Signup</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default Signup;
