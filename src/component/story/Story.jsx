import React from "react";
import { Col, Container, Row } from "reactstrap";
import img from "../../asstes/image/story.png"
import "./story.css"

const Story = () => {
  return (
    <section className="story_area">
      <Container>
        <Row>
          <Col lg="8">
            <div className="story_content">
              <h2>Every company has a story. What's yours?</h2>

              <p>
                A company profile functions as a document that introduces your
                business to your audience -- whether that be customers,
                prospective customers, investors, new hires, or anyone else.
                
                </p>
                <p>
                A well-prepared company profile doesn't just stop at who you are
                or what you sell, but rather, it documents why you sell it, what
                your customers think of you, how you're growing, and more.
              </p>

              <div className="story_btn">
                <button className="btn_1">Read More</button>
                <button className="btn_2">See Demo</button>
              </div>
            </div>
          </Col>
          <Col lg="4" className="story_reletev">
            <div className="story_img">
                <img src={img} alt="" />
                <div className="story_img_content">
                    <h5>100% Trusted</h5>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Story;
