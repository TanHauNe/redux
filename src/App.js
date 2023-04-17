import React from "react";
import "./App.css";
import { User } from "./features/counter/User";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <User />
                {/* <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/users">Users</Link>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path="/about">
                                <User />
                            </Route>
                            <Route path="/users">
                                <User />
                            </Route>
                            <Route path="/">
                                <User />
                            </Route>
                        </Routes>
                    </div>
                </Router> */}
            </header>
        </div>
    );
}

export default App;
