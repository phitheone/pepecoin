import React from "react";
import "./About2.css";

import foto from "../../images/head.png";
import title from "../../images/title.png";

const About2 = () => {
  return (
    <div className="A2Super" id="about2">
      <div className="A2Container">
        <div className="A2Left">
          <img src={foto} />
        </div>
        <div className="A2Right">
          {/* <h1>
            Arbi<span>trump</span>
          </h1>
          <h2 className="H2Span">
            Lets make <span>Arbitrum</span> great again!
          </h2> */}
          <img src={title} alt="" />
          <div className="DarkSquare">
            <p>
              Do you want to get on the <span>Arbitrum</span> road to success?
              Join <span>Arbitrump</span>!
              <br />
              <br />
              💵 Experienced team
              <br />
              💵 Long term vision
              <br />
              <br />
              Arbitrump is the token that will <span>build a wall</span> to
              protect your financial situation. Make a great invesment on the
              new <span>Arbitrum</span> ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
