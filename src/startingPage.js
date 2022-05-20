import react from "react";
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
                        <header>
                            5MinutesCss
                        </header>
                        <main>
                        </main>
                    </body>
                }/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </Router>
    )
}

export default StartingPage;