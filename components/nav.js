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

const Nav = () => (
  <nav>
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

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {

        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        color:black;
        list-style: none;
        float: left;
        display:flex;

      }
      li a span {
        font-size:20px;
        padding-right:20px;
        border-right:1px solid black;
      }
      li:last-child a span {
        border:none;
      }
      a {
        padding:15px 20px;
        padding-right:0;
        font-size:25px;
        display:block;
        color:black;
        text-decoration: none;
      }
    `}</style>
  </nav>
)

export default Nav;
