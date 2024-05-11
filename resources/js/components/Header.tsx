import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../service/Auth.service";
import {
    useNavigate,
    NavigateFunction,
    useLocation,
    Location,
} from "react-router-dom";

const Header = (): JSX.Element => {
    let [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    let navigate: NavigateFunction = useNavigate();
    let location: Location = useLocation();

    useEffect(() => {
        // 1.1
        AuthService.getUser()
            .then((response) => {
                // 1.2
                if (
                    location.pathname === "/login" ||
                    location.pathname === "/register"
                ) {
                    navigate("/dashboard");
                }

                setIsLoggedIn(true);
            })
            .catch((e) => {
                // 1.3
                if (
                    e.response.data.message === "Unauthenticated." &&
                    location.pathname === "/dashboard"
                ) {
                    navigate("/login");
                }

                setIsLoggedIn(false);
            });
    }, []);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Index</Link>
                </li>
                {isLoggedIn ? (
                    <li>
                        <Link to="/dashboard">Dashboard</Link> |{" "}
                        <Link to="/logout">Logout</Link>
                    </li>
                ) : (
                    <li>
                        <Link to="/login">Login</Link> |{" "}
                        <Link to="/register">Register</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Header;
