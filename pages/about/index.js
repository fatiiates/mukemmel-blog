import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Footer from "../../components/footer";




const About = ({ posts }) => (

    <Layout>
      <Header></Header>
      <style jsx global>{`

        .about {
          width:100%;
          height:calc(100% - 170px);
          min-height:250px;
          position:relative;
        }

        .content {
          background:white;
          box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -o-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -moz-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -webkit-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          margin-top:300px;
          margin-bottom:100px;
          padding: 55px 85px;
          text-align:start;
        }

        .content .img {
          border:10px solid white;
          width:400px;
          height:400px;
          border-radius:220px;
          overflow:hidden;
          margin-top:-290px;
          box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -o-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -moz-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -webkit-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
        }
        .content .img img {
          margin-left: -10px;
          margin-top: -10px;
        }
        .content * {
          font-size:40px;
          color:black;
        }
        .content .title font {
          border-bottom:2px solid black;
        }
        .content .description {
          font-size:30px;
          color:black;
        }
        @media screen and (max-width:620px){
          .container, .about {
            padding-right:0;
            padding-left:0
          }
          .content {
            margin-top:200px;
            padding:20px;

          }
          .content .title {
            padding:20px;
            padding-bottom:0
          }
          .content .title, .content .title font, .content span {
            font-size:30px;

          }
          .content .description{
            font-size:20px;


          }
          .content .img {
            width:300px;
            height:300px;
            margin-top:-155px;
          }
          .content .img img{
            width:300px!important;
            height:405px
          }
        }

      `}</style>
      <div className="about nested-container col-md-9 ">
        <div className="content col-md-8">
          <center>
            <div className="img" >
              <img src="/static/img/photo.jpg" height="539" width="400"  />
            </div>
          </center>
          <p className="title" ><font>Be</font>n Kimim ?</p>
          <br/>
          <p className="description" >
          &emsp;&emsp;Merhaba, Ben Fatih
          <br/>
          2000 yılında Bursa'da doğdum,
          20 senedir Bursa'da yaşıyorum. Bursa Teknik Üniversitesi'nde Bilgisayar Mühendisliği bölümü
          3. sınıf öğrencisiyim. Lise öğrenimimi Tophane Mesleki ve Teknik Anadolu Lisesi'nde gördüm.
          Şu an python ile çeşitli küçük scriptler yazıyorum ve aynı zamanda Nodejs tarafında TypeScript ile farklı
          projeler geliştiriyorum.
          Boş zamanlarımı daha çok makale okuma, bisiklet sürme gibi aktiviteler ile değerlendiriyorum.
          Benimle ilgili daha çok bilgi edinmek
          istersen beni sosyal medya hesaplarımdan takip edebilirsin!
          <br/>
          <span style={{float:"right"}}>Hoşça kal!</span>
          </p>
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
            post.slug == "social" ? <a target="_blank"  key={nestedPost.id} href={nestedPost.content} className={"fab fa-social "+nestedPost.class} ></a> : <p key={nestedPost.id} ><i className={"fa "+nestedPost.class} ></i>{nestedPost.content}</p>
          ))}
          </li>
        ))}
        </ul>
      </div>
      </Footer>
    </Layout>

);

About.getInitialProps = async ({ req }) => {

  const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";
  const resRequest=`${host}/api/contactPost`;
  const res= await fetch(resRequest);
  const json = await res.json();
  return { posts: json.posts };

};

export default About;
