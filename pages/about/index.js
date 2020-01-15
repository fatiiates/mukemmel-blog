import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import Header from "../../components/header";




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
          width:55%;
          height: 55%;
          background:white;
          box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -o-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -moz-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          -webkit-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.3);
          margin-top:300px;
          margin-bottom:150px;
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
      <div className="about nested-container">
        <div className="content">
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
          C# üzerinde çeşitli ajans, ofis yazılımları üzerinde çalışıyorum. Benimli ilgili daha çok bilgi edinmek
          istersen beni sosyal medya hesaplarımdan takip edebilirsin!
          <br/>
          <span style={{float:"right"}}>Hoşça kal!</span>
          </p>
          <br/><br/><br/>
          <p className="description" >*Developer Students Clubs(Geliştiri Öğrenci Kulüpleri)</p>
        </div>
      </div>


    </Layout>

);

export default About;
