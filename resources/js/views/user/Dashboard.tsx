import React, { useState, useEffect } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import AuthService from "../../service/Auth.service";
import { UserData } from "../../service/types/AuthData";

const Dashboard = (): JSX.Element => {
    let [user, setUser] = useState<UserData>();
    let navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        AuthService.getUser()
            .then((response) => {
                setUser(response.data);
            })
            .catch((e) => {
                if (e.response.data.message === "Unauthenticated.") {
                    navigate("admin-cp/login");
                }
            });
    }, []);

    return (
        <div>
            <span>
                Whatever normally goes into the user dasboard page; the table
                below for instance
            </span>
            <br />
            <table>
                <tbody>
                    <tr>
                        <th scope="row ">User Id</th>
                        <td>{user?.id}</td>
                    </tr>
                    <tr>
                        <th scope="row ">Full Name</th>
                        <td>{user?.name}</td>
                    </tr>
                    <tr>
                        <th scope="row ">Email</th>
                        <td>{user?.email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
