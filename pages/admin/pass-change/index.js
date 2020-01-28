import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../../components/admin/layout";
import Header from "../../../components/admin/header";
import Footer from "../../../components/admin/footer";
import Nav from "../../../components/admin/nav";


const Home = ({ posts }) => (
  <Layout>
    <Header/>
    <Nav/>
    <div id="page-wrapper">
        <div id="page-inner">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-head-line">HOŞGELDİN ADMİN <i className="em em-heart_eyes" ariarole="presentation" arialabel="SMILING FACE WITH HEART-SHAPED EYES"></i></h1>
                    <h1 className="page-subhead-line">Gezinme çubukları ile sana tanınmış tüm özellikleri yerine getirebilirsin.
                    Kendi evin gibi&nbsp;&nbsp;
                    <i class="em em-laughing" aria-role="presentation" aria-label="SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"></i></h1>
                </div>
            </div>
        </div>
        <Footer/>

    </div>
    <script src="/static/js/jquery-1.10.2.js"></script>
    <script src="/static/js/jquery.steps.min.js"></script>

    <script src="/static/js/bootstrap.js"></script>
    <script src="/static/js/jquery.metisMenu.js"></script>
    <script src="/static/js/custom.js"></script>
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
