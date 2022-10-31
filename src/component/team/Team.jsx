import React from "react";
import { team } from "../../asstes/data/data";
import "./team.css";
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {RiEarthFill} from "react-icons/ri"
import { Col, Container, Row } from "reactstrap";



const Team = () => {
  return (
    <section className="team_area">
        <Container>
        <Row>
        <Col lg="6" md="10">
            <div className="team_headding">
              <h2>Our Team Member</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adcing ed do eiusmod
                tempor incidi.
              </p>
            </div>
          </Col>
        </Row>

        <Row>
            {team.map((item,index)=>{
                return(
                    <Col lg="4" md="6" key={index}>
                        <div className="team_box">
                            <img src={item.img} alt="" />
                            <div className="box_content">
                                <h3>{item.name}</h3>
                                <span>{item.title}</span>
                                <p>{item.dec}</p>
                                <div className="socile">
                                    <span><BsInstagram /></span>
                                    <span><AiOutlineTwitter /></span>
                                    <span><FaFacebookF /></span>
                                    <span><RiEarthFill /></span>
                                </div>
                            </div>
                        </div>
                    </Col>
                )
            })}
        </Row>
        </Container>
    </section>
  );
};

export default Team;
