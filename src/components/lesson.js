import React from "react";
import { useParams } from "react-router-dom";
import lessons from "../lessons.json";
import Header from "./header";
import Menu from "./menu";

function Lesson(){
    const {lessonName} = useParams();
    if (lessons[lessonName] === undefined){
        return (
            <div>404</div>
        )
    }else{
        return (
            <body>
                <Header/>
                <main className="mainBox">
                    <div style={{width: "70%"}}>
                        <h2>{lessons[lessonName].title}</h2>

                        <p>{lessons[lessonName].text}</p>
                    </div>
                    <Menu />
                </main>
            </body>   
        ) 
    }   
}

export default Lesson;