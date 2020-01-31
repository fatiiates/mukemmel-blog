import React from "react";
import fetch from "isomorphic-unfetch";


const more = [
  {href:"/", label: 'Anasayfa' },
  {href:"/contact", label: 'İletişim' },
  {href:"/blog", label: 'Blog' },
  {href:"/about", label: 'Ben Kimim ?' },

].map(add => {
  add.key = `more-link-${add.label}`
  return add
});


const Footer =  props => (
  <footer className="col-md-12">
    <div className="container col-md-12">
    <style jsx global>{`
      footer .container {
        transition:.5s;
        display:block;
      }
      #copyR {
        margin-top:35px;
        bottom:0;
      }
      @media screen and (max-width:1000px){
        footer {
          z-index:0!important;
        }
        footer .more {
          border-right:none;
          border-bottom: 1px solid rgba(255,255,255,.7);
          padding-bottom:10px;
        }
        footer .contact {
          padding-top:10px
        }
      }
      @media screen and (max-width:1000px){
        footer {
          width:100%;
          padding-left:0!important;
          padding-right:0!important;
        }
        footer .container {
          padding: 10px!important;
        }
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
      <div id="copyR" className="col-md-12" >Fatih ATEŞ  2019 - © Tüm Hakları Saklıdır  </div>
     </div>

  </footer>
);

export default Footer;
