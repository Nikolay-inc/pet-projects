import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" id="footer">
          <div className="footer-bottom">
            <div className="container">
              <div className="flex-container">
                <div className="flex-item">
                  <h3 className="footer-title">SiteMap</h3>
                  <div>Map of the site</div>
                </div>
                <div className="flex-item">
                  <h3 className="footer-title">Menu</h3>
                  <a href="/">Main exchange</a>
                  <a href="/about">About</a>
                  <div>Contacts</div>
                </div>
                <div className="flex-item">
                  <h3 className="footer-title">Official currency exchange &copy;</h3>
                  <p>All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer;
