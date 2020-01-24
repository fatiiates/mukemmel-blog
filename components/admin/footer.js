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
  <div id="footer-sec">
      &copy; 2014 YourCompany | Design By : <a href="http://www.mukemmellblog.com/" target="_blank">mukemmellblog.com</a>

  </div>
  
);

export default Footer;
