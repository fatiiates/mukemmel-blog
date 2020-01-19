import React from "react";
import fetch from "isomorphic-unfetch";


const more = [
  {href:"/", label: 'Anasayfa' },
  {href:"/contact", label: 'İletişim' },
  {href:"/blog", label: 'Blog' },
  {href:"/about", label: 'Ben Kimim ?' },
  {href:"/reference", label: 'Referans Projeler' },
  {href:"/sitemap", label: 'Site Haritası' }

].map(add => {
  add.key = `more-link-${add.label}`
  return add
});


const Footer =  props => (
  <footer className="col-md-12">
    <div className="container col-md-12">
    <style jsx >{`
      .container {
        display:block;
      }
      .end {
        padding:0 10%;
      }
      .end p {
        width:100%;
      }
      .end li {
        justify-content:start;
      }
      .end a {
        width:fit-content;
        text-indent:0;
        padding:0 20px;
      }
      

    `}</style>
      <div className="more col-md-6" >
        <center>
          <p><font>Da</font>ha fazla</p>
        </center>
          <ul>{more.map(({ key, href, label }) => (
            <li key={key} >
              <a href={href} ><font>{label.substring(0,2)}</font>{label.substring(2)}</a>
            </li>
          ))}</ul>
      </div>
      {props.children}

      <div className="end col-md-12" >
        <br/>
        <hr/>
        <center>
          <p><font>Son</font> Eklenen Yazılar</p>
        </center>
          <ul>{more.map(({ key, href, label }) => (
            <li key={key} >
              &emsp;<a href={href} ><font>{label.substring(0,2)}</font>{label.substring(2)}</a>
            </li>
          ))}</ul>
          <p className="col-md-12" style={{textAlign:"center",fontSize:"18px"}} >© Tüm hakları saklıdır. - 2020 </p>

      </div>
    </div>
  </footer>
);

export default Footer;
