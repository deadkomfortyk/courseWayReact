import  { Component } from "react"

            const textPartners = {
            fontSize: "45px",
            textAlign: "center",
            paddingTop: "35px"
            }

      export default class Partners extends Component{
      render(){
      return(
            <section className="Partners" id="blog">
            <p style= {textPartners}>
            ПАРТНЕРИ - ОСВІТНІ ЗАКЛАДИ
            </p>

            <div className="imgPart">
                  <div className="sliderright">
                        <img src="../img/Partners/right.png" alt="sliderright"/>
                  </div>
                  <div className="imgMain">
                        <img src="../img/Partners/1part.jpg" className="1part" alt="partnerImg"/>
                        <p className="titlePartner">Camridge</p>
                  </div>
                  <div className="imgMain">
                        <img src="../img/Partners/2part.jpg" className="Harvard" alt="partnerImg"/>
                        <p className="titlePartner" style={{color:'red'}}>Harvard</p>
                  </div>
                  <div className="imgMain">
                        <img src="../img/Partners/3part.png" className="part3" alt="partnerImg"/>
                        <p className="titlePartner">MIT</p>
                  </div>
                  <div className="imgMain">
                        <img src="../img/Partners/4part.jpg" className="part4" alt="partnerImg"/>
                        <p className="titlePartner">UCLA</p>
                  </div>
                  <div className="sliderleft">
                        <img src="../img/Partners/left.png" alt="sliderleft"/>
                  </div>
            </div>
            </section>
      );
      }
}
