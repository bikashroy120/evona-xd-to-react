import React from "react";
import './countDown.css'

const CountDown = () => {
  return (
    <section className="count_down">
      <div className="container">
        <div className="count_down_content">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count_item">
                <h2>250</h2>
                <p>PROJECT COMPLATE</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count_item">
                <h2>250</h2>
                <p>HAPPY CUSTOMER</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count_item">
                <h2>250</h2>
                <p>OUR PARTNER</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count_item">
                <h2>250</h2>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
