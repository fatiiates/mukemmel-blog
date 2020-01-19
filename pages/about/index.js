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
      <style jsx>{`

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
          19 seneden beri Bursa'da yaşıyorum. Bursa Teknik Üniversitesi'nde Bilgisayar Mühendisliği bölümü
          2. sınıf öğrencisiyim. Lise öğrenimimi Tophane Mesleki ve Teknik Anadolu Lisesi'nde gördüm.
          Bir süredir Google DSC* Core ekibinde görev alıyorum. Boş zamanlarımda daha çok web sitesi geliştirme ve
          C# üzerinde çeşitli ajans, ofis yazılımları üzerinde çalışıyorum. Benimle ilgili daha çok bilgi edinmek
          istersen beni sosyal medya hesaplarımdan takip edebilirsin!
          <br/>
          <span style={{float:"right"}}>Hoşça kal!</span>
          </p>
          <br/><br/><br/>
          <p className="description" >*Developer Students Clubs(Geliştiri Öğrenci Kulüpleri)</p>
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
    </Layout>

);

About.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  /*if(process.env.NODE_ENV === "development")*/
    const res= await fetch("http://localhost:3000/api/contactPost");
  /*else if (process.env.NODE_ENV === "production")
    const res= await fetch("http://mukemmellblog.herokuapp.com/api/posts/contact");*/
  const json = await res.json();
  return { posts: json.posts };

};

export default About;
