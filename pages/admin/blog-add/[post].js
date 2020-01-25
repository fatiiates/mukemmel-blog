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
import MyFileUpload from "../../../components/classes/tags/myBlogUpdate";


const Home = ({ posts }) => (
  <Layout>
    <Header/>
    <Nav/>
    <div id="page-wrapper">

        <div id="page-inner">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-head-line">Blog EKLEME PANELİ</h1>
                    <h1 className="page-subhead-line">Buradan blog eklemelerini yapabilirsin...</h1>
                </div>
                <div className="col-md-12" >
                  <Notification/>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">Blog Ekleme</div>
                        <div className="panel-body" style={{overflowX:"hidden"}}>
                            {posts.map(post => (

                              <form key={post.blog_id} name="imageInsert"  method="POST" encType="multipart/form-data">
                                <div className="col-md-12">
                                    <div className="form-group col-md-12" >
                                        <label>Blog Başlık*</label>
                                        <input id="blog_title" className="form-control" type="text" name="blog_title" defaultValue={post.blog_title}  required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group col-md-12" >
                                        <label>Blog Açıklama*</label>
                                        <textarea id="blog_description" rows="5" className="form-control" type="text" defaultValue={post.blog_description} name="blog_description" required ></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group col-md-12" >
                                        <label>Blog Yazarı*</label>
                                        <input id="blog_author" className="form-control" type="text" defaultValue={post.blog_author} name="blog_author" required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group col-md-12" >
                                        <label>Blog Konusu*</label>
                                        <input id="blog_issue" className="form-control" type="text" defaultValue={post.blog_issue} name="blog_issue"  required />
                                    </div>
                                </div>
                                <MyFileUpload>
                                  <img id="temp" src={post.blog_src} />
                                </MyFileUpload>
                                <input id="tokenId" value={post.blog_id} type="hidden" />
                                <input id="temp_pic" value={post.blog_src} type="hidden" />
                            </form>

                          ))}
                        </div>
                   </div>
                </div>
            </div>
        </div>
        <Footer/>

    </div>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="/static/js/jquery.steps.min.js"></script>
    <script src="/static/js/bootstrap.js"></script>
    <script src="/static/js/bootstrap-fileupload.js"></script>
    <script src="/static/js/jquery.metisMenu.js"></script>
    <script src="/static/js/custom.js"></script>
  </Layout>

);




Home.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";

  const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";
  const id=query.post / 1580246913975308624 ;
  const pageRequestSelect = `${host}/api/db/select?page=0&limit=1&token=${tokenmd5}&que=blogPost&blog_id=${id}`;

  const resSelect = await fetch(pageRequestSelect);
  const jsonSelect = await resSelect.json();

return { posts: jsonSelect.posts };

};


export default Home;
