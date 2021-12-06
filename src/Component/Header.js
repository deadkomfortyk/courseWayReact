import React, { Component } from "react"

export default class Header extends Component{
    render(){
    return(
    <header id="#header">
    <div className="header_logo"><p>COURSEWAY</p></div>
        <nav>
            <div className="topnav" id="myTopnav">
                <a href="#header" id="head">головна</a>
                <a href="#courses">курси</a>
                <a href="#creaters">блог</a>
                <a href="#features">про проект</a>
                <a href="#register">реєстрація</a>
                <a href={"#"} id="menu" className="icon">&#9776;</a>
            </div>
        </nav>
        <div className="f">
                <h1 className="free_courseh">БЕЗКОШТОВНІ ОНЛАЙН-КУРСИ</h1>
                <p className="free_coursep"> ВІД ВИКЛАДАЧІВ ПРОВІДНИХ УНІВЕРСИТЕТІВ СВІТУ</p>
        </div>

        <form className="form_header" action="#">
            <input type="text" placeholder="Email:" />
            <input type="password" placeholder="Password:"/>
            <button className="button_header">РОЗПОЧАТИ!</button>
        </form>
     </header>
    );
    }
}
