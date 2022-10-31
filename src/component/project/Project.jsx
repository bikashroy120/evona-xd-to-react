import React from "react";
import { Col, Container, Row } from "reactstrap";
import Slyder from "../slyder/Slyder";
import './project.css'

const Project = () => {
  return (
    <section className="project_area">
      <Container>
        <Row>
          <Col lg="7">
            <div className="project_area_headding">
              <h2>Recently Completed Projects</h2>
              <p>
                A company profile functions as a document that introduces your
                business to your audience -- whether that be customers,
                prospective customers, investors, new hires, or anyone else.{" "}
              </p>
            </div>
          </Col>
          <div className="project_btn">
                <button>See All</button>
            </div>
          <Slyder />
        </Row>
      </Container>
    </section>
  );
};

export default Project;
