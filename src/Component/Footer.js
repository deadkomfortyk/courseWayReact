import React, { Component } from "react"

export default class FooterEnd extends Component{
    render(){
    return(
    <footer className="Footer">
    <div className="text_footer">
        <p>Made with love by <span style={{color:'#ba271f'}}> Alex Kuzmenko</span></p>
        <p>Ispired by <span style={{color:'#ba271f'}}> PROMETHEUS</span></p>
    </div>
    <div className="img_footer">
        <div>
            <img src="../img/Footer/twitter.png" alt="t"/>
            <img src="../img/Footer/facebook.png" alt="f"/>
            <img src="../img/Footer/google.png" alt="g"/>
        </div>
        <div>
            <img src="../img/Footer/twitter red.png" alt="tred"/>
            <img src="../img/Footer/facebook red.png" alt="fred"/>
            <img src="../img/Footer/google red.png" alt="gred"/>
        </div>
    </div>
    </footer>
    );
    }
}