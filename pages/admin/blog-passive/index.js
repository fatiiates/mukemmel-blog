import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../../components/admin/layout";
import Header from "../../../components/admin/header";
import Footer from "../../../components/admin/footer";
import Nav from "../../../components/admin/nav";
import Notification from "../../../components/classes/tags/notification";
import MyLink from "../../../components/classes/tags/myLink";
import storage from "../../../lib/Firebase/index";

import Router from 'next/router'
import nextCookie from 'next-cookies'
import { withAuthSync } from '../../../utils/auth'
import getHost from '../../../utils/get-host'

let key=1;

const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";

async function blogActive(el){

 const pageRequestSelect = `${host}/api/db/update?page=0&limit=1&blog_id=${el}&token=${tokenmd5}&que=blogPassiveToActive`;
 const resSelect = await fetch(pageRequestSelect);

 const jsonSelect = await resSelect.json();
 if(jsonSelect.posts.warningCount === 0 && (jsonSelect.posts.affectedRows > 0 || jsonSelect.posts.changedRows > 0)){
   window.location="#success";
   $("tr[data="+el+"]").remove();
 }
 else {
   window.location="#error";
   window.location.reload();
 }
}

async function deleteAllPassive(){

 const pageRequestSelect = `${host}/api/db/select?page=0&limit=9999999&token=${tokenmd5}&que=blogsPassive`;
 console.log(pageRequestSelect);
 const resSelect = await fetch(pageRequestSelect);

 const jsonSelect = await resSelect.json();
   $('#loading').addClass("lds-facebook");
   jsonSelect.posts.map( post => {
     blogDelete(post.blog_id);
   });
   $('#loading').removeClass("lds-facebook");
 }

function deleteImage(url){
  var imgName=url.toString().split("images%2F");
  imgName=imgName[1].toString().split("?alt");
  imgName=imgName[0];
  const desertRef = storage.ref().child('images/'+imgName);
  desertRef.delete().then(function() {
    // File deleted successfully
    return true;
  }).catch(function(error) {
    console.log(error);
  });
}

async function blogDelete(el){
      deleteImage($('#src_'+el).val());
      const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
      const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";
      const pageRequestSelect = `${host}/api/db/delete?tokenLocal=${tokenmd5}&que=blogDelete&blog_id=${el}`;
      const resSelect = await fetch(pageRequestSelect);
      const jsonSelect = await resSelect.json();
      if(jsonSelect.posts.warningCount === 0 && (jsonSelect.posts.affectedRows > 0 || jsonSelect.posts.changedRows > 0)){
        window.location="#success";
        $("tr[data="+el+"]").remove();
      }
      else {
        window.location="#error";
        window.location.reload();
      }
}

const Home = ({ postsSelect }) => (
  <Layout>
    <Header/>
    <Nav/>
    <div id="page-wrapper">
          <style>{`
          .lds-facebook {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
          }
          .lds-facebook div {
            display: inline-block;
            position: absolute;
            left: 8px;
            width: 16px;
            background: #fcf;
            animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
          }
          .lds-facebook div:nth-child(1) {
            left: 8px;
            animation-delay: -0.24s;
          }
          .lds-facebook div:nth-child(2) {
            left: 32px;
            animation-delay: -0.12s;
          }
          .lds-facebook div:nth-child(3) {
            left: 56px;
            animation-delay: 0;
          }
          @keyframes lds-facebook {
            0% {
              top: 8px;
              height: 64px;
            }
            50%, 100% {
              top: 24px;
              height: 32px;
            }
          }
        `}</style>
        <div id="page-inner">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-head-line">Pasif Bloglar Paneli</h1>
                    <h1 className="page-subhead-line">Bu panelde pasif bloglarını görebilir, aktifleştirebilir ve silebilirsin...</h1>
                    <MyLink onClick={() => deleteAllPassive()} className="btn btn-danger" style={{marginBottom:"15px"}} >
                      Tümünü Sil
                    </MyLink>
                    <div id="loading" >
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                </div>
            </div>
            <Notification/>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    Pasif Bloglar
                </div>
                <div className="panel-body">
                    <div className="table-responsive" style={{overflowX:"auto",overflowY:"auto"}}>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Başlık</th>
                                    <th>Açıklama</th>
                                    <th>Yazar</th>
                                    <th>Yazılma Tarihi</th>
                                    <th>Konu</th>
                                    <th>Görüntülenme</th>
                                    <th style={{width:"20px"}}></th>
                                    <th style={{width:"20px"}}></th>
                                </tr>
                            </thead>
                            <tbody id="passive-blog" >

                            {postsSelect.map(post => (
                                    <tr key={post.blog_id} data={post.blog_id}>
                                        <td>{key++}</td>
                                        <td>{post.blog_title}</td>
                                        <td>{post.blog_description}</td>
                                        <td>{post.blog_author}</td>
                                        <td>{post.blog_inDate}</td>
                                        <td>{post.blog_issue}</td>
                                        <td>{post.blog_views}</td>
                                        <td >
                                        <input id={`src_${post.blog_id}`} type="hidden" value={post.blog_src} />
                                            <MyLink onClick={() => blogDelete(post.blog_id)} className="btn btn-danger" >
                                              Sil
                                            </MyLink>
                                        </td>
                                        <td>
                                            <MyLink onClick={() => blogActive(post.blog_id)} className="btn btn-success" >
                                              Aktifleştir
                                            </MyLink>
                                        </td>
                                    </tr>
                            ))}
                          </tbody>
                        </table>
                    </div>
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


Home.getInitialProps = async ctx => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const { token } = nextCookie(ctx)
  const apiUrl = getHost(ctx.req) + '/api/isLogin'

  const redirectOnError = () =>
    typeof window !== 'undefined'
      ? Router.push('/admin/sa-login')
      : ctx.res.writeHead(302, { Location: '/admin/sa-login' }).end()

  try {
    const response = await fetch(apiUrl, {
      credentials: 'include',
      headers: {
        Authorization: JSON.stringify({ token }),
      },
    })
    if (response.ok) {
      const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
      const adminToken="af43c0445a680a18d52b648e1cb51c97";
      const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";
      const pageRequestSelect = `${host}/api/db/select?page=0&limit=0&token=${tokenmd5}&adminToken=${adminToken}&&que=blogsPassive`;

      const resSelect = await fetch(pageRequestSelect);
      const jsonSelect = await resSelect.json();

      return {postsSelect:jsonSelect.posts};
    } else {
      // https://github.com/developit/unfetch#caveats
      return await redirectOnError()
    }
  } catch (error) {
    // Implementation or Network error
    return redirectOnError()
  }

};


export default withAuthSync(Home);
