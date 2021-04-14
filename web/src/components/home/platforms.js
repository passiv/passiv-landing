import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import Container from "../container";

import styles from "./platforms.module.css";

import tda from "../../images/tda-logo.png";
import ibkr from "../../images/ibkr-logo.png";
import tradier from "../../images/tradier-logo.png";
import alpaca from "../../images/alpaca-logo.png";
import questrade from "../../images/questrade-logo.png";
import zerodha from "../../images/zerodha-logo.png";
import unocoin from "../../images/unocoin-logo.png";
import construction from "../../images/construction.png";

function Platforms({}) {
  return (
    <section className={styles.platforms}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.copyContainer}>
            <h2>Platforms</h2>
            <div>
              <p>
                Connect your accounts from any of these partner platforms. If your platform isn't
                listed below, you can join the mailing list to be notified when it's available.
              </p>
              <div className={styles.tileContainer}>
                <a href="https://questrade.com/" target="_blank" rel="noopener noreferrer">
                  <div className={styles.tile}>
                    <img src={questrade} alt="Questrade Logo" />
                  </div>
                </a>
                <a
                  href="https://www.interactivebrokers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.tile}>
                    <img src={ibkr} alt="Interactive Brokers Logo" />
                  </div>
                </a>
                <a href="https://tradier.com/" target="_blank" rel="noopener noreferrer">
                  <div className={styles.tile}>
                    <img src={tradier} alt="Tradier Logo" />
                  </div>
                </a>
                <a href="https://alpaca.markets" target="_blank" rel="noopener noreferrer">
                  <div className={styles.tile}>
                    <img src={alpaca} alt="Alpaca Logo" />
                  </div>
                </a>
              </div>
              <div className={styles.tileContainer}>
                <a href="https://www.tdameritrade.com/" target="_blank" rel="noopener noreferrer">
                  <div className={styles.tile}>
                    <img src={tda} alt="TD Ameritrade Logo" />
                  </div>
                </a>
                <a href="https://zerodha.com/" target="_blank" rel="noopener noreferrer">
                  <div className={styles.tile}>
                    <img src={zerodha} alt="Zerodha Logo" />
                  </div>
                </a>
                <a href="https://unocoin.com/" target="_blank" rel="noopener noreferrer">
                  <div className={styles.tile}>
                    <img src={unocoin} alt="Unocoin Logo" />
                  </div>
                </a>
                <div className={styles.tile}>
                  <img className={styles.small} src={construction} alt="Construction" />
                  <div className={styles.subtext}>More coming soon...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Platforms;
