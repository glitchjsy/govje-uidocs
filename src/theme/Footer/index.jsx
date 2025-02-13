import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import styles from "./styles.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <dl className={styles.socialMedia}>
                            <dt>Find us on social media</dt>
                            <dd>
                                <a title="Twitter opens in new window" href="https://twitter.com/govjersey" target="_blank">
                                    <FontAwesomeIcon fontSize="1.5rem" icon={faTwitter} />
                                    <span className={styles.accessibility}>Twitter opens in new window</span>
                                </a>
                            </dd>
                            <dd>
                                <a title="Facebook opens in new window" href="https://www.facebook.com/GovernmentofJersey" target="_blank">
                                    <FontAwesomeIcon fontSize="1.5rem" icon={faFacebook} />
                                    <span className={styles.accessibility}>Facebook opens in new window</span>
                                </a>
                            </dd>
                            <dd>
                                <a title="LinkedIn opens in new window" href="https://www.linkedin.com/company/government-of-jersey" target="_blank">
                                    <FontAwesomeIcon fontSize="1.5rem" icon={faLinkedin} />
                                    <span className={styles.accessibility}>LinkedIn opens in new window</span>
                                </a>
                            </dd>
                            <dd>
                                <a title="Instagram opens in new window" href="https://www.instagram.com/governmentofjersey" target="_blank">
                                    <FontAwesomeIcon fontSize="1.5rem" icon={faInstagram} />
                                    <span className={styles.accessibility}>Instagram opens in new window</span>
                                </a>
                            </dd>
                            <dd>
                                <a title="YouTube opens in new window" href="https://www.youtube.com/governmentofjersey" target="_blank">
                                    <FontAwesomeIcon fontSize="1.5rem" icon={faYoutube} />
                                    <span className={styles.accessibility}>YouTube opens in new window</span>
                                </a>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <ul className={styles.footerLinks}>
                            <li><a href="https://gov.je/Pages/Accessibility.aspx">Accessibility</a></li>
                            <li><a href="https://gov.je/Pages/ContactUs.aspx">Contact us</a></li>
                            <li><a href="https://gov.je//Pages/Privacy.aspx">Privacy</a></li>
                            <li><a href="https://gov.je//Pages/Terms.aspx">Terms and conditions</a></li>
                            <li className={styles.copyright}>&copy; Luke Wyatt (glitch.je) {new Date().getFullYear()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default React.memo(Footer);
