import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import Head from "../components/header";
import MYApp from "../components/globe";

const Home = ({ posts }) => (
  <Layout>
  <Head/>
  <MYApp/>
  <script src="static/js/three.r92.min.js"></script>
  <script src="static/js/vanta.birds.min.js"></script>
  <div className="forward">
    <p>
      <font style={{ color: "#f54a08" }} >Merhaba;</font> Ben Fatih
      <br/>
      <Link href="/blog" >
          <a>Bloga ilerle</a>
      </Link>
    </p>

  </div>
  <div className="fixed"  >
    <div className="phone" >
      <Link href="//phone:+905444735349" >
        <a>+90 544 473 5349</a>
      </Link>
    </div>
    <div className="email" >
      <Link href="//mailto:fatiiates@gmail.com" >
        <a>fatiiates@gmail.com</a>
      </Link>
    </div>
    <div className="social" >
      <ul className="social-icons">
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fa fa-google-plus"></i></a></li>
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
      </ul>
    </div>
  </div>
  </Layout>

);


export default Home;
