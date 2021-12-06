
import  { Component } from "react"

const textCourseStyle = {
    position: "relative",
    top: "50px",
    fontSize: "45px",
    textAlign: "center"
};
const textCourseStyle2 = {
    position: "relative",
    top: "60px",
    fontSize: "25px",
    textAlign: "center"
};
export default class Courses extends Component{
    render(){
    return(
        <section className="Courses" id="courses">
        <p style={textCourseStyle}>ДОСТУПНІ КУРСИ</p>
        <p style={textCourseStyle2}>Запишіться прямо зараз на безкоштовні курси</p>

        <div className="divCourse">
            <div className="program" style={{backgroundColor: '#e8e8e8'}}>
                <div className="course_Img">
                    <img src="../img/Courses/1course.jpg" style={{ width:'228px', height:'227px'}} alt="img"/>
                </div>
                <p className="upCourse">Основи програмування</p>
                <p className="downCourse">After the first 50 completed projects to make a mistake with the deadlines almost unreal.
                    <a href={"#header"} style={{textAlign: 'left'}}>Read more...</a>  </p>
                
                <button className="buttonCourse" onClick="location.href='#register'">ЗАРЕЄСТРУВАТИСЬ НА КУРС!</button>
            </div>

            <div className="analiz">
                <div className="course_Img">
                    <img src="../img/Courses/3course.jpg" style={{ width:'228px', height:'227px'}} alt="img"/>
                </div>
                <p className="upCourse">Економіка <br/>для всіх</p>
                <p className="downCourse">After the first 50 completed projects to make a mistake with the deadlines almost unreal.
                    <a href={"#header"} style={{textAlign: 'left'}}>Read more...</a>  </p>
                
                <button className="buttonCourse" onClick="location.href='#register'">ЗАРЕЄСТРУВАТИСЬ НА КУРС!</button>
            </div>

            <div className="economic">
                <div className="course_Img">
                    <img src="../img/Courses/2course.jpg" style={{ width:'228px', height:'227px'}} alt="img"/>
                </div>
                <p className="upCourse">Розробка та<br/>аналіз алгоритмів</p>
                <p className="downCourse">After the first 50 completed projects to make a mistake with the deadlines almost unreal.
                    <a href={"#header"} style={{textAlign: 'left'}}>Read more...</a>  
                </p>
                <button className="buttonCourse" onClick="location.href='#register'"> ЗАРЕЄСТРУВАТИСЬ НА КУРС!</button>
            </div>
            <div className="history">
                <div className="course_Img">
                    <img src="../img/Courses/4course.jpg" style={{ width:'228px', height:'227px'}} alt="img"/>
                </div>
                <p className="upCourse">Історія<br/>України</p>
                <p className="downCourse">After the first 50 completed projects to make a mistake with the deadlines almost unreal.
                    <a href={"#header"} style={{textAlign: 'left'}}>Read more...</a>  </p>
                
                <button className="buttonCourse" onClick="location.href='#register'">ЗАРЕЄСТРУВАТИСЬ НА КУРС!</button>
            </div>
        </div>
        </section>
            );
}
}

