import React from "react";
import "./Footer.css";
import logoD from "../../images/logotelegram.png";
import logoT from "../../images/twitter.svg";
import logoS from "../../images/panda.png";
import logoZ from "../../images/head.png";
import face from "../../images/face.png";

const Footer = () => {
  return (
    <div className="FooterSuper">
      <div className="FooterContainer">
        <div className="FooterLogo">
          <img src={logoZ} height="150" />
        </div>
        <div className="FooterSocials">
          <a href="https://twitter.com/ArbiTrumpToken" target="_blank">
            <img src={logoT} height="40" />
          </a>
          <a
          //href=""
          //target="_blank"
          >
            <div className="NavBuyBtn">
              <img src={face} /> <p>BUY $Trump</p>
            </div>
          </a>
          <a href="https://t.me/ArbiTrumpP" target="_blank">
            <img src={logoD} height="40" />
          </a>
          {/* <a
          //href="https://docs.google.com/forms/d/e/1FAIpQLSdC-4drcl7Ng2Rz2egmBQUA7slhOabjU37LSYwTIU6vHHOnhA/viewform"
          //target="_blank"
          >
            <img src={logoS} height="40" />
          </a> */}
        </div>
        <div className="FooterCR">
          <p>2023 &#169; Arbitrump team.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
