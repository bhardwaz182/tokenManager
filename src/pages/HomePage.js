import React from "react";
import { Link } from "react-router-dom";

const homePage = () => {
    return (
        <>
            <Link to="/GenerateToken">
                <button className="button">Generate Token</button>
            </Link>
            <Link to="/TokenStatus">
                <button className="button">Token Status</button>
            </Link>
            <Link to="/RevokeToken">
                <button className="button">Revoke Token</button>
            </Link>
        </>
    )
}

export default homePage;