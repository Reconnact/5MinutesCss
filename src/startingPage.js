import react from "react";
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Course from "./components/course";

function StartingPage(){
    return (
        <Router>
            <Helmet>
                <meta charSet="utf-8" />
                <title>5MinutesCss</title>
            </Helmet>
            <Routes>
                <Route path="/" element={
                    <body>
                        <div class="topnav">
                            <h2>5MinutesCss</h2>
                        </div>
                        <main>
                           <Course />
                                <div class="menu">
                                    <ul style={{marginTop: 0}}>
                                        <li class="item" id="home">
                                            <a href="/" class="btn"><i class="fa"></i>Home</a>
                                        </li>

                                        <li class="item" id="menu1">
                                            <a href="#menu1" class="btn"><i class="fa"></i>Menu1</a>
                                            <div class="smenu">
                                                <a href="">Submenu</a>
                                                <a href="">Submenu</a>
                                                <a href="">Submenu</a>
                                            </div>
                                        </li>

                                        <li class="item" id="menu2">
                                            <a href="#menu2" class="btn"><i class="fa"></i>Menu2</a>
                                            <div class="smenu">
                                                <a href="">Submenu</a>
                                                <a href="">Submenu</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                        </main>
                    </body>
                }/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </Router>
    )
}

export default StartingPage;