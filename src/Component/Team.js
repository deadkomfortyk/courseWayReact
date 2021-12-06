import React, { Component } from "react"

export default class Team extends Component{
    render(){
    return(
    <section className="Team" id="creaters">
    <p className="creaters">РОЗРОБНИКИ</p>
    <div className="container_creaters">
        <div className="first">
            <img src="../img/OurTeam/Daniel.jpg" className="MainImg" alt="Daniel"/>
            <p className="name">Daniel Raynolds</p>
            <p className="text">
                After the first 50 completed <br/>projects to make a mistake <br/> with the deadlines almost<br/> unreal.
                After the first hundred<br/> projects to break the promises <br/>already impossible.
            </p>
            <div className="imgLinks">
                <img src="../img/OurTeam/social - facebook - 1.png" width="27px" height="27px" alt="facebook"/>
                <img src="../img/OurTeam/social - twitter - 1.png" width="27px" height="27px" alt="twitter"/>
                <img src="../img/OurTeam/social - google - plus.png" width="27px" height="27px" alt="google"/>
            </div>
        </div>

        <div className="another">
        <img src="/img/OurTeam/Nick.jpg" className="NickImg" alt="Nick"/>
                <p className="name">Nick Parson</p>
            <p className="text">
                After the first 50 completed <br/>projects to make a mistake <br/> with the deadlines almost<br/> unreal.
                After the first hundred<br/> projects to break the promises <br/> 
            </p>     
            <div className="imgLinks">
                <img src="../img/OurTeam/social - facebook - 1.png" width="27px" height="27px" alt="facebook"/>
                <img src="../img/OurTeam/social - twitter - 1.png" width="27px" height="27px" alt="twitter"/>
                <img src="../img/OurTeam/social - google - plus.png" width="27px" height="27px" alt="google"/>
        </div>
        </div>

        <div className="another">
            <img src="../img/OurTeam/William.jpg" className="MainImg" alt="William"/>
            <p className="name">William Stanley</p>
            <p className="text">
                After the first 50 completed <br/>projects to make a mistake <br/> with the deadlines almost<br/> unreal.
                After the first hundred<br/> projects to break the promises <br/>already impossible.
            </p>
            <div className="imgLinks">
                <img src="../img/OurTeam/social - facebook - 1.png" width="27px" height="27px" alt="facebook"/>
                <img src="../img/OurTeam/social - twitter - 1.png" width="27px" height="27px" alt="twitter"/>
                <img src="../img/OurTeam/social - google - plus.png" width="27px" height="27px" alt="google"/>
        </div>
        </div>

        <div className="another">
            <img src="../img/OurTeam/Sarah.jpg" className="MainImg" alt="Sarah"/>
            <p className="name">Sarah Noel</p>
            <p className="text">
                After the first 50 completed <br/>projects to make a mistake <br/> with the deadlines almost<br/> unreal.
                After the first hundred<br/> projects to break the promises <br/>already impossible.
            </p>
            <div className="imgLinks">
                <img src="../img/OurTeam/social - facebook - 1.png" width="27px" height="27px" alt="facebook"/>
                <img src="../img/OurTeam/social - twitter - 1.png" width="27px" height="27px" alt="twitter"/>
                <img src="../img/OurTeam/social - google - plus.png" width="27px" height="27px" alt="google"/>
        </div>
        </div>
    </div>
    </section>
    );
    }
}