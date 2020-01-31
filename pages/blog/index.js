import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/layout";
import Header from "../../components/header";
import Footer from "../../components/footer";

let keys=1,pagi;
var loop=0;

const heights = [
  {clamp:180, margin:"0px"},
  {clamp:310, margin:"0px"},
  {clamp:440, margin:"0px"},
  {clamp:440, margin:"-150px"},
  {clamp:310, margin:"-50px"},
  {clamp:180, margin:"50px"},
  {clamp:180, margin:"50px"},
  {clamp:310, margin:"50px"},
  {clamp:440, margin:"50px"},
]
const divKey = [1,2,3,4,5,6];


const Blog = ({ posts, postsSelect, pagi, error }) => {

  return (
    <Layout>
      <Header></Header>
      <style jsx>{`
        .blog-content{
          transition:.5s;
        }
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
          margin:0;
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
          color:#f76a88;
        }
        .error {
          color:White;
          font-size:35px;
          font-weight:Bold;
        }
        @media screen and (max-width:1300px){
          .blog-content {
            width:50%!important;
            margin:0!important;
          }
          .blog-440-3, .blog-180-5, .blog-180-6 {margin-top:90px!important}
          .blog-310-7 {margin-top: -640px!important;}
          .blog-440-8 {margin-top:90px!important}
        }
        @media screen and (max-width:1000px){
          .blog .issue a {
            z-index:0
          }
          .blog-content {
            display:inline-block;
          }
          .blog .title {
            width:100%;
          }
          .blog-440-3 {margin-top:50px!important}
          .blog-440-2 {margin-top:0!important}
        }
        @media screen and (max-width:700px){
          .blog-content {
            width:100%!important;
            margin:0!important;
          }
          .blog-content {
            margin-bottom:50px!important
          }
        }



      `}</style>
      <div key={`div_${divKey[keys]}`} className="nested-container col-md-12 ">
        <div className="blog-container col-md-10" >
        {error != "none" && <p className="error">{error}</p>}
        { error == "none" && postsSelect.map(prop => (

            <div key={prop.key} className={`blog-content col-md-4 ${prop.class}`}  style={{marginTop:prop.margin}} >
              <div className="blog col-md-11" >
                <div key={++keys} className="img col-md-12 " style={{backgroundImage:`url(${prop.blog_src})`}} ></div>
                <div key={++keys} className="issue col-md-12 " ><a href="l" className="shake">{prop.blog_issue}</a></div>
                <div key={++keys} className="date col-md-12 " ><i className="fas fa-calendar" ></i>{prop.blog_inDate}</div>
                <a key={++keys} href={"/blog/"+prop.blog_id*1580246913975308624} className="title col-md-12 hvr-underline-from-right " >{prop.blog_title}</a>
                <article key={++keys} className="col-md-12 " >
                  <div className="description col-md-10 ">
                    <p
                    dangerouslySetInnerHTML={{
                        __html: prop.blog_description
                      }}
                    ></p>
                  </div>
                </article>
                <div key={++keys} className="info" >
                  <a href="/about" className="author" ><i className="fas fa-pencil-alt" ></i>&nbsp;{prop.blog_author}</a>
                  <p className="data" ><i className="far fa-eye" ></i>&nbsp;{prop.blog_views}</p>
                </div>
              </div>
            </div>

        ))
      }
        </div>
      </div>
      { error == "none" && pagi.map(post =>(
        <div key={++keys} className="pagination" >
              <Link href="/blog?page=1" >
                <a className="pagi-first" > 1 </a>
              </Link>
            {post.pre != 0 &&  <Link href={`/blog?page=${post.pre}`} >
                <a className="pagi-pre" >&lt; Geri</a>
              </Link>
            }
            {post.next != 0 &&  <Link href={`/blog?page=${post.next}`} >
                <a className="pagi-next" >İleri &gt;</a>
              </Link>
            }
        </div>
      ))

      }
      <Footer>
      <div key={`div_${divKey[++keys]}`} className="contact col-md-6" >
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
  )
}

Blog.getInitialProps = async ({ req,query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const page =query.page || 1;
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
  const maxPagi=Math.ceil(pagiJson.posts[0]["COUNT(*)"]/9);

  pagiJson.posts.map(post =>{
    post.pre=(page-1) > 0 ? parseInt(page)-1 : 0
    post.next=page == maxPagi ? 0: (parseInt(page)+1)
    return post
  });

  if(page < 1 || page > maxPagi)
    return { posts: json.posts ,postsSelect:jsonSelect.posts, pagi:pagiJson.posts , error:'Bu sayfa Bulunamadı!' }



  loop=0;
  jsonSelect.posts.map(add => {
    add.key = `blog-content-${loop}`;
    add.class = `blog-${heights[loop].clamp}-${loop}`;
    add.height = heights[loop].height;
    add.margin = heights[loop].margin;
    add.blog_description= add.blog_description.substring(0, heights[loop].clamp)+`... <br/><a href=${"/blog/"+add.blog_id*1580246913975308624}  class="go" ><span>Devamını gör  </span><i class="fas fa-angle-double-right"></i></a>`;
    loop++;
    return add;
  })

  return { posts: json.posts ,postsSelect:jsonSelect.posts, pagi:pagiJson.posts, error:'none'};

};

export default Blog;
