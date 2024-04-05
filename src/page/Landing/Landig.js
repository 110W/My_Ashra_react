import React from "react";
import style from "./Landing.module.css";
import Navbar from "../../components/Navbar";
import { FaPlus } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import Teamcards from "../../components/Teamcard/Teamcards";
import Servicecard from "../../components/Servicescards/Servicecard";
import { TiMediaPlay } from "react-icons/ti";
import Pricings from "../../components/pricing/Pricings";
import { CiCircleQuestion } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import Footer from "../../components/footer/Footer";
import { FaLongArrowAltUp } from "react-icons/fa";

function Landig() {
  return (
    <>
      <style>
        {`
      .accordion-item{
        margin-bottom: 30px;
        border-radius:20px
      }
      .accordion-item .accordion-header strong:hover{
        color:rgb(0,166,235);
      }
      .accordion-item .accordion-header strong {
        font-size: 18px;
        padding: 10px;
    }
      .accordion-item span {
        font-size: 18px;
        margin-right: 15px;
        color:rgb(0,166,235);
    }
    .accordion-item p{
      font-size:18px;
    }
    .accordion-button{
      background: none !important; 
    }
    .accordion-button:focus{
      box-shadow:none;
    }
    .accordion-button:not(.collapsed) {
      color:rgb(0,166,235);
     
    }
    accordion-button collapsed{
      padding:24px;
    }
    .progress{
      margin-bottom: 20px;
      border-radius:0px;
      height: 11px;
  }
  .card-body p{
    text-align:left;
  }
  .card-body svg{
    font-size: 38px;
    /* color: aqua; */
    color: rgb(0, 166, 235);
  }
  .card-body h5{
    color:rgb(86,108,146);
    padding-bottom:5px;
  }
   .card{
    border: none;
    box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);
    padding: 50px 30px;
    transition: all ease-in-out 0.4s;
    background: #fff;
    height: 100%;

  }
 .nav-tabs{
  justify-content: center;
 }
 .nav-tabs {
border:none;
margin-bottom:40px;
 }
 .nav-link{
border:none;
 }
//  .first_img img{
//   max-width: 100%;
//     height: auto;
//  }
//  .secnd_img img{
//   max-width: 100%;
//     height: auto;
//  }
.nav-tabs .nav-link.active{
  background-color: rgb(71, 178, 228);
    color: white;
    padding: 2px 20px 2px 20px;
    border-radius: 20px;

}
.nav-tabs .nav-link{
  padding: 2px 20px 2px 20px;
  border-radius: 20px;

}
.row_six .card:hover .card-title{
  color:rgb(0,166,235);

}
.row_six .card:hover{
transform: translateY(-10px);

}
.sec_nine{
  background-color:rgb(243,245,250);
}
.sec_eleven .accordion{
  padding-inline: 7%!important;
}
.accordion-body>p{
  text-align:left!important;
}
.map-head-para p{
  text-align: left;
  color: rgb(85, 184, 230);
}
.map-head-para h5{
 color: rgb(41,60,93)
}
.map-head-para{
  display:flex;
}
.map-head-para .map svg{
  margin-right: 10px;
  font-size: 40px;
  color: rgb(85, 184, 230);
  background: rgb(231, 245, 251);
  padding: 10px;
  border-radius: 50%;
}
.map-head-para-google{
border-top: 3px solid #47b2e4;
    border-bottom: 3px solid #47b2e4;
    padding: 30px;
    background: #fff;
    width: 100%;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  .Name_and_email .form-control{
    margin-bottom:30px;
  }
  textarea{
    width: 96%;
    margin-left: 16px;
    margin-top: 40px;
    margin-bottom:90px;
} 
  .map_btn{
    text-align:center; 
  }
  .map_btn button[type=submit]{
  background: #47b2e4;
    border: 0;
    padding: 12px 34px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
  }
  width: 100%;
    border-top: 3px solid #47b2e4;
    border-bottom: 3px solid #47b2e4;
    padding: 30px;
    background: #fff;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);

//     #footer .footer-newsletter form input[type=email] {
//       border: 0;
//       padding: 4px 8px;
//       width: calc(100% - 100px);
//   }
//   #footer .footer-newsletter form input[type=submit] {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     border: 0;
//     background: none;
//     font-size: 16px;
//     padding: 0 20px;
//     background: #47b2e4;
//     color: #fff;
//     transition: 0.3s;
//     border-radius: 50px;
//     box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
// }
// #footer .footer-newsletter form {
//   margin-top: 30px;
//   background: #fff;
//   padding: 6px 10px;
//   position: relative;
//   border-radius: 50px;
//   box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
//   text-align: left;
// }
.Head_and_form input {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 50px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
  text-align: left;
  width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    border:none;
}
.Head_and_form_btn{
  width: 300px;
  position: absolute;
    top: 80px;
    right: 240px;
}
.Head_and_form_btn input{
  background-color:rgb(71,178,228);
  color:white;
  border:none;
  padding-top:10px;
  padding-bottom:10px;

}
.Head_and_form{
  position:relative;
}
.last-footer-head-one-two{
  display:flex;
  justify-content:space-between;
  
}
@media only screen and (max-width: 414px) {

 .card{
    margin-bottom:20px;
  }
  .accordion-item .accordion-header span {
    font-size: 12px;
  }
  .accordion-body>p {
    font-size:12px;
  }
  
  .Head_and_form_btn {
    width: 50%;
    position: absolute;
    top: 95px;
    right: 6px;
  }
  .accordion-item .accordion-header strong {
    font-size: 12px;
    padding: 10px;
  }
}

@media only screen and (max-width: 768px) {

.accordion-item .accordion-header strong{
font-size:12px;
}
.accordion-body>p{
  font-size:12px;
}
.Head_and_form_btn {
    width: 50%;
    position: absolute;
    top: 92px;
    right: 8px;
}
}
@media only screen and (max-width: 768px) {
  .card-body h5 {
    font-size: 9px;
  }
  .card-body svg{
    font-size: 25px;
  }
  .card-body>p {
    color: #47b2e4;
    font-size: 5px!important;
  }
  .listone{
    font-size: 10px!important;
  }
  .listtwo{
    font-size: 10px!important;
  }
  .card-body span {
    font-size: 30px!important;
  }
  .card{
    padding: 20px 30px;
  }
  .Head_and_form_btn {
    width: 50%;
    position: absolute;
    top: 76px;
    right: 8px;
  }
}





@media only screen and (max-width: 820px) {
  .card-body h5 {
    font-size: 9px;
  }
  .card-body svg{
    font-size: 25px;
  }
  .card-body>p {
    color: #47b2e4;
    font-size: 5px!important;
  }
  .listone{
    font-size: 10px!important;
  }
  .listtwo{
    font-size: 10px!important;
  }
  .card-body span {
    font-size: 30px!important;
  }
  .card{
    padding: 20px 30px;
  }
  .Head_and_form_btn {
    width: 50%;
    position: absolute;
    top: 76px;
    right: 8px;
  }
}



@media only screen and (max-width: 1024px) {
  .card-body h5 {
    font-size: 9px;
  }
  .card-body svg{
    font-size: 25px;
  }
  .card-body>p {
    color: #47b2e4;
    font-size: 5px!important;
  }
  .listone{
    font-size: 10px!important;
  }
  .listtwo{
    font-size: 10px!important;
  }
  .card-body span {
    font-size: 30px!important;
  }
  .card{
    padding: 20px 30px;
  }
  .Head_and_form_btn {
    width: 50%;
    position: absolute;
    top: 76px;
    right: 8px;
  }
}

@media only screen and (max-width: 376px) {
  .sec-sixs .card{
 width: 43%;
     display: flex;
     margin: auto;
     margin-bottom: 25px;
   }
   }







   @media only screen and (max-width:415px) {
    .sec-sixs .card{
   width: 43%;
       display: flex;
       margin: auto;
       margin-bottom: 25px;
     }
     }
  

     @media only screen and (max-width:431px) {
      .sec-sixs .card{
     width: 43%;
         display: flex;
         margin: auto;
         margin-bottom: 25px;
       }
       }
    


  //  @media only screen and (max-width: 375px) {
  //   .card{
  //   width: 43%;
  //       display: flex;
  //       margin: auto;
  //       margin-bottom: 25px;
  //     }
  //     }


  @media only screen and (max-width:650px){
  .Head_and_form .Head_and_form_btn{
    width: 51%;
    position: absolute;
    top: 95px;
    right: 0px;
      
  }
}
// @media only screen and (max-width:650px){
// eight_row .nav-item{
//   margin: auto;
//   border: 1px solid white;
//   margin:none;
// }
}
      `}
      </style>
      <Navbar />
      <div className={style.landing}>
        <section className={style.section_one} id="home">
          <div className="container">
            <div className={`row ${style.row_one}`}>
              <div className="col-md-6">
                <h2>Better Solutions For Your Business</h2>
                <p>
                  We are team of talented designers making websites with
                  Bootstrap
                </p>
                <div className="buttons_sec_one">
                  <button
                    className={`btn btn-outline-success ${style.sec_one_btn}`}
                    type="submit"
                  >
                    Get started
                  </button>
                  <button
                    className={`btn btn-outline-success ${style.sec_one_btn_two}`}
                    type="submit"
                  >
                    <TiMediaPlay />
                    watch video
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className={style.image}>
                  <img
                    src="/images/image_one_sec_one-removebg-preview.png"
                    alt="Italian Trulli"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.section_two}>
          <div className="container">
            <div className={`row ${style.row_two}`}>
              <div className="col-md-2">
                <img
                  src="/images/client-1 sec two one img.png"
                  alt="Italian Trulli"
                />
              </div>
              <div className="col-md-2">
                <img src="/images/client-2.png" alt="Italian Trulli" />
              </div>
              <div className="col-md-2">
                <img src="/images/client-3.png" alt="Italian Trulli" />
              </div>
              <div className="col-md-2">
                <img src="/images/client-4.png" alt="Italian Trulli" />
              </div>
              <div className="col-md-2">
                <img src="/images/client-5.png" alt="Italian Trulli" />
              </div>
              <div className="col-md-2">
                <img src="/images/client-6.png" alt="Italian Trulli" />
              </div>
            </div>
          </div>
        </section>
        <section className={style.section_three} id="About">
          <div className="container">
            <div className={`row ${style.row_three}`}>
              <div className={style.Head}>
                <h1>ABOUT US</h1>
              </div>
              <div className="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  <TiTick />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>

                <p>
                  <TiTick />
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </p>

                <p>
                  <TiTick />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <button
                  className={`btn btn-outline-success ${style.sec_three_btn}`}
                  type="submit"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={style.section_four}>
          <div className="container">
            <div className={`row ${style.row_four}`}>
              <div className="col-md-6">
                <h3>
                  Eum ipsam laborum deleniti-
                  <span>velit pariatur architecto aut nihil</span>
                </h3>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <span>01</span>
                        <strong>
                          Non consectetur a erat nam at lectus urna duis?
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Feugiat pretium nibh ipsum consequat. Tempus iaculis
                          urna id volutpat lacus laoreet non curabitur gravida.
                          Venenatis lectus magna fringilla urna porttitor
                          rhoncus dolor purus non.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <span>02</span>
                        <strong>
                          Feugiat scelerisque varius morbi enim nunc?
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          {" "}
                          Dolor sit amet consectetur adipiscing elit
                          pellentesque habitant morbi. Id interdum velit laoreet
                          id donec ultrices. Fringilla phasellus faucibus
                          scelerisque eleifend donec pretium. Est pellentesque
                          elit ullamcorper dignissim. Mauris ultrices eros in
                          cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <span>03</span>
                        <strong>
                          {" "}
                          Dolor sit amet consectetur adipiscing elit?
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Eleifend mi in nulla posuere sollicitudin aliquam
                          ultrices sagittis orci. Faucibus pulvinar elementum
                          integer enim. Sem nulla pharetra diam sit amet nisl
                          suscipit. Rutrum tellus pellentesque eu tincidunt.
                          Lectus urna duis convallis convallis tellus. Urna
                          molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/section-four-img-removebg-preview (1).png"
                  alt="Italian Trulli"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={style.section_five}>
          <div className="container">
            <div className={`row ${style.row_five}`}>
              <div className="col-md-6">
                <img
                  src="/images/section-five img.png"
                  alt="Italian Trulli"
                />
              </div>
              <div className="col-md-6">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates
                </h3>
                <p>
                  <i>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </i>
                </p>
                <>
                  <div className={style.Name_and_percent}>
                    <span>HTML</span>
                    <strong>100%</strong>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Success example"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-rgb(41,60,93)"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className={style.Name_and_percent}>
                    <span>CSS</span>
                    <strong>90%</strong>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Info example"
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-rgb(41,60,93)"
                      style={{ width: "90%" }}
                    />
                  </div>
                  <div className={style.Name_and_percent}>
                    <span>JAVASCRIPT</span>
                    <strong>75%</strong>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Warning example"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-rgb(41,60,93)"
                      style={{ width: "75%" }}
                    />
                  </div>
                  <div className={style.Name_and_percent}>
                    <span>PHOTOSHOP</span>
                    <strong>55%</strong>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-bar bg-rgb(41,60,93))"
                      style={{ width: "55%" }}
                    />
                  </div>
                </>
              </div>
            </div>
          </div>
        </section>
        <section className={style.section_six} id="Service">
          <div className="container">
            <div className="sec-sixs">
              <div className={`row ${style.row_six}`}>
                <div className="Head">
                  <h1>SERVICES</h1>
                  <p>
                    Magnam dolores commodi suscipit. Necessitatibus eius
                    consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                    velit. Quisquam quos quisquam cupiditate. Et nemo qui
                    impedit suscipit alias ea. Quia fugiat sit in iste officiis
                    commodi quidem hic quas.
                  </p>
                </div>
                <div className="col-md-3">
                  {/* <div className="card">
                  <div className="card-body">
                    <TiMediaPlay />
                    <h5 className="card-title">Lorem Ipsum</h5>
                    <p className="card-text">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div> */}
                  <Servicecard />
                </div>
                <div className="col-md-3">
                  {/* <div className="card">
                  <div className="card-body">
                    <TiMediaPlay />
                    <h5 className="card-title">Lorem Ipsum</h5>
                    <p className="card-text">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div> */}
                  <Servicecard />
                </div>
                <div className="col-md-3">
                  {/* <div className="card">
                  <div className="card-body">
                    <TiMediaPlay />
                    <h5 className="card-title">Lorem Ipsum</h5>
                    <p className="card-text">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div> */}
                  <Servicecard />
                </div>
                <div className="col-md-3">
                  {/* <div className="card">
                  <div className="card-body">
                    <TiMediaPlay />
                    <h5 className="card-title">Lorem Ipsum</h5>
                    <p className="card-text">
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div> */}
                  <Servicecard />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.section_seven}>
          <div className="container">
            <div className={`row ${style.row_seven}`}>
              <div className="col-md-12">
                <div className={`row ${style.sec_seven_head}`}>
                  <h3>Call To Action</h3>
                </div>
                <div className={`row ${style.para_btn}`}>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <a class="cta-btn align-middle" href="#">
                    Call To Action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.section_eight} id="Portfolio">
          <div className="container">
            <div className="eight_row">
            <div className={`row ${style.row_eight}`}>
              <div className={style.Head}>
                <h1>PORTFOLIO</h1>
              </div>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
              <>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      App
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="contact-tab-pane"
                      aria-selected="false"
                    >
                      Card
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="disabled-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#disabled-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="tab-pane"
                      aria-selected="false"
                      disabled=""
                    >
                      Web
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex={0}
                  >
                    <div className={`row ${style.row_eight}`}>
                      <div className="col-md-4">
                        {/* <div className={`${style.thrd_img} parent`}>
                          <img
                            src="/assets/images/portfolio-1 img one for tab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus/>
                              <BiMessageSquareDetail/>
                            </div>
                          </div>
                        </div> */}

                        <div className={`${style.thrd_img} parent`}>
                          <img
                            src="/images/portfolio-1 img one for tab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={style.thrd_img}>
                          <img
                            src="/images/portfolio-2 img 2 for tab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={style.thrd_img}>
                          <img
                            src="/images/portfolio-3 img 3 tab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`row ${style.row_nine}`}>
                        <div className="col-md-4">
                          <div className={style.thrd_img}>
                            <img
                              src="/images/portfolio-6 img 4 tab one.jpg"
                              alt="Italian Trulli"
                            />
                            <div className={`${style.hover_div} child`}>
                              <div className={style.app1_app}>
                                <h4>App 1</h4>
                                <p>App</p>
                              </div>
                              <div className={style.app1_app}>
                                <FaPlus />
                                <BiMessageSquareDetail />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className={style.thrd_img}>
                            <img
                              src="/images/portfolio-5 img 5 tab one.jpg"
                              alt="Italian Trulli"
                            />
                            <div className={`${style.hover_div} child`}>
                              <div className={style.app1_app}>
                                <h4>App 1</h4>
                                <p>App</p>
                              </div>
                              <div className={style.app1_app}>
                                <FaPlus />
                                <BiMessageSquareDetail />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className={style.thrd_img}>
                            <img
                              src="/images/portfolio-7img 8 tab one.jpg"
                              alt="Italian Trulli"
                            />
                            <div className={`${style.hover_div} child`}>
                              <div className={style.app1_app}>
                                <h4>App 1</h4>
                                <p>App</p>
                              </div>
                              <div className={style.app1_app}>
                                <FaPlus />
                                <BiMessageSquareDetail />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`row ${style.row_ten}`}>
                          <div className="col-md-4"></div>
                          <div className="col-md-4">
                            <div className={style.thrd_img}>
                              <img
                                src="/images/portfolio-9 img 7 tab one.jpg"
                                alt="Italian Trulli"
                              />
                              <div className={`${style.hover_div} child`}>
                                <div className={style.app1_app}>
                                  <h4>App 1</h4>
                                  <p>App</p>
                                </div>
                                <div className={style.app1_app}>
                                  <FaPlus />
                                  <BiMessageSquareDetail />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className={style.thrd_img}>
                              <img
                                src="/images/portfolio-8 img 9 taab one.jpg"
                                alt="Italian Trulli"
                              />
                              <div className={`${style.hover_div} child`}>
                                <div className={style.app1_app}>
                                  <h4>App 1</h4>
                                  <p>App</p>
                                </div>
                                <div className={style.app1_app}>
                                  <FaPlus />
                                  <BiMessageSquareDetail />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabIndex={0}
                  >
                    <div className={`row ${style.row_eleven}`}>
                      <div className="col-md-4">
                        <div className={style.thrd_img}>
                          <img
                            src="/images/portfolio-1 img one for tab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={style.thrd_img}>
                          <img
                            src="/images/portfolio-3 img 3 tab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={style.thrd_img}>
                          <img
                            src="/images/portfolio-6 img 4 tab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabIndex={0}
                  >
                    <div className={`row ${style.row_twelve}`}>
                      <div className="col-md-4">
                        <div className={style.thrd_img}>
                          <img
                            src="/images/portfolio-4 img for tab 3.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={style.thrd_img}>
                          <img
                            src="/images/portfolio-7img 8 tab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={style.thrd_img}>
                          <img
                            src="/images/portfolio-8 img 9 taab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="disabled-tab-pane"
                    role="tabpanel"
                    aria-labelledby="disabled-tab"
                    tabIndex={0}
                  >
                    <div className={`row ${style.row_thirteen}`}>
                      <div className="col-md-4">
                        <div className={style.thrd_img}>
                          <img
                            src="/images/portfolio-2 img 2 for tab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={style.thrd_img}>
                          <img
                            src="/images/portfolio-5 img 6 tab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className={style.thrd_img}>
                          <img
                            src="/images/portfolio-9 img 7 tab one.jpg"
                            alt="Italian Trulli"
                          />
                          <div className={`${style.hover_div} child`}>
                            <div className={style.app1_app}>
                              <h4>App 1</h4>
                              <p>App</p>
                            </div>
                            <div className={style.app1_app}>
                              <FaPlus />
                              <BiMessageSquareDetail />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
            </div>
          </div>
        </section>
        <section
          className={[style.section_eight, "sec_nine"].join(" ")}
          id="Team"
        >
          <div className="container">
            <div className={`row ${style.row_eight} ${style.row_fourteen}`}>
              <div className={style.Head}>
                <h1>TEAM</h1>
              </div>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
              <div className={`col-md-6 ${style.col_for_sec_nine}`}>
                {/* <div className={style.card_nine_sec}>
                  <img
                    src="/assets/images/team-1 section nine card one image.jpg"
                    alt="Italian Trulli"
                  />

                  <div className="card-body">
                    <h5 className="card-title">Walter White</h5>
                    <p>Chief Executive Officer</p>
                    <p className="card-text">
                      Explicabo voluptatem mollitia et repellat qui dolorum
                      quasi
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                      </small>
                    </p>
                  </div>
                </div> */}
                <Teamcards
                  image={
                    "/images/team-1 section nine card one image.jpg"
                  }
                  tittle={"Walter White"}
                  para={
                    "Explicabo voluptatem mollitia et repellat qui dolorum quasi"
                  }
                  paras={"Chief Executive Officer"}
                />
              </div>

              <div className={`col-md-6 ${style.col_for_sec_nine}`}>
                {/* <div className={style.card_nine_sec}>
                  <img
                    src="/assets/images/team-1 section nine card one image.jpg"
                    alt="Italian Trulli"
                  />

                  <div className="card-body">
                    <h5 className="card-title">Walter White</h5>
                    <p>Chief Executive Officer</p>
                    <p className="card-text">
                      Explicabo voluptatem mollitia et repellat qui dolorum
                      quasi
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                      </small>
                    </p>
                  </div>
                </div> */}
                <Teamcards
                  image={"/images/team-2 section nine card image 2.jpg"}
                  tittle={"Sarah Jhonson"}
                  para={
                    "Quisquam facilis cum velit laborum corrupti fuga rerum quia"
                  }
                  paras={"Product Manager"}
                />
              </div>
            </div>
            <div className={`row ${style.row_eight} ${style.row_fourteen}`}>
              <div className="col-md-6">
                {/* <div className={style.card_nine_sec}>
                  <img
                    src="/assets/images/team-1 section nine card one image.jpg"
                    alt="Italian Trulli"
                  />

                  <div className="card-body">
                    <h5 className="card-title">Walter White</h5>
                    <p>Chief Executive Officer</p>
                    <p className="card-text">
                      Explicabo voluptatem mollitia et repellat qui dolorum
                      quasi
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                      </small>
                    </p>
                  </div>
                </div> */}
                <Teamcards
                  image={"/images/team-3 section nine image 3.jpg"}
                  tittle={"William Anderson"}
                  para={
                    "Dolorum tempora officiis odit laborum officiis et et accusamus"
                  }
                  paras={"CTO"}
                />
              </div>
              <div className="col-md-6">
                {/* <div className={style.card_nine_sec}>
                  <img
                    src="/assets/images/team-1 section nine card one image.jpg"
                    alt="Italian Trulli"
                  />

                  <div className="card-body">
                    <h5 className="card-title">Walter White</h5>
                    <p>Chief Executive Officer</p>
                    <p className="card-text">
                      Explicabo voluptatem mollitia et repellat qui dolorum
                      quasi
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                      </small>
                    </p>
                  </div>
                </div> */}
                <Teamcards
                  image={"/images/team-4 section nine image 4.jpg"}
                  tittle={"Amanda Jepson"}
                  para={
                    "Aut maiores voluptates amet et quis praesentium qui senda para"
                  }
                  paras={"Accountant"}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className={[style.section_eight, "sec_ten"].join(" ")}
          id="Pricing"
        >
          <div className="container">
            <div className={`row ${style.row_eight} ${style.row_fifteen}`}>
              <div className={style.Head}>
                <h1>PRICING</h1>
              </div>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
              <div className="col-md-4">
                {/* <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Free Plan</h5>
                    <p className="card-text">
                      <sup>$</sup> 0
                    </p>
                    <p>per month</p>
                    <ul>
                      <li>Quam adipiscing vitae proin</li>
                      <li>Nec feugiat nisl pretium</li>
                      <li>Nulla at volutpat diam uteera</li>
                      <li>Pharetra massa massa ultricies</li>
                      <li>Massa ultricies mi quis hendrerit</li>
                    </ul>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div> */}
                <Pricings
                  list1Line1={{ textDecoration: "none" }}
                  list1Line2={{ textDecoration: "none" }}
                  list1Line3={{ textDecoration: "none" }}
                  list1Line4={{ textDecoration: "line-through" }}
                  list1Line5={{ textDecoration: "line-through" }}
                  prezero={"Free Plan"}
                  zero={"0"}
                  dollarsign={"$"}
                  paragraph={"per month"}
                  className={style.btnClass1}
                  list1={"Quam adipiscing vitae proin"}
                  list2={"Nec feugiat nisl pretium"}
                  list3={"Nulla at volutpat diam uteera"}
                  list4={"Pharetra massa massa ultricies"}
                  list5={"Massa ultricies mi quis hendrerit"}
                />
              </div>
              <div className="col-md-4">
                <Pricings
                  prezero={"Business Plan"}
                  zero={"29"}
                  dollarsign={"$"}
                  paragraph={"per month"}
                  className={style.btnClass2}
                  list1={"Quam adipiscing vitae proin"}
                  list2={"Nec feugiat nisl pretium"}
                  list3={"Nulla at volutpat diam uteera"}
                  list4={"Pharetra massa massa ultricies"}
                  list5={"Massa ultricies mi quis hendrerit"}
                />
              </div>
              <div className="col-md-4">
                <Pricings
                  prezero={"Developer Plan"}
                  zero={"49"}
                  dollarsign={"$"}
                  paragraph={"per month"}
                  className={style.btnClass1}
                  list1={"Quam adipiscing vitae proin"}
                  list2={"Nec feugiat nisl pretium"}
                  list3={"Nulla at volutpat diam uteera"}
                  list4={"Pharetra massa massa ultricies"}
                  list5={"Massa ultricies mi quis hendrerit"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={[style.section_six, "sec_eleven"].join(" ")}>
          <div className="container">
            <div className={`row ${style.row_six} ${style.row_sixteen}`}>
              <div className={style.Head}>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
              <div className="col-md-12">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <span>
                          <CiCircleQuestion />
                        </span>
                        <strong>
                          Non consectetur a erat nam at lectus urna duis?
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Feugiat pretium nibh ipsum consequat. Tempus iaculis
                          urna id volutpat lacus laoreet non curabitur gravida.
                          Venenatis lectus magna fringilla urna porttitor
                          rhoncus dolor purus non.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <span>
                          <CiCircleQuestion />
                        </span>
                        <strong>
                          Feugiat scelerisque varius morbi enim nunc?
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          {" "}
                          Dolor sit amet consectetur adipiscing elit
                          pellentesque habitant morbi. Id interdum velit laoreet
                          id donec ultrices. Fringilla phasellus faucibus
                          scelerisque eleifend donec pretium. Est pellentesque
                          elit ullamcorper dignissim. Mauris ultrices eros in
                          cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <span>
                          <CiCircleQuestion />
                        </span>
                        <strong>
                          {" "}
                          Dolor sit amet consectetur adipiscing elit?
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Eleifend mi in nulla posuere sollicitudin aliquam
                          ultrices sagittis orci. Faucibus pulvinar elementum
                          integer enim. Sem nulla pharetra diam sit amet nisl
                          suscipit. Rutrum tellus pellentesque eu tincidunt.
                          Lectus urna duis convallis convallis tellus. Urna
                          molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsefour"
                        aria-expanded="false"
                        aria-controls="flush-collapsefour"
                      >
                        <span>
                          <CiCircleQuestion />
                        </span>
                        <strong>
                          {" "}
                          Dolor sit amet consectetur adipiscing elit?
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapsefour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Eleifend mi in nulla posuere sollicitudin aliquam
                          ultrices sagittis orci. Faucibus pulvinar elementum
                          integer enim. Sem nulla pharetra diam sit amet nisl
                          suscipit. Rutrum tellus pellentesque eu tincidunt.
                          Lectus urna duis convallis convallis tellus. Urna
                          molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsefive"
                        aria-expanded="false"
                        aria-controls="flush-collapsefive"
                      >
                        <span>
                          <CiCircleQuestion />
                        </span>
                        <strong>
                          {" "}
                          Dolor sit amet consectetur adipiscing elit?
                        </strong>
                      </button>
                    </h2>
                    <div
                      id="flush-collapsefive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Eleifend mi in nulla posuere sollicitudin aliquam
                          ultrices sagittis orci. Faucibus pulvinar elementum
                          integer enim. Sem nulla pharetra diam sit amet nisl
                          suscipit. Rutrum tellus pellentesque eu tincidunt.
                          Lectus urna duis convallis convallis tellus. Urna
                          molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={[style.section_eight, "sec_eleven"].join(" ")}
          id="Contact"
        >
          <div className="container">
            <div className={`row ${style.row_eight} ${style.row_seventeen}`}>
              <div className={style.Head}>
                <h1>CONTACT</h1>
              </div>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
              <div className="col-md-5">
                <div className="map-head-para-google">
                  <div className="map-head-para">
                    <div className="map">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="map">
                      <h5> Location:</h5>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                  <div className="map-head-para">
                    <div className="map">
                      <MdOutlineEmail />
                    </div>
                    <div className="map">
                      <h5> Email:</h5>
                      <p>info@example.com</p>
                    </div>
                  </div>
                  <div className="map-head-para">
                    <div className="map">
                      <CiMobile3 />
                    </div>
                    <div className="map">
                      <h5> Call:</h5>
                      <p>+1 5589 55488 55s</p>
                    </div>
                  </div>

                  <div className="google-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8155818.316568948!2d-96.22777131817048!3d60.06204034564598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d9285ae65a1a2d3%3A0x79d86b7acb6eb3ca!2sHudson%20Bay!5e0!3m2!1sen!2sus!4v1711095265989!5m2!1sen!2sus"
                      width={465}
                      height={300}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className={`row ${style.row_eighteen}`}>
                  <div className="col-md-6">
                    <div className="Name_and_email">
                      <>
                        <label htmlFor="inputPassword5" className="form-label">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="input-text"
                          className="form-control"
                          aria-describedby="textHelpBlock"
                        />
                      </>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="Name_and_email">
                      <>
                        <label htmlFor="inputPassword5" className="form-label">
                          Your Email
                        </label>
                        <input
                          type="mail"
                          id="input-mail"
                          className="form-control"
                          aria-describedby="mailHelpBlock"
                        />
                      </>
                    </div>
                  </div>
                  <div className="Name_and_email">
                    <div className="subject">
                      <>
                        <label htmlFor="inputPassword5" className="form-label">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="input-text"
                          className="form-control"
                          aria-describedby="textHelpBlock"
                        />
                      </>
                    </div>
                  </div>
                  <textarea rows="7" cols="50" name="comment" form="usrform">
                    Enter text here...
                  </textarea>
                  <div className="map_btn">
                    <button
                      className={`btn btn-outline-success ${style.sec_one_btn}`}
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.section_twelve}>
          <div className="container">
            <div className={`row ${style.row_above_footer}`}>
              <div className="col-md-12">
                <div className="Head_and_form">
                  <h3>Join Our Newsletter</h3>
                  <p>
                    Tamen quem nulla quae legam multos aute sint culpa legam
                    noster magna
                  </p>
                  <form action="" method="post">
                    <input type="email" name="email" />
                    <div className="Head_and_form_btn">
                      <input type="submit" defaultValue="Subscribe" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.section_thirteen}>
          <div className="container">
            <Footer />
          </div>
        </section>
        <section className={style.section_fourteen}>
          <div className="container">
            <div className="row">
              <div className="last-footer-head-one-two">
                <div className="last-footer-head-one">
                  <h6>© Copyright Arsha. All Rights Reserved</h6>
                </div>
                <div className="last-footer-head_two">
                  <h6>
                    Designed by <a href="#">BootstrapMade</a>{" "}
                  </h6>
                </div>
              </div>
              <a href="#home">
                {" "}
                <FaLongArrowAltUp className={style.arrowUp} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Landig;
