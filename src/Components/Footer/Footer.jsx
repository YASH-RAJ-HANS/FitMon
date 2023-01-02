import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer_body">
      <div className="footer_sub_body">
        <div className="footer_section">
          <div className="section">
            <div className="logo_img">
              <img src="footerlogo.jpeg" alt="logo" />
            </div>
          </div>
          <div className="section">
            <div className="section_heading">ABOUT US</div>
            <div className="section_content">
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>Get In Touch</li>
              </a>
              <a href="">
                <li>FAQs</li>
              </a>
            </div>
          </div>
          <div className="section">
            <div className="section_heading">
              <div className="section_heading">PRODUCT</div>
              <div className="section_content">
                <a href="">
                  <li>Testimonials</li>
                </a>
                <a href="">
                  <li>How it works</li>
                </a>
                <a href="">
                  <li>Members Discount</li>
                </a>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section_heading">NOT QUITE READY FOR YOUGURU?</div>
            <div className="section_content">
              <li>Join our online no-code community for free.No spam ever</li>
              <li>
                <form className="footer_form">
                  <label>
                    <input
                      className="text_footer"
                      type="email"
                      name="email"
                      placeholder="xyz999@gmail.com"
                    />
                  </label>
                  <input
                    className="button_footer"
                    type="submit"
                    value="Subscribe"
                  />
                </form>
              </li>
              <div className="footer_messenger">
                <img src="footer_messenger.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
