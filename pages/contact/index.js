import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import Head from "../../components/header";




const Contact = ({posts}) => (
  <Layout>
  <Head>
  </Head>
  <style jsx global>{`

      body {
        overflow-y:hidden !important;
      }
      canvas {
        background:
          linear-gradient(
            hsl(200, 50%, 80%) 0%,
            hsl(200, 30%, 95%) 75%
            );
        display: block;

      }
      .builds {
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
      }
      .builds #deyim,font {
        text-align:center;
        font-family:"Vladimir Script";
        margin-top:100px;
        font-size:70px;
        background:white;
        color:black;
      }
      .builds #deyim font {
        margin:0px;
      }
      .builds #deyim font.hvr-trim {
        vertical-align:baseline;

      }
      .builds #deyim #mevla.hvr-trim:before {
        opacity:1;
        border-bottom:4px solid green;
      }
      .builds #deyim #bela.hvr-trim:before {
        opacity:1;
        border-bottom:4px solid #a23535;
      }

      .builds .builds-content {
        width:50%;
        height: 50%;
        background:white;
        position:absolute;
        margin-top:-100px;
        box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
      }
      .builds .builds-content .builds-content-top {
        width:100%;
        height:auto;
      }
      .builds .builds-content .builds-content-top a {
        width:33.3333333333333333333333333333333%;
        display:inline-table;
        background:#f2f2f2;
        height:100%;
      }
      .builds .builds-content .builds-content-top .field {
        display:block;
      }
      .builds .builds-content .builds-content-top a {
        border-bottom:1px solid rgba(0,0,0,.1);
        border-right:1px solid rgba(0,0,0,.1);

      }
      .builds .builds-content .builds-content-top a .field p {
        margin:0;
        padding:40px;
        font-family:Raleway-Regular;
        font-size:20px;
        color:black;
        background:#f2f2f2;
        display:block;
      }
      .builds .builds-content .builds-content-top a .field p  i{
        font-size:22px;
        margin-right:5px;
      }
      .builds .builds-content .builds-content-bottom {
        width:100%;
        height:calc(100% - 105px);
        display:flex;
        align-items:center;
        vertical-align:middle;
        text-align:center;
        justify-content:center;
      }
      .builds .builds-content .builds-content-bottom .builds-description {
        font-family:Raleway-Regular;
        font-size:28px;
        color:black;
        text-align:center;
        width:100%;
      }
      /* SPECIAL CSS */
      #mail:before {
        opacity:1;
      }
  `}</style>
  <div className="builds">
    <p id="deyim" >"Arayan <font id="mevla" className="hvr-trim">mevlasını</font> da bulur <font id="bela" className="hvr-trim" >belasını</font> da"</p>
    <div className="container">
      <div className="builds-content" >
        <div className="builds-content-top">
          <Link href="contact/e-mail" >
            <a id="mail" className="hvr-trim"  >
              <div className="field" >
                <p><i className="fa fa-envelope"></i>E-posta</p>
              </div>
            </a>
          </Link>
          <Link href="contact/phone" >
            <a className="hvr-trim" >
              <div className="field" >
                <p><i className="fa fa-phone"></i>Telefon</p>
              </div>
            </a>
          </Link>
          <Link href="contact/social" >
            <a className="hvr-trim" >
              <div className="field" style={{borderRight:"none"}} >
                <p><i className="fa fa-thumbs-up"></i>Sosyal Medya</p>
              </div>
            </a>
          </Link>
        </div>
          <div className="builds-content-bottom">
            <p className="builds-description" >{posts.find(post => post.slug === "e-mail").title}</p>
          </div>

      </div>
    </div>
  </div>
  <script type="text/javascript" src="/static/js/sketch.min.js"></script>
  <script type="text/javascript" src="/static/js/builds.js"></script>


  </Layout>

);

Contact.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  /*if(process.env.NODE_ENV === "development")*/
    const res= await fetch("http://localhost:3000/api/contactPost");
  /*else if (process.env.NODE_ENV === "production")
    const res= await fetch("http://mukemmellblog.herokuapp.com/api/posts/contact");*/

  const json = await res.json();
  console.log(process.env.NODE_ENV);
  return { posts: json.posts };

};

export default Contact;
