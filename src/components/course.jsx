import React from "react";
import lessons from "../lessons.json";

function Course(){
    let lessonNames = Object.keys(lessons);

    return (
        <div className="courseFeed">
            {lessonNames.map((data) => (
                <div className="courseBox"><a href={"lesson/" + data}><div className="innerBox">{lessons[data].title}</div></a></div>
            ))}
        </div>
    )
}

export default Course;