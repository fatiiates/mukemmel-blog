import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Footer from "../../components/footer";

let keys=1,loop=0;

const heights = [
  {height:"200px", clamp:7, margin:"-150px"},
  {height:"300px", clamp:11, margin:"-50px"},
  {height:"400px", clamp:16, margin:"50px"}
].map(add => {
  add.key = `blog-content-${keys++}`;
  return add;
});;


const Blog = ({ posts, postsSelect }) => (

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


      `}</style>
      <div className="nested-container col-md-12 ">
        <div  className="blog-container col-md-10" >
        {

          postsSelect.map(prop => (
            <div key={heights[loop%3].key} className="blog-content col-md-4 " style={{marginTop:loop > 2 ? heights[loop%3].margin:"0"}} >
              <div className="blog col-md-11" >
                <div className="img col-md-12 " style={{backgroundImage:`url(${prop.blog_src})`}} ></div>
                <div className="issue col-md-12 " ><a href="l" className="shake">{prop.blog_issue}</a></div>
                <div className="date col-md-12 " ><i className="fas fa-calendar" ></i>{prop.blog_inDate}</div>
                <a href="a" className="title col-md-12 hvr-underline-from-right " >{prop.blog_title}</a>
                <article className=" col-md-12 " >
                  <div className="description col-md-10 " style={{height:heights[loop%3].height}}>
                    <p style={{WebkitLineClamp:heights[loop++%3].clamp}} >
                    {prop.blog_description}
                    </p>
                  </div>
                </article>
                <div className="info" >
                  <a className="author" ><i className="fas fa-pencil-alt" ></i>&nbsp;{prop.blog_author}</a>
                  <p className="data" ><i className="far fa-eye" ></i>&nbsp;{prop.blog_views}</p>
                </div>
              </div>
            </div>

        ))}

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

Blog.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  /*if(process.env.NODE_ENV === "development")*/
  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";

  const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";
  const resRequest=`${host}/api/contactPost`;
  const pageRequestSelect = `${host}/api/db/select?page=0&limit=9&token=${tokenmd5}&que=blogs`;

  const res= await fetch(resRequest);
  const resSelect = await fetch(pageRequestSelect);
  const json = await res.json();
  const jsonSelect = await resSelect.json();

  return { posts: json.posts ,postsSelect:jsonSelect.posts};

};

export default Blog;
