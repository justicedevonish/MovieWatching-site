import React from 'react';
import './footer.css';
import FooterNavItem from '../components/FooterNavItem';

function Footer() {
  const usefulLinks = [
    'Home',
    'Movies',
    'My List',
    'Terms of service',
    'Privacy Policy',
  ];
  const locations = [
    'Dolorum optio',
    'Non rem rerum',
    'Cras fermentum odio',
    'Justo eget',
    'Fermentum iaculis',
  ];
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>Bojo</span>
              </a>
              <p>
                CSC 301 Web Development and Web Scraping - Justice DeVonish
              </p>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map(link => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Example Street Name <br />
                Example City Name, State 123456
                <br />
                Example <br />
                <br />
                <strong>Phone:</strong> +Example
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{' '}
          <strong>
            <span>Justice DeVonish</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">Justice DeVonish</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
