import React from "react";
import style from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const footer = () => {
  return (
    <div>
      <style>
        {`
                <style>
                ul {    list-style: none;   }
                .listones:before { content: '> '}
                .listones a{
                    text-decoration: none;
                    color:black;
                }
                .listones a:hover{
                    color:rgb(71, 178, 228);
                }
                
                </style>
                
                `}
      </style>
      <div className={`row ${style.row_footer}`}>
        <div className="col-md-3">
          <h2>ARSHA</h2>
          <ul>
            <li>
              A108 Adam Street
            </li>
            <li>
              New York, NY 535022
            </li>
            <li>
              United States
            </li>
            <li>
              Phone: +1 5589 55488 55
            </li>
            <li>
              Email: info@example.com
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Useful Links</h5>
          <ul>
            <li className="listones">
              <a href="#">Home</a>
            </li>
            <li className="listones">
              <a href="#">About us</a>
            </li>
            <li className="listones">
              <a href="#">Services</a>
            </li>
            <li className="listones">
              <a href="#">Terms of service</a>
            </li>
            <li className="listones">
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Our Services</h5>
          <ul>
            <li className="listones">
              {" "}
              <a href="#">Web Design</a>
            </li>
            <li className="listones">
              {" "}
              <a href="#">Web Development</a>
            </li>
            <li className="listones">
              {" "}
              <a href="#">Product Management</a>
            </li>
            <li className="listones">
              {" "}
              <a href="#">Marketing</a>
            </li>
            <li className="listones">
              {" "}
              <a href="#">Graphic Design</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5>Our Social Networks</h5>
          <ul>
            <li>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valiesP
            </li>
            <a href="#"> <FaTwitter /></a>
            <a href="#"> <FaFacebook /> </a>
            <a href="#"><FaInstagram /></a>
            <a href="#"> <FaTwitter /></a>
            <a href="#"> <FaLinkedin /></a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;
