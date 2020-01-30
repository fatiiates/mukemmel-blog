import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Footer from "../../components/footer";

let keys=1,loop=0,pagi;

const heights = [
  {height:"200px", clamp:7, margin:"0px"},
  {height:"300px", clamp:11, margin:"0px"},
  {height:"400px", clamp:16, margin:"0px"},

].map(add => {
  add.key = `blog-content-${keys++}`;
  return add;
});
const divKey = [1,2,3,4,5,6];


const Blog = ({ posts, postsSelect, pagi }) => {
  return (
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
        .pagination {
          display:flex;
          justify-content:center;
          width:100%;
        }
        .pagination a {
          color:white;
          font-size:25px;
          padding:0px 15px;
          border-bottom:1px solid white;
          border-top:1px solid white;
          font-weight:bold;
          transition:.5s;
          margin:0;
        }
        .pagination a:hover{
          cursor:pointer;
          background:white;
          border-radius:20px;
          color:#f76a88;

        }


      `}</style>
      <div key={`div_${divKey[keys]}`} className="nested-container col-md-12 ">
        <div className="blog-container col-md-10" >
        {postsSelect.map(prop => (

            <div key={heights[loop].key} className="blog-content col-md-4 " style={{marginTop:heights[loop].margin}} >
              <div className="blog col-md-11" >
                <div key={prop.blog_src} className="img col-md-12 " style={{backgroundImage:`url(${prop.blog_src})`}} ></div>
                <div key={prop.blog_issue} className="issue col-md-12 " ><a href="l" className="shake">{prop.blog_issue}</a></div>
                <div key={prop.blog_inDate} className="date col-md-12 " ><i className="fas fa-calendar" ></i>{prop.blog_inDate}</div>
                <a href="a" className="title col-md-12 hvr-underline-from-right " >{prop.blog_title}</a>
                <article className=" col-md-12 " >
                  <div className="description col-md-10 " style={{height:heights[loop].height}}>
                    <p style={{WebkitLineClamp:heights[loop++].clamp}} >
                    {prop.blog_description}

                    </p>
                  </div>
                </article>
                <div  className="info" >
                  <a className="author" ><i className="fas fa-pencil-alt" ></i>&nbsp;{prop.blog_author}</a>
                  <p className="data" ><i className="far fa-eye" ></i>&nbsp;{prop.blog_views}</p>
                </div>
              </div>
            </div>
        ))}
        </div>
      </div>
      <div className="pagination" >
            <Link href="?page=1" >
              <a className="pagi-first" > 1 </a>
            </Link>
            <Link href="" >
              <a className="pagi-pre" >&lt; Geri</a>
            </Link>
            <Link href="/blog/1" >
              <a className="pagi-next" >İleri &gt;</a>
            </Link>
      </div>
      <Footer>
      <div key={`div_${divKey[++keys]}`} className="contact col-md-6" >
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
  )
}

Blog.getInitialProps = async ({ req,query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const page =1;
  const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";

  const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";

  const resRequest=`${host}/api/contactPost`;
  const pageRequestSelect = `${host}/api/db/select?page=${page}&limit=9&token=${tokenmd5}&que=blogsActive`;
  const pagiRequest=`${host}/api/db/select?page=${page}&limit=1&token=${tokenmd5}&que=pagination`;

  const res= await fetch(resRequest);
  const resSelect = await fetch(pageRequestSelect);
  const pagi = await fetch(pagiRequest);

  const json = await res.json();
  const jsonSelect = await resSelect.json();
  const pagiJson = await pagi.json();

  return { posts: json.posts ,postsSelect:jsonSelect.posts, pagi:pagiJson.posts};

};

export default Blog;
