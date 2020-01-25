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

let key=1;

async function blogPassive(el){
 const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
 const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";

 const pageRequestSelect = `${host}/api/db/update?page=0&limit=1&blog_id=${el}&token=${tokenmd5}&que=blogActiveToPassive`;
 const resSelect = await fetch(pageRequestSelect);

 const jsonSelect = await resSelect.json();
 if(jsonSelect.posts.warningCount === 0 && (jsonSelect.posts.affectedRows > 0 || jsonSelect.posts.changedRows > 0)){
   window.location="#success";
   //window.location.reload()
   $("tr[data="+el+"]").remove();
 }

 else {
   window.location="#error";
   window.location.reload()
 }
}

const Home = ({ postsSelect }) => (
  <Layout>
    <Header/>
    <Nav/>
    <div id="page-wrapper">
        <div id="page-inner">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-head-line">Aktif Bloglar Paneli</h1>
                    <h1 className="page-subhead-line">Bu panelde aktif bloglarını görebilir, pasifleştirebilir ve düzenleyebilirsin...
                    </h1>
                </div>
            </div>
            <Notification/>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    Aktif Bloglar
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
                            <tbody id="active-blog" >
                            {postsSelect.map(post => (
                                    <tr key={post.blog_id} data={post.blog_id}>
                                        <td>{key++}</td>
                                        <td>{post.blog_title}</td>
                                        <td>{post.blog_description}</td>
                                        <td>{post.blog_author}</td>
                                        <td>{post.blog_inDate}</td>
                                        <td>{post.blog_issue}</td>
                                        <td>{post.blog_views}</td>
                                        <td ><a href={`/admin/blog-add/${post.blog_id*1580246913975308624}`}><input type="button" className="btn btn-primary" value="Düzenle"/></a></td>
                                        <td>
                                            <MyLink onClick={() => blogPassive(post.blog_id)} className="btn btn-danger" >
                                              Pasifleştir
                                            </MyLink>
                                        </td>
                                    </tr>
                            ))}</tbody>
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


Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin

  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";

  const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";
  const pageRequestSelect = `${host}/api/db/select?page=0&limit=99999&token=${tokenmd5}&que=blogsActive`;

  const resSelect = await fetch(pageRequestSelect);
  const jsonSelect = await resSelect.json();

  return {postsSelect:jsonSelect.posts};

};


export default Home;
