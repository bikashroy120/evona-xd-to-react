import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer_common">
            <h5>CONTACT US</h5>
            <ul>
              <li>+44 345 678 903</li>
              <li>adobexd@mail.com</li>
              <li>Find a Store</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer_common">
            <h5>CUSTOMER RERVICE</h5>
            <ul>
              <li>Contact Us</li>
              <li>Ordering & Payment</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 footer_common">
            <h5>INFORMATION</h5>
            <ul>
              <li>About Adobe XD Kit</li>
              <li>Work With US</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Press Enquiries</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer_common">
            <h5>Subscribe to TechDSF via Email</h5>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
            </p>
            <div className="footer_butom">
                <input type="text" placeholder="Email Address" />
                <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="border_div">

        </div>

        <div className="copirit">
            <p>All Right Received At TeshDSF</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
