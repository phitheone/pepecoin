import React from "react";
import "./Hero.css";

import dc from "../../images/head.png";

const Hero = () => {
  return (
    <div className="HeroSuper" id="hero">
      <div className="Herocontainer">
        <h1>
          Arbi<span>trump</span>:
        </h1>
        <h2>How does it work?</h2>
        <p>
          Arbitrump aims to provide everyone with the opportunity to participate
          in Decentralized Finance (DeFi).
          <br />
          <br /> We took inspiration from industry leaders in the booming DeFi
          yield space and want to create our own innovation of the Nodes
          protocol. We will provide a long-term sustainable environment that
          incentivizes long-term investments. Yield will be farmed and
          redistributed in equal proportion to your nodes, relative to how much
          $Trump is within them. Fixed rates are not guaranteed as these may
          change over time with industry conditions to ensure the protocol's
          health. <br />
          <br />
          However, all yield will always be distributed back across these nodes
          acting as yield baskets which create a lifetime source of passive
          income. For each node you purchase you will receive daily rewards in
          the form of $Trump . Arbitrump nodes act as a yield basket where
          rewards are paid out to you as a function of the reward pool. The
          reward pool will be sourced from a variety of yield farm services and
          investor injections.
        </p>
        <div className="HeroBtnContainer">
          {/* <a
            href="https://raydium.io/swap?inputCurrency=sol&outputCurrency=3DbnknoW4iRJomgF2Vv1iuLa1Qc6jasKAFLeVL9Dag3B&outputSymbol=Astro&fixed=in"
            target="_blank"
          >
            <div className="HeroBtn">
              <img src={dc} /> BUY $ASTRO
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
