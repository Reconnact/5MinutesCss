import react from "react";
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Lessons from "./lessons";
import Menu from "./components/menu";
import Header from "./components/header";
import Lesson from "./components/lesson";


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
                        <Header/>
                        <main className="mainBox">
                            <div style={{width: "70%"}}>
                                Welcome to 5MinutesCss!
                                <p>Here are the <a href="/lessons" style={{color: "blue"}}>Lessons</a></p>
                            </div>
                            <Menu/>
                        </main>
                    </body>
                }/>
                <Route path="/lesson/:lessonName" element={<Lesson/>}/>
                <Route path="/lessons" element={<Lessons />}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </Router>
    )
}

export default StartingPage;