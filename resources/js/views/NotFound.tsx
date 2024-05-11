import React from "react";
import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => {
    return (
        <p>
            Whatever you were looking for isn't here.{" "}
            <Link to="/">Back to Index</Link>
        </p>
    );
};

export default NotFound;
