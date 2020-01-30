import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import Head from "../../components/head";
import Header from "../../components/header";
import Footer from "../../components/footer";


const Contact = ({posts}) => (

  <Layout>
    <Head/>
    <Header>
      <input id="gradient" className="toggle" type="checkbox" defaultChecked/>
    </Header>
    <style jsx global>{`
        body {
          display: table;
          height:100%;
        }
        #__next .container {
          padding:0 15px ;
        }
        canvas {
          background:
            linear-gradient(
              hsl(200, 50%, 80%) 0%,
              hsl(200, 30%, 95%) 75%
              );
          display: block;
          height:100%;
          width:100%;
          position: fixed;
          top: 0;

        }
        #gradient {
          right:5%;
        }
        .container {
          background:transparent;
          height:auto;
          padding:0;
          z-index:1;
        }
        .builds {
          height: 100%;
          position: relative;
          width: 100%;
          background:linear-gradient(135deg, rgba(164,67,230,1) 20%, rgba(252,69,94,1) 50%, rgba(215,184,19,1) 80%);
          z-index:2;
        }
        .builds .container{
          margin:170px auto;
          height:100%);
          display:flex;
          position:relative;
        }
        .builds .builds-content {
          padding:0;
          min-height:300px;
          background:white;
          position:relative;
          box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -o-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -moz-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -webkit-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
        }
        .builds .builds-content .builds-content-top {
          width:100%;
          height:auto;
        }
        .builds .builds-content .builds-content-top a {
          width:33%;
          display:inline-table;
          background:#f2f2f2;
          height:100%;
        }
        #social {
          width:34%;
        }
        .builds .builds-content .builds-content-top .field {
          display:block;
        }
        .builds .builds-content .builds-content-top a {
          border-bottom:1px solid rgba(0,0,0,.1);
        }
        .builds .builds-content .builds-content-top #phone {
          border-right:1px solid rgba(0,0,0,.1);
          border-left:1px solid rgba(0,0,0,.1);
          z-index:2
        }
        .builds .builds-content .builds-content-top a {
          cursor:pointer;
          height:120px;
          justify-content: center;
          align-items: center;
          display: inline-flex;
        }
        .builds .builds-content .builds-content-top a .field p {
          margin:0;

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
        .builds a {
          color:black;
        }
        .builds .builds-content .builds-content-bottom {
          width:100%;
          height:185px;
          display:flex;
          align-items:center;
          vertical-align:middle;
          text-align:center;
          justify-content:center;
          position:relative;
          transition:0s;
        }
        .builds .builds-content .builds-content-bottom .builds-description {
          font-family:Raleway-Regular;
          font-size:28px;
          color:black;
          text-align:center;
          width:100%;
        }
        /* SPECIAL CSS */
        .active:before {
          opacity:1;
        }
        .passive {
          visibility:hidden;
          display:none!important;
        }
        footer {
          z-index:2;
        }
        @media screen and (max-width:1000px){
          .container {
            width:100%;
            padding:0!important;
          }
          .builds,.builds .container {
            z-index:-1;
            width:100%;
            padding-left:0;
            padding-right:0;
          }
          .builds-content {
            width:100%;
          }

          #gradient {
            z-index:2
          }
        }


    `}</style>
    <div className="builds col-md-12" style={{background:"transparent"}} >

      <div className="container col-md-12" style={{background:"transparent"}} >
        <div className="builds-content col-md-6" >
          <div className="builds-content-top">
              <a id="e-mail" className="hvr-trim active" >
                <div className="field" >
                  <p><i className="fa fa-envelope"></i>E-posta</p>
                </div>
              </a>
              <a id="phone" className="hvr-trim" >
                <div className="field" >
                  <p><i className="fa fa-phone"></i>Telefon</p>
                </div>
              </a>
              <a  id="social" className="hvr-trim" >
                <div className="field" style={{borderRight:"none"}} >
                  <p><i className="fa fa-thumbs-up"></i>Sosyal Medya</p>
                </div>
              </a>
          </div>
          {posts.map(post =>  (

            <div htmlFor={post.slug} key={post.id} className={post.slug == "e-mail" ? "builds-content-bottom" : "builds-content-bottom passive" } style={{zIndex:3-post.id}} >
            {(post.title).map(nestedPost => (
              post.slug == "social" ? <a key={nestedPost.id} href={nestedPost.content} className={"fab fa-social "+nestedPost.class} ></a> : <p key={nestedPost.id} className="builds-description" >{nestedPost.content}</p>

            ))}
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer>
    <div className="contact col-md-6" >
      <center>
        <p><font>Ba</font>na ulaşın</p>
      </center>
      <ul>
      {posts.map(post =>  (
        <li key={post.slug}>
        {(post.title).map(nestedPost => (
          post.slug == "social" ? <a key={nestedPost.id} href={nestedPost.content} className={"fab fa-social "+nestedPost.class} ></a> : <p key={nestedPost.id} ><i className={"fa "+nestedPost.class} ></i>{nestedPost.content}</p>
        ))}
        </li>
      ))}
      </ul>
    </div>
    </Footer>
    <script type="text/javascript" src="/static/js/site.js"></script>
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
  return { posts: json.posts };

};

export default Contact;
