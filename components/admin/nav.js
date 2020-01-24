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
  <nav className="navbar-default navbar-side" role="navigation">
  <style jsx >{`
    .user-img-div {
      justify-content: center;
      align-items: center;
      display: flex;
    }
    .inner-text {
      text-align:center;
    }
  `}</style>

      <div className="sidebar-collapse">
          <ul className="nav" id="main-menu">
              <li>
                  <div className="user-img-div">

                      <div className="inner-text">
                          Hoşgeldin Admin
                      </div>
                  </div>

              </li>


              <li>
                  <a  href="/admin"><i className="fas fa-tachometer-alt "></i>Dashboard</a>
              </li>
              <li>
                  <a href="#"><i className="fas fa-blog "></i>Blog <span className="fa arrow"></span></a>
                   <ul className="nav nav-second-level collapse">
                      <li>
                          <a href="/admin/blog-active"><i className="fas fa-check"></i>Aktif Bloglar</a>
                      </li>
                      <li>
                          <a href="/admin/blog-passive"><i className="fas fa-times"></i>Pasif Bloglar</a>
                      </li>
                      <li>
                          <a href="/admin/blog-add"><i className="fas fa-plus"></i>Blog Ekle</a>
                      </li>
                  </ul>
              </li>
              <li>
                  <a  href="/admin/pass-change"><i className="fas fa-key "></i>Şifremi Değiştir</a>
              </li>
          </ul>
      </div>

  </nav>
)

export default Nav;
