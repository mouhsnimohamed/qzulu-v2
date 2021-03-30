import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo-footer.png';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column copyright">
                <p>© Copyright QZULU Corporation 2020. All rights reserved.</p>
              </div>
              <div className="column">
                <div className="content has-text-centered">
                  <img
                    src={logo}
                    alt="QZulu Token"
                    style={{ width: '15em', height: 'auto' }}
                  />
                </div>
              </div>
              <div className="column">
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/terms">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
