import React from "react";
import './home.css';
const Home = () => {
    return (
        <>
            <header className="App-header">
                <div className="container">
                    <p>Home</p>
                    <h1>Token Manager</h1>
                    <p>Logout</p>
                </div>
            </header>
            <section className="App-body">
                <div className="container">
                    <button className="button">Generate Token</button>
                    <button className="button">Token Status</button>
                    <button className="button">Revoke Token</button>
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