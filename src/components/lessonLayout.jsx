import React from "react";
import Header from "./header"
import Menu from "./menu";

function LessonLayout(){

    return (
        <body>
            <Header/>
            <main className="mainBox">
                <div style={{width: "70%"}}>
                    {/*The content is importet here...*/}
                </div>
                <Menu />
            </main>
        </body>    
    )
}

export default LessonLayout;