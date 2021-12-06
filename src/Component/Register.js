import React, { Component } from "react"

export default class Register extends Component{
    render(){
    return(
    <section className="Register" id="register">
    <p className="register">ЗАРЕЄСТРУЙСЯ ЗАРАЗ</p>
    <p className="text_register">Та отримай задоволення від навчання</p>

    <form className="form_register" action="#">
        <input type="text" className="input_register" placeholder="Name:"/>
        <input type="text" className="input_register" placeholder="Email:"/>
        <button className="button_register">Submit</button>
    </form>
    </section>
    );
    }
}