import React, { useEffect, useState } from "react";
import firebase from "firebase";
import "./nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  });
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          className="logo"
        />
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
          className="avatar"
          onClick={() => firebase.auth().signOut()}
        />
      </div>
    </div>
  );
};

export default Nav;
