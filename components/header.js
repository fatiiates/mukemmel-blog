import React from "react";
import Nav from "./nav.js";

const Header = props => (
  <header>
  <div className="headerTop" >
    <div className="welcome" >Bloğuma hoşgeldin!</div>
    <div className="social" >
      <ul className="social-icons" >
      <style jsx>{`
        li {
          float:right;
          list-style:none
        }
        i {
          background:transparent;
          color:white;
          font-size:20px;
        }
        .text {
          font-size: 30px;
        }
        .text_element--border-effect {
            transition: border-color .4s ease-in-out;
        }

        .typed-cursor{
            opacity: 1;
            -webkit-animation: blink 0.7s infinite;
            -moz-animation: blink 0.7s infinite;
            animation: blink 0.7s infinite;
        }

        @keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-webkit-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }
        @-moz-keyframes blink{
            0% { opacity:1; }
            50% { opacity:0; }
            100% { opacity:1; }
        }

      `}</style>
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fa fa-google-plus"></i></a></li>
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
      </ul>
    </div>
  </div>
  <div className="headerBottom" >
    <div  style={{padding:"15px",fontSize:"25px"}}>
      <style jsx>{`
        * {
          font-size:30px;
          justify-content:center
        }
      `}</style>
      <center>
        <p className="text"><span className="text_element text_element--border-effect"> </span> </p>
      </center>
    </div>
    <div>
      <center>
        <Nav/>
      </center>
    </div>
    {props.children}
  </div>


  <script type="text/javascript" src="https://cdn.bootcss.com/typed.js/1.1.7/typed.min.js"></script>
  <script type="text/javascript" src="/static/js/typed-effect.js"></script>

  </header>

);

export default Header;
