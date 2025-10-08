import { EnvelopeIcon, GlobeAltIcon, PhoneIcon } from "@heroicons/react/24/outline";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <span className="footer__logo">Nebula Studio</span>
        <p>
          Nebula Studioは、テクノロジーとクリエイティブを融合させ、社会にインパクトを与えるデジタルプロダクトを共創します。
        </p>
      </div>
      <div className="footer__grid">
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <EnvelopeIcon aria-hidden />
              <a href="mailto:hello@nebula.studio">hello@nebula.studio</a>
            </li>
            <li>
              <PhoneIcon aria-hidden />
              <a href="tel:+81300001234">+81 3 0000 1234</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Offices</h3>
          <ul>
            <li>
              <GlobeAltIcon aria-hidden />
              Tokyo / Singapore / Remote
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Nebula Studio. All rights reserved.</span>
        <div className="footer__links">
          <a href="#services">サービス</a>
          <a href="#work">実績</a>
          <a href="#contact">お問い合わせ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;