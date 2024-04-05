import React from "react";
import style from "./Service.module.css";
import { TiMediaPlay } from "react-icons/ti";
function Servicecard() {
  return (
    <div>
      <style>
        {`
         .sec-sixs-cards .card p{
          color:black;
         }  
         .sec-sixs-cards .card:hover{
         transform: translateY(-10px);
        }

        .sec-sixs-cards .card{
         margin-top:40px;
         }
         
            `}
      </style>
      <div className="sec-sixs-cards">
        <div className="card">
          <div className="card-body">
            <TiMediaPlay />
            <h5 className="card-title">Lorem Ipsum</h5>
            <p className="card-text">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Servicecard;
