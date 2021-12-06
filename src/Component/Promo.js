import React, { Component } from "react"

export default class Promo extends Component{
    render(){
    return(
        <section className="Promo" id="promo">
        <div className="promo_img">
        <img src="../img/Promo/education.jpg" alt="promo"/> 
        </div>
        <div className="promo_container">
            <p className="sertificate">СЕРТИФІКАТ ВІД ГАРВАРДУ</p>
            <p className="lorem">
                Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry. 
                Lorem Ipsum has been the <br/> industry's standard dummy text ever since the 1500s,<br/>
                when an unknown printer took a galley of type.
            </p>
            <button className="button_promo" onClick="location.href='#register'">ОТРИМАТИ!</button>
        </div>
        </section>
    );
    }
}