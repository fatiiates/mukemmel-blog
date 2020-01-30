import React from 'react';
import Link from 'next/link';


const links = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Ben Kimim ?' },
  { href: '/contact', label: 'İletişim' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})



const Nav = () => {

  const onClickk = event =>{
    alert(2);
  }

  const openMenuClick = event =>{
    $('#div_nav').children('center').children('nav').children('ul').prepend(`<li style="display:block" ><a onclick="closeMenu(this)" style="padding-left:0;float:right;width:10%">X</a></li>`);
    $('#div_nav').children('center').children('nav').children('ul').css({
      'display':'block'
      
    });
  }

  return(
  <nav>
    <div id="openMenu" onClick={openMenuClick} ><img src="/static/img/menu-icon.png" /></div>
    <ul>
      <li>
          <a href="/" className="bottomLine" >Anasayfa<span></span></a>
        <span></span>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a className="bottomLine" href={href}>{label}<span></span></a>
        </li>
      ))}
    </ul>

    <style jsx global>{`
      nav {
        text-align: center;
      }
      nav ul {
        justify-content: space-between;
        transition:.5s;
      }
      nav > ul {
        padding: 4px 16px;
      }
      nav ul li {
        color:black;
        list-style: none;
        float: left;
        display:flex;

      }
      nav ul li a span {
        font-size:20px;
        padding-right:20px;
        border-right:1px solid black;
      }
      nav ul li:last-child a span {
        border:none;
      }
      nav ul li a {
        padding:15px 20px;
        padding-right:0;
        font-size:25px;
        display:block;
        color:black;
        text-decoration: none;
      }
      #openMenu {
        height:auto;
        display:none;
        position:absolute;
      }
      #openMenu img {
        border:1px solid gray;
        padding:7.5px 10px;
        border-radius:5px
      }
      #openMenu img:hover {
        cursor:pointer
      }

    `}</style>
  </nav>
  )
}
export default Nav;
