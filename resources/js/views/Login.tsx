import React, { useState } from "react";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";
import AuthService from "../service/Auth.service";

const Login = (): JSX.Element => {
    let [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    let [error, setError] = useState<string>();
    let [email, setEmail] = useState<string>("");
    let [password, setPassword] = useState<string>("");
    let navigate: NavigateFunction = useNavigate();

    let handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsFormSubmitting(true);
        AuthService.login({ email, password })
            .then((response) => {
                navigate("/dashboard");
            })
            .catch((e) => {
                setError(e.response.data.message);
                setIsFormSubmitting(false);
            });
    };

    return (
        <div>
            <div>
                <div>
                    <h2>Log In To Your Account</h2>
                    {error ? <h5>Error: {error}</h5> : ""}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                required
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>
                        <button disabled={isFormSubmitting} type="submit">
                            {isFormSubmitting ? "Logging You In..." : "Log In"}
                        </button>
                    </form>
                </div>
                <p>
                    Don't have an account? <Link to="/register"> Register</Link>
                    <br />
                    <span>
                        <Link to="/">Back to Index</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
