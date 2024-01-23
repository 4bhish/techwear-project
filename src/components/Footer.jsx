import React, { useContext } from "react";
import "./styles/Footer.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LoginIcon from '@mui/icons-material/Login';

import { Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

function Footer() {
  const {user} = useContext(AuthProvider)
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-para">
          <h3>Weartech</h3>
          <p>
            Built with <span>♥</span> in india and around the world. Weartech, Inc. ©
          </p>
          <p>Privacy Policy</p>
          <small>© 2024 Weartech</small>
        </div>
        <div className="footer-connect">
          <h3>Reach Us Here</h3>
          <a  href="https://github.com/4bhish/" target="_blank" className="social-connect">
            <GitHubIcon  className="social-connect-icon" />
            <p>GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/abhishek-hadimani/" target="_blank" className="social-connect">
            <LinkedInIcon className="social-connect-icon" />
            <p>Linked-In</p>
          </a>
        </div>
        <div className="footer-resource">
          <h3>Resource</h3>
          <Link  className='footer-login' to={ user ? '/account-details': '/loginpage'}>
            <LoginIcon className="footer-login-icon" />
            <p>Account</p>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
