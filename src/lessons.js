import react from "react";
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from "./components/header";
import Course from "./components/course";
import Menu from "./components/menu";

function StartingPage(){
    return (
        <body>
            <Header/>
            <main className="mainBox">
                <Course />
                <Menu />
            </main>
        </body>              
    )
}

export default StartingPage;