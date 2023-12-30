import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './home.css';
import GenerateToken from "./GenerateToken";
import HomePage from "./HomePage";
import TokenStatus from "./TokenStatus";
import RevokeToken from "./RevokeToken";
import Logout from "./Logout";

const Home = () => {
    return (
        <>
            <header className="App-header">
                <div className="container">
                    <Link to="/">
                        <button className="button">Home</button>
                    </Link>
                    {/* <p>Home</p> */}
                    <h1>Token Manager</h1>
                    {/* <p>Logout</p> */}
                    <Link to="/logout">
                        <button className="button">Logout</button>
                    </Link>
                </div>
            </header>
            <section className="App-body">
                <div className="container">
                <Routes>
                     <Route path="/" exact element={<HomePage/>} />
                     <Route path="/GenerateToken" exact element={<GenerateToken />} />
                     <Route path="/TokenStatus" exact element={<TokenStatus />} />
                     <Route path="/RevokeToken" exact element={<RevokeToken />} />
                     <Route path="/logout" exact element={<Logout />} />
                  </Routes>
                </div>
            </section>
            <footer className="App-footer">
                <div className="container">
                    <p>&#169; 2020 &#183; TokenManager</p>
                </div>
            </footer>
        </>
    );
};

export default Home;