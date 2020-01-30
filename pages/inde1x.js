import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import Head from "../components/head";
import MYApp from "../components/globe";




const Home = ({ posts }) => (
  <Layout>
  <Head/>
  <MYApp/>
  <style jsx global>{`
    .container {
      padding:0!important;
    }
    @media screen and (max-width:1000px){
      #__next,.container {
        width:100%;
        height:100%;
      }
      .forward{
        width:100%;
        height:100%;
        justify-content:center;
        align-items:center;
        display:flex;
      }
      p {
        padding:30px;
        width:100%;
        background:rgba(0,0,0,.5);
      }
      p,font{
        font-size:30px!important;
        margin:auto!important
      }
      .fixed {
        display:block;
        width:100%;
        text-align:center;
        justify-content:center
      }
      .phone,.email,.social{
        width:100%;
      }
      .email a {
        border-bottom:1px solid gray;
        border-top:1px solid gray;
        padding:5px;
      }
    }

    `}</style>
  <script src="static/js/three.r92.min.js"></script>
  <div className="forward">
    <p id="promotion" >
      <font style={{ color: "#FF3D17" }} >Merhaba;</font> Ben Fatih
      <br/>
      <Link href="/blog" >
          <a className="hvr-bounce-to-right" >Bloğa ilerle {process.env.customKey}</a>
      </Link>
    </p>

  </div>
  <div className="fixed"  >
    <div className="phone" >
      <Link href="//phone:+905444735349">
        <a>+90 544 473 5349</a>
      </Link>
    </div>
    <div className="email" >
      <Link href="//mailto:fatiiates@gmail.com" >
        <a>fatiiates@gmail.com </a>
      </Link>
    </div>
    <div className="social" >
      <ul className="social-icons">
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fab fa-google"></i></a></li>
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fab fa-youtube"></i></a></li>
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fab fa-twitter"></i></a></li>
          <li><a target="_blank" href="//google.com" className="social-icon"> <i className="fab fa-facebook"></i></a></li>
      </ul>
    </div>
  </div>
  </Layout>

);



/*Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res;
  if(process.env.NODE_ENV === "development")
    res= await fetch("http://localhost:3000/api/posts");
  else if (process.env.NODE_ENV === "production")
    res= await fetch("http://mukemmellblog.herokuapp.com/api/posts");

  const json = await res.json();
  console.log(process.env.NODE_ENV);
  return { posts: json.posts };

};*/


export default Home;
