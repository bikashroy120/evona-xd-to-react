import React from "react";
import {AiFillStar} from "react-icons/ai"
import img1 from "../../asstes/image/feedback.png"
import avatar1 from "../../asstes/image/avatar1.png"
import avatar2 from "../../asstes/image/avatar2.png"
import avatar3 from "../../asstes/image/avatar3.png"
import './feedback.css'


const Feedback = () => {
  return (
    <section className="feesback_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="feedback_headding">
              <h2>Customer Feedback</h2>
              <p>
                A company profile functions as a document that introduces your
                business to your audience -- whether that be customers,
                prospective customers, investors, new hire.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <div className="feedback_content">
              <h2>What They Say</h2>
              <p>
                A company profile functions as a document that introduces your
                business to your.{" "}
              </p>
              <p className="paragrap">
                A company profile functions as a document that introduces your
                business to your audience -- whether that be customers,
                prospective customers, investors, new hires, or anyone else.{" "}
              </p>

              <div className="profile">
                    <div className="profile_item">
                        <img src={avatar1} alt="" />
                        <div className="profile_content">
                            <h5>Rakib Hassan</h5>
                            <span>Founder & CEO</span>
                            <div className="star">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                        </div>
                    </div>

                    <div className="profile_item">
                        <img src={avatar2} alt="" />
                        <div className="profile_content">
                            <h5>Rakib Hassan</h5>
                            <span>Founder & CEO</span>
                            <div className="star">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                        </div>
                    </div>

                    <div className="profile_item">
                        <img src={avatar3} alt="" />
                        <div className="profile_content">
                            <h5>Rakib Hassan</h5>
                            <span>Founder & CEO</span>
                            <div className="star">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                        </div>
                    </div>
              </div>
            </div>
          </div>

        <div className="col-lg-5 d-flex justify-content-center">
            <div className="feedback_img">
                <img src={img1} alt="" />
            </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Feedback;
