import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Footer from "../../components/footer";

let keys=1;

const heights = [
  {height:"200px", clamp:7, margin:"-150px"},
  {height:"300px", clamp:11, margin:"-50px"},
  {height:"400px", clamp:16, margin:"50px"}
].map(add => {
  add.key = `blog-content-${keys++}`;
  return add;
});;


const BlogPost = ({ posts, postsSelect }) => (

    <Layout>
      <Header></Header>
      <style jsx>{`

        .blog-container {
          height:calc(100%);
          min-height:250px;
          position:relative;
          padding:100px 0;
          justify-content:center;
          display:block;
        }
        .blog-content {
          padding:55px 85px;
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

      `}</style>

      <div className="nested-container col-md-12 ">
        <div className="blog-container col-md-8" >
        {postsSelect.map(prop => (
          <div className="blog-content col-md-12" >

            <img className="img col-md-12" src={prop.blog_src} />
            <div className="blog" style={{padding:"1px!important"}}>
              <div className="issue col-md-12 " ><a href="l" className="shake">{prop.blog_issue}</a></div>
            </div>
            <div className="blog col-md-12 " >
              <div className="info col-md-12 " >
                <p className="data" ><i className="fas fa-calendar" ></i>&nbsp;{prop.blog_inDate}&emsp;</p>
                <a className="author" ><i className="fas fa-pencil-alt" ></i>&nbsp;{prop.blog_author}</a>
                <p className="data" >&emsp;<i className="far fa-eye" ></i>&nbsp;{prop.blog_views}</p>
              </div>

            </div>
            <div className="title col-md-12" >
              {prop.blog_title}
            </div>
            <div className="description col-md-12" >
              {prop.blog_description}
            </div>


          </div>
          ))}
          <div className="blog-content col-md-12" >
          <div className="title col-md-12" >
            Konu hakkında bana buradan mail atabilirsiniz...
          </div>
            <div className="col-md-6" >
              <span className="login100-form-title txt1 p-b-11">
                E-mail
              </span>
              <div className="wrap-input100 validate-input m-b-36" datavalidate = "E-posta girilmelidir.">
                <input className="input100" type="text" name="info_mail" />
                <span className="focus-input100"></span>
              </div>
            </div>
            <div className="col-md-6" >
              <span className="login100-form-title txt1 p-b-11">
                Ad Soyad
              </span>
              <div className="wrap-input100 validate-input m-b-36" datavalidate = "E-posta girilmelidir.">
                <input className="input100" type="text" name="info_name" />
                <span className="focus-input100"></span>
              </div>
            </div>
            <div className="col-md-6" >
              <span className="login100-form-title txt1 p-b-11">
                Eklemek istedikleriniz
              </span>
              <div className="wrap-input100 validate-input m-b-36" datavalidate = "E-posta girilmelidir.">
                <textarea maxlength="500" rows="8" className="input100" type="text" name="info_add" style={{height:"auto"}}></textarea>
                <span className="focus-input100"></span>
              </div>
            </div>
            <div className="col-md-6" >
              <div className="container-login100-form-btn m-t-25">
                <button  type="submit"  className="login100-form-btn" name="ogrenci_login">
                  Giriş Yap
                </button>
              </div>
            </div>
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
    </Layout>

);

BlogPost.getInitialProps = async ({ req,query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
    const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";

    const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";
    const id=query.post / 1580246913975308624 ;
    const resRequest=`${host}/api/contactPost`;
    const pageRequestSelect = `${host}/api/db/select?page=0&limit=1&token=${tokenmd5}&que=blogPost&blog_id=${id}`;

    const res= await fetch(resRequest);
    const resSelect = await fetch(pageRequestSelect);
    const json = await res.json();
    const jsonSelect = await resSelect.json();

  return { posts: json.posts ,postsSelect:jsonSelect.posts};

};

export default BlogPost;
