import React from "react";
import SocialLogin from "../SocialLogin";
import img from "../../../public/logo/apartment.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-green-950 text-white p-10">
        <aside>
          <img src={img} className="w-12" alt="" />
          <p>
            Harmony Heights <br />
            Your reliable partner for luxury living.
          </p>
        </aside>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/apartment">Branding</Link>
        </nav>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </footer>
    
    </div>
  );
};

export default Footer;
