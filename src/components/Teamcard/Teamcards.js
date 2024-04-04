import React from "react";
import style from "./Teamcards.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Teamcards({ image,tittle,para,paras}) {
  return (
    <div>
      <style>{`.card_nine_sec .card-body svg{
          font-size: 40px;
        }
        .card-text svg{
          font-size: 15px !important;
    color: rgb(83, 106, 145);
    margin-right: 7px;
    
        }
        
        .text-body-secondary a{
          text-decoration: none;
          background: rgb(239, 242, 248);
          border-radius: 20px;
          padding: 0px 0px 5px 2px;
        }
        @media only screen and (max-width: 768px) {
          .card-body >p {
            font-size: 12px;
          }
        }
        
        `}</style>
      <div className={style.card_nine_sec}>
        <img src={image} alt="Italian Trulli" />

        <div className={`card-body ${style.sec_nine_cardbody}`}>
          <h5 className="card-title">{tittle}</h5>
          <p>{paras}</p>
          <p className="card-text">
            {para}
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                {" "}
                <FaFacebook />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                {" "}
                <FaLinkedin />
              </a>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Teamcards;
