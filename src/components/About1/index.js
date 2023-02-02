import React from "react";
import "./About1.css";

import foto from "../../images/astrodogeT2.png";
import g1 from "../../images/graph1.png";
import g2 from "../../images/graph2.png";
import t1 from "../../images/t1.png";
import t2 from "../../images/t2.png";
import t3 from "../../images/t3.png";
import t4 from "../../images/t4.png";

const About1 = () => {
  return (
    <div className="A1Super" id="about1">
      <div className="A1Container">
        <div className="A1Top">
          <h1>Trumpnomics</h1>
        </div>
        <div className="A1Bottom">
          <div className="A1Left">
            {/* <img src={g1} /> */}
            <div className="A1Table">
              <div className="A1Row">
                <div className="A1Cell A1Red">
                  <img src={t1} alt="" />
                  <h2>TOKEN DISTRIBUTION</h2>
                  <p>
                    Total Supply: 10,000,000 $Trump <br />
                    Circulating supply: 1,000,000 <br />
                    $Trump Reward Pool: 9,000,000 $Trump
                  </p>
                </div>
                <div className="A1Cell A1Blue">
                  <img src={t2} alt="" />
                  <h2>NODE PRICES</h2>
                  <p>
                    Citizen Awesome Hair node: 100 $Trump <br />
                    Candidate Beautiful Wall node: 500 $Trump <br />
                    President White House node: 1000 $Trump
                  </p>
                </div>
              </div>
              <div className="A1Row">
                <div className="A1Cell A1Blue">
                  <img src={t3} alt="" />
                  <h2>TAXES</h2>
                  <p>
                    Set 11% min slippage to buy or sell $Trump <br />
                    Buy : 10% <br />
                    Sell : 10% <br />
                    There will be 0% fee for compounding. <br />
                    There will be 0% fee for claiming
                  </p>
                </div>
                <div className="A1Cell A1Red">
                  <img src={t4} alt="" />
                  <h2>NODE REWARDS</h2>
                  <p>
                    Reward of each node:(every 6 hours) <br />
                    <br />
                    Citizen Awesome Hair node <br />
                    * 1.25 $Trump ( 24H: 5 $Trump ) <br />
                    <br />
                    Candidate Beautiful Wall node <br />
                    * 7.5 $Trump ( 24H: 30 $Trump ) <br />
                    <br />
                    President White House node <br /> * 18.75 $Trump (24H: 75
                    $Trump )
                  </p>
                </div>
              </div>
            </div>
            {/* <h1>Tokenomics</h1>

            <p>
              Supply: <span>10,000,000,000</span>
              <br />
              <br />
              Max buy 2% supply = <span>200,000,000</span> $astro
              <br />
              Max sell 0.5% supply = <span>50,000,000</span> $astro
              <br />
              <br />
              Tax: <span>8%</span> Buy & Sell
              <br />
              <br />
              <ul>
                <li>1% LP</li>
                <li>1% Contract Dev</li>
                <li>1% Team</li>
                <li>5% Marketing</li>
              </ul>
            </p> */}
          </div>
          <div className="A1Right">
            <img src={g2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
