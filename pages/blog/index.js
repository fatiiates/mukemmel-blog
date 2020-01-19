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


const Blog = ({ posts }) => (

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

          heights.map(prop => (
            <div key={prop.key} className="blog-content col-md-4 " >
              <div className="blog col-md-11" >
                <div className="img col-md-12 " style={{backgroundImage:"url(/static/img/arc.jpg)"}} ></div>
                <div className="issue col-md-12 " ><a href="l" className="shake">sadsadsa</a></div>
                <div className="date col-md-12 " ><i className="fas fa-calendar" ></i>12.12.2020</div>
                <a href="a" className="title col-md-12 hvr-underline-from-right " >Başlık sfdgsfdgfsdgfsdg fsgsfd gfsd</a>
                <article className=" col-md-12 " >
                  <div className="description col-md-10 " style={{height:prop.height}}>
                    <p style={{WebkitLineClamp:prop.clamp}} >
                      Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
                    </p>
                  </div>
                </article>
                <div className="info" >
                  <a className="author" ><i className="fas fa-pencil-alt" ></i>&nbsp;Author Yazar</a>
                  <p className="data" ><i className="far fa-comment" ></i>&nbsp;10&emsp;<i className="far fa-eye" ></i>&nbsp;24</p>
                </div>
              </div>
            </div>

        ))}
        <div  className="blog-content col-md-4 " >
          <div className="blog col-md-11" >
            <div className="img col-md-12 " style={{backgroundImage:"url(/static/img/arc.jpg)"}} ></div>
            <div className="issue col-md-12 " ><a href="l" className="shake">sadsadsa</a></div>
            <div className="date col-md-12 " ><i className="fas fa-calendar" ></i>12.12.2020</div>
            <a href="a" className="title col-md-12 hvr-underline-from-right " >Başlık sfdgsfdgfsdgfsdg fsgsfd gfsd</a>
            <article className=" col-md-12 " >
              <div className="description col-md-10 " style={{height:"200px"}}>
                <p style={{WebkitLineClamp:"7"}} >
                  Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
                </p>
              </div>
            </article>
            <div className="info" >
              <a className="author" ><i className="fas fa-pencil-alt" ></i>&nbsp;Author Yazar</a>
              <p className="data" ><i className="far fa-comment" ></i>&nbsp;10&emsp;<i className="far fa-eye" ></i>&nbsp;24</p>
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

Blog.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  /*if(process.env.NODE_ENV === "development")*/
    const res= await fetch("http://localhost:3000/api/contactPost");
  /*else if (process.env.NODE_ENV === "production")
    const res= await fetch("http://mukemmellblog.herokuapp.com/api/posts/contact");*/
  const json = await res.json();
  return { posts: json.posts };

};

export default Blog;
