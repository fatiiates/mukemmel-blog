import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import Head from "../../components/header";




const ContactPost = ({posts}) => (
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
      .active:before {
        opacity:1;
      }
      /* SOCIAL */
      .fa-social {
        padding: 20px;
        font-size: 30px;
        width:30px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
        border-radius:50px
      }

      .fa-social:hover {
          opacity: 0.7;
      }

      .fa-facebook {
        background: #3B5998;
        color: white;
      }

      .fa-twitter {
        background: #55ACEE;
        color: white;
      }

      .fa-google {
        background: #dd4b39;
        color: white;
      }

      .fa-linkedin {
        background: #007bb5;
        color: white;
      }

      .fa-youtube {
        background: #bb0000;
        color: white;
      }

      .fa-instagram {
        background: #125688;
        color: white;
      }

  `}</style>
  <div className="builds">
    <p id="deyim" >"Arayan <font id="mevla" className="hvr-trim">mevlasını</font> da bulur <font id="bela" className="hvr-trim" >belasını</font> da"</p>
    <div className="container">
      <div className="builds-content" >
        <div className="builds-content-top">
          <Link href="e-mail" >
            <a className={posts.slug == "e-mail" ? "hvr-trim active":"hvr-trim"} >
              <div className="field" >
                <p><i className="fa fa-envelope"></i>E-posta</p>
              </div>
            </a>
          </Link>
          <Link href="phone" >
          <a className={posts.slug == "phone" ? "hvr-trim active":"hvr-trim"} >
              <div className="field" >
                <p><i className="fa fa-phone"></i>Telefon</p>
              </div>
            </a>
          </Link>
          <Link href="social" >
          <a className={posts.slug == "social" ? "hvr-trim active":"hvr-trim"} >
              <div className="field" style={{borderRight:"none"}} >
                <p><i className="fa fa-thumbs-up"></i>Sosyal Medya</p>
              </div>
            </a>
          </Link>
        </div>
        <div className="builds-content-bottom">
          <p className="builds-description" >{posts.title}</p>
        </div>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="/static/js/sketch.min.js"></script>
  <script type="text/javascript" src="/static/js/builds.js"></script>


  </Layout>

);

ContactPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin

  /*if(process.env.NODE_ENV === "development")*/
    const res= await fetch('http://localhost:3000/api/post/contact/'+query.postId);

  /*else if (process.env.NODE_ENV === "production")
    const res= await fetch("http://mukemmellblog.herokuapp.com/api/posts/contact");*/

  const json = await res.json();
  return { posts: json.post };

};

export default ContactPost;
