import React from "react";
import style from "./pricings.module.css";
function pricings({list1,list2,list3,list4,list5 , className ,list1Line1,list1Line2,list1Line3,list1Line4,list1Line5, paragraph,dollarsign,zero,prezero}) {
  return (
    <div>
      <style>
        {`
  .card-body ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 42px;
  }
  .card-bodyli{
    color:gray;
  }
  .card-body li:before {
    content: '';  /* placeholder for the SVG */
    position: absolute;
    left: 20px;  /* place the SVG at the start of the padding */
    width: 1em;
    height: 1em;
    background: url("data:image/svg+xml;utf8,<?xml version='1.0' encoding='utf-8'?><svg width='18' height='18' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'><path d='M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z'/></svg>") no-repeat;
  } 
  .card-body .listtwo{
    color:gray;
  }
  .card-body span{
    font-size:50px;
    color: rgb(86, 108, 146);
    font-weight: 400;
  }
  .card-body sup {
    top: -1em;
    font-size: 30px;
    color: rgb(86, 108, 146);
}
.card-body >p{
    color:#47b2e4;
}
.card-body .btn{
    background-color:white!important;
    color: black!important;
}

@media only screen and (max-width:385px)
  <style>
  .pricing-cards .card{
      padding: 20px 30px;
      width: 63%;
      display: flex;
      margin: auto;
      margin-bottom: 50px;
  }


  @media only screen and (max-width:650px){

  .pricing-cards{
    margin: auto;
    width: 63%;
  }
}

    `}
      </style>
      <div className="pricing-cards">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{prezero}</h5>
          <strong className="card-text">
            <sup>{dollarsign}</sup> <span>{zero}</span> 
          </strong>
          <p>{paragraph}</p>
          <ul>
            <li style={list1Line1 && {...list1Line1}} className={`listone ${style.list}`}>{list1}</li>

            <li style={list1Line2 && {...list1Line2}} className={`listone ${style.list}`}>{list2}</li>

            <li style={list1Line3 && {...list1Line3}} className={`listone ${style.list}`}>{list3}</li>

            <li style={list1Line4 && {...list1Line4}} className={`listtwo ${style.list}`}>{list4}</li>

            <li style={list1Line5 && {...list1Line5}} className={`listtwo ${style.list}`}>{list5}</li>
          </ul>
          <a href="#" className={`${className}`}>
            Go somewhere
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
export default pricings;
