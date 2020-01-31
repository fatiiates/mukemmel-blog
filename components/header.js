import React from "react";
import Nav from "./nav.js";



const Header = props => (
  <header className="col-md-12" >
  <div className="headerTop col-md-9">
    <div className="welcome col-md-6" ><img src="/static/img/king.png" height="50" width="50"/>Bloğuma hoşgeldin!</div>
    <div className="social col-md-6" >
      <ul className="social-icons">
      <style jsx global>{`
        :global(header) {
          background: rgba(255,255,255,.2);
        }
        header li {
          float:right;
          list-style:none
        }
        header i {
          background:transparent;
          color:white;
          font-size:20px;
        }
        header .text {
          font-size: 30px;
        }
        header .text_element--border-effect {
            transition: border-color .4s ease-in-out;
        }

        header .typed-cursor{
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
        @media screen and (max-width:1350px){
          .headerBottom * {
            font-size:20px!important
          }
          center .text {
            text-align:left
          }
        }
        @media screen and (max-width:1200px){
          #div_text {
            width:60%;
          }
        }

      `}</style>
          <li><a target="_blank" href="https://www.instagram.com/fatiiates" className="social-icon"> <i className="fab fa-instagram"></i></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/fatiiates/" className="social-icon"> <i className="fab fa-linkedin"></i></a></li>
          <li><a target="_blank" href="https://twitter.com/fatiiates" className="social-icon"> <i className="fab fa-twitter"></i></a></li>
          <li><a target="_blank" href="https://facebook.com/fatiiates" className="social-icon"> <i className="fab fa-facebook"></i></a></li>
      </ul>
    </div>
  </div>
  <div className="headerBottom col-md-12" >
    <div id="div_text" className="col-md-12"  style={{padding:"15px",fontSize:"25px"}}>
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
    <div id="div_nav" className="col-md-12" >
      <center>
        <Nav/>
      </center>
    </div>
    {props.children}
  </div>

  <script type="text/javascript" src="/static/js/typed.min.js"></script>
  <script type="text/javascript" src="/static/js/typed-effect.js"></script>
  <script type="text/javascript" src="/static/js/site.js"></script>

  </header>

);

export default Header;
