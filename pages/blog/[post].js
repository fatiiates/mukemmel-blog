import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Footer from "../../components/footer";
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'

let keys=1;

const heights = [
  {height:"200px", clamp:7, margin:"-150px"},
  {height:"300px", clamp:11, margin:"-50px"},
  {height:"400px", clamp:16, margin:"50px"}
].map(add => {
  add.key = `blog-content-${keys++}`;
  return add;
});

function createViewCookie(id){
  console.log(id);
  if(cookie.get(id) == undefined)
    cookie.set(id,"1");
}


const BlogPost = ({ posts, postsSelect, error }) => (

    <Layout>
      <Header></Header>
      <style jsx global>{`

        .blog-container {
          height:calc(100%);
          min-height:250px;
          position:relative;
          padding:100px 0;
          justify-content:center;
          display:block;
          transition:.5s
        }
        .blog-content {
          padding:85px;
          background:White;
          border-radius:20px;
          display:block;
          margin-top:20px;
        }
        .blog-content .img {
          background-size:cover;
        }
        .blog {
          box-shadow:none;
          display:flex;
          padding:20px!important;
        }
        .info {
          float:left;
          border:none;
          font-size:18px;
          justify-content:start;
        }
        .title {
          font-size:45px;
          text-align: initial;
          font-weight:bold;
        }
        .description {
          font-size:25px;
          text-align:start;
          text-indent:20px;
        }
        .codepen {
          height: 265px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          margin: 1em 0;
          padding: 1em;
        }
        .login100-form-title {
          font-size:13px;
          font-family:Raleway-Regular;
          font-weight:bold;
        }
        .blog .issue {
          margin-top:-22px
        }
        .error {
          color:White;
          font-size:35px;
          font-weight:Bold;
        }
        @media screen and (max-width:1200px){
          .blog-container {
            width:90%
          }
          .blog-content .img {
            width:100%;
          }
          .title {
            font-size:30px;
            padding-bottom:25px;
            word-break:break-word
          }
          .description {
            font-size:20px;
            word-break:break-word
          }
        }
        @media screen and (max-width:700px){
          .nested-container {
            padding-left:0 !important;
            padding-right:0 !important;
          }
          .blog-container {
            width:100%!important;
          }
          .blog-content{
            padding:20px;
            padding-bottom:35px
          }
          .blog-content .img {
            padding:15px;
            padding-bottom:0
          }
          .blog-info {
            width:100%;
            padding-bottom:0!important;
          }
          .info {
            display:block!important;
          }
          .data,.author{
            width:100%;
            border-right:none!important;
            padding:0!important;
          }
          .data:first-child {
            padding-left:15px!important
          }
        }

      `}</style>

      <div className="nested-container col-md-12 ">
        <div className="blog-container col-md-8" >

        {error != "none" && <p className="error">{error}</p>}
        {error == "none" && postsSelect.map(prop => (
          <div key={keys++} className="blog-content col-md-12" >
          {error == "none" && createViewCookie(prop.blog_id*1580246913975308624)}
            <img className="img col-md-12" src={prop.blog_src} />
            <div key={keys++} className="blog" style={{padding:"1px!important"}}>
              <div className="issue col-md-12 " ><a href="l" className="shake">{prop.blog_issue}</a></div>
            </div>
            <div key={keys++} className="blog blog-info col-md-12 " >
              <div className="info col-md-12 " >
                <p className="data" ><i className="fas fa-calendar" ></i>&nbsp;{prop.blog_inDate}&emsp;</p>
                <a className="author" ><i className="fas fa-pencil-alt" ></i>&nbsp;{prop.blog_author}</a>
                <p className="data" >&emsp;<i className="far fa-eye" ></i>&nbsp;{prop.blog_views}</p>
              </div>

            </div>
            <div key={keys++} className="title col-md-12" >
              {prop.blog_title}
            </div>
            <div key={keys++} className="description col-md-12"
            dangerouslySetInnerHTML={{
                __html: prop.blog_description
              }}
            >
            </div>


          </div>
          ))}
        </div>
      </div>

      <Footer>
      <div key={keys++} className="contact col-md-6" >
        <center>
          <p><font>Ba</font>na ulaşın</p>
        </center>
        <ul>
        {posts.map(post =>  (
          <li key={post.slug}>
          {(post.title).map(nestedPost => (
            post.slug == "social" ? <a target="_blank" key={nestedPost.id} href={nestedPost.content} className={"fab fa-social "+nestedPost.class} ></a> : <p key={nestedPost.id} ><i className={"fa "+nestedPost.class} ></i>{nestedPost.content}</p>
          ))}
          </li>
        ))}
        </ul>
      </div>
      </Footer>
    </Layout>

);

BlogPost.getInitialProps = async ctx => {
    const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
    const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";
    const reqId=ctx.query.post || -1;
    const id=reqId / 1580246913975308624 ;

    const cta = nextCookie(ctx);
    if(cta[reqId] != "1" && reqId >= 1580246913975308624){
      const viewRequest= `${host}/api/db/update?page=0&limit=1&tokenLocal=${tokenmd5}&que=viewPlus&blog_id=${id}`;
      const viewRes=await fetch(viewRequest);
    }

    const resRequest=`${host}/api/contactPost`;
    const pageRequestSelect = `${host}/api/db/select?page=0&limit=1&token=${tokenmd5}&que=blogPost&blog_id=${id}`;

    const res= await fetch(resRequest);
    const resSelect = await fetch(pageRequestSelect);

    const json = await res.json();
    const jsonSelect = await resSelect.json();

    if(reqId < 1580246913975308624 || jsonSelect.posts[0] == undefined)
      return { posts: json.posts, postsSelect:jsonSelect.posts, error: 'Bu sayfa bulunamadı!'};

  return { posts: json.posts, postsSelect:jsonSelect.posts, error:"none"};
};

export default BlogPost;
