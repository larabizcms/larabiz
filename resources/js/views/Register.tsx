import React, { useState } from "react";
import { Link, useNavigate, NavigateFunction } from "react-router-dom";
import AuthService from "../service/Auth.service";

const Register = (): JSX.Element => {
    let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    let [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    let [error, setError] = useState<string>();
    let [email, setEmail] = useState<string>("");
    let [name, setName] = useState<string>("");
    let [password_confirmation, setPasswordConfirmation] = useState<string>("");
    let [password, setPassword] = useState<string>("");
    let navigate: NavigateFunction = useNavigate();

    let handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsFormSubmitting(true);
        AuthService.register({
            name,
            email,
            password,
            password_confirmation,
        })
            .then((response) => {
                navigate("/login");
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
                    <h2>Create Your Account</h2>
                    {isLoggedIn ? (
                        <h5>Registration successful, redirecting...</h5>
                    ) : (
                        ""
                    )}
                    {error ? <h5>Error: {error}</h5> : ""}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                id="name"
                                type="input"
                                name="name"
                                placeholder="Name"
                                required
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
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
                        <div>
                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                required
                                onChange={(e) => {
                                    setPasswordConfirmation(e.target.value);
                                }}
                            />
                        </div>
                        <button disabled={isFormSubmitting} type="submit">
                            {isFormSubmitting
                                ? "Creating Account..."
                                : "Create Account"}
                        </button>
                    </form>
                </div>
                <p>
                    Already have an account? <Link to="/login"> Login</Link>
                    <br />
                    <span>
                        <Link to="/">Back to Index</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
