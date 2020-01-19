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


const BlogPost = ({ posts }) => (

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
          <div className="blog-content col-md-12" >
            <img className="img col-md-12" src="/static/img/arc.jpg"/>
            <div className="blog" style={{padding:"1px!important"}}>
              <div className="issue col-md-12 " ><a href="l" className="shake">sadsadsa</a></div>
            </div>
            <div className="blog col-md-12 " >
              <div className="info col-md-12 " >
                <p className="data" ><i className="fas fa-calendar" ></i>&nbsp;12.12.2020&emsp;</p>
                <a className="author" ><i className="fas fa-pencil-alt" ></i>&nbsp;Author Yazar</a>
                <p className="data" ><i className="far fa-comment" ></i>&nbsp;10&emsp;<i className="far fa-eye" ></i>&nbsp;24</p>
              </div>

            </div>
            <div className="title col-md-12" >
              Başlık Başlık Başlık Başlık Başlık Başlık Başlık Başlık Başlık Başlık Başlık Başlık Başlık Başlık
            </div>
            <div className="description col-md-12" >
              Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme
              alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.
            </div>


          </div>
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
  /*if(process.env.NODE_ENV === "development")*/
  console.log(query.post);
    const res= await fetch("http://localhost:3000/api/contactPost");
  /*else if (process.env.NODE_ENV === "production")
    const res= await fetch("http://mukemmellblog.herokuapp.com/api/posts/contact");*/
  const json = await res.json();
  return { posts: json.posts };

};

export default BlogPost;
