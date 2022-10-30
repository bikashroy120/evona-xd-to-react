import React from "react";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../../asstes/image/img.png";
import './hero.css'
import brandImg1 from "../../asstes/image/Amazon.png"
import brandImg2 from "../../asstes/image/Attentive.png"
import brandImg3 from "../../asstes/image/Chanel.png"
import brandImg4 from "../../asstes/image/Fritolay.png"
import brandImg5 from "../../asstes/image/Naton.png"

const Hero = () => {
  return (
    <section className="hero_area">
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero_contant">
              <h3>We Help You,</h3>
              <h2>You Success </h2>
               <h2>In  Your Business</h2>
              <p>
                A well-prepared company profile doesn't just stop at who you are
                or god
              </p>
              <div className="hero_button">
                    <button className="btn_1">Get Started</button>
                    <button className="btn_2">Join a meeting</button>
              </div>
            </div>
          </Col>
          <Col lg="6" className="poso">
            <div className="hero_img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>

        <div className="brand_area">
            <img src={brandImg1} alt="" />
            <img src={brandImg2} alt="" />
            <img src={brandImg3} alt="" />
            <img src={brandImg4} alt="" />
            <img src={brandImg5} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
