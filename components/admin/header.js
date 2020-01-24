import React from "react";

const Header = props => (
  <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{marginBottom:"0px"}}>
      <div className="navbar-header">
          <button type="button" className="navbar-toggle" datatoggle="collapse" datatarget=".sidebar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">Mükemmel Blog</a>
      </div>

      <div className="header-right">

        <a href="#" className="btn btn-info" title="New Message"><b>30 </b><i className="fa fa-envelope fa-x"></i></a>
          <a href="#" className="btn btn-primary" title="New Task"><b>40 </b><i className="fa fa-bars fa-x"></i></a>
          <a href="logout.js" className="btn btn-danger" title="Logout"><i className="fa fa-exclamation-circle fa-x"> </i>  Güvenli Çıkış</a>
      </div>
  </nav>

);

export default Header;
