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
        let lessonNames = Object.keys(lessons[lessonName]);
        const lessonData = lessons[lessonName]
        return (
            <body>
                <Header/>
                <main className="mainBox">
                    <div style={{width: "70%"}}>
                        <h2>{lessonData.title}</h2>
                        {lessonNames.map((data, index) => (
                            <div>
                                <h3>{lessonData[lessonNames[index]].subtitle}</h3>
                                <p style={{whiteSpace: "pre-line"}}>{lessonData[lessonNames[index]].text}</p><br/>
                            </div>
                        ))}
                        
                    </div>
                    <Menu />
                </main>
            </body>   
        ) 
    }   
}

export default Lesson;