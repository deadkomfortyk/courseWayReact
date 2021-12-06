import React, { Component } from "react"

export default class Features extends Component{
    render(){
    return(
        <section id="features" className="Features">
        <p className="mainF">ПЕРЕВАГИ</p>
        <div className="music">
            <img src="../img/Features/Lyre Filled-100.png" alt="musicImg"/>
        </div>
        <div className="block">
        <div className="block1">
                <div className="clock">
                    <img src="../img/Features/Clock.png" alt="clockimg"/>
                    <p className="up">Будь-коли</p>
                    <p className="down">Навчайтесь у зручний для Вас час. Відеолекції, тести та форум доступні цілодобово.</p>
                </div>
                <div className="globus">
                    <img src="../img/Features/Globe.png" alt="globusImg"/>
                    <p className="up">Будь-де</p>
                    <p className="down">Приходьте курси, не виходячи з дому чи в<br/> дорозі. Все, що Вам знадобиться, - це доступ <br/>до інтернету. </p>
                </div>
            </div>
            <div className="block2">
                <div className="phone">
                    <img src="../img/Features/iPhone.png" alt="phoneImg"/>
                    <p className="up">Будь-який пристрій</p>
                    <p className="down">Навчайтесь на комп'ютері, планшеті чи<br/>телефоні: сайт підлаштується під Ваш <br/>пристрій.</p>
                </div>
                <div className="man">
                    <img src="../img/Features/Man.png" alt="manImg"/>
                    <p className="up">Будь-хто</p>
                    <p className="down">наші курси абсолютно безкоштовні - захмарні ціни більше ніколи не стануть на заваді найкращій освіті.</p>
                </div>
            </div>
        </div>
        </section>
            );
            }
}