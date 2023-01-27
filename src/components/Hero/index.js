import React from "react";
import "./Hero.css";

import dc from "../../images/head.png";

const Hero = () => {
  return (
    <div className="HeroSuper" id="hero">
      <div className="Herocontainer">
        <h1>
          Astro Bonk
          <br />
          Solana Network
        </h1>

        <p>
          Astro Bonk is getting ready to travel to the moon!
          <br />
          Well known devs, this project is aiming to be one of the safest
          choices to invest on the new chain, with an active marketing campaing
          and a larger shilling team.
        </p>
        <div className="HeroBtnContainer">
          <a
            href="https://raydium.io/swap?inputCurrency=sol&outputCurrency=3DbnknoW4iRJomgF2Vv1iuLa1Qc6jasKAFLeVL9Dag3B&outputSymbol=Astro&fixed=in"
            target="_blank"
          >
            <div className="HeroBtn">
              <img src={dc} /> BUY $ASTRO
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
