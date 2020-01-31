import Head from "./head";



const Layout = props => (
/*linear-gradient(135deg, rgba(164,67,230,1) 20%, rgba(252,69,94,1) 50%, rgba(215,184,19,1) 80%)*/
  <div className="container col-md-12">
    <style jsx global>{`
      .container {
        display:block;
        background:linear-gradient(135deg, rgba(44,168,212,1) 20%, rgba(252,69,94,1) 50%, rgba(215,184,19,1) 80%);
      }
      @media screen and (max-width:1000px){
        body,.container {
          width:100%;
          padding-left:0;
          padding-right:0;
        }
        header {
          padding:0!important;
          width:100%!important;
        }
        .container {
          width:100%;
        }
        .headerBottom {
          width:100%;
        }
        .headerTop {
          width:100%;
          margin:0!important;
          display:block;
        }
        .headerTop .social {
          right:0;
          position:absolute;

        }
        .headerTop .welcome {
          position:absolute;
        }
        #div_nav {
          justify-content:center;
          align-items:center;
          width:100%
        }

        #div_nav center nav ul{
          display:none;
          z-index:5;
        }

        // RESPONSİVE MENU

        #openMenu {
          display:block!important;
          text-align:center;
          position:relative!important;
        }
        #div_nav center nav ul {
          position:fixed;
          width:100%;
          height:100%;
          background:rgba(255,255,255,.9);
          padding:0px;
          margin:0px;
          left:0;
          top:0;
        }
        #div_nav center nav ul li a {
          width:100%
        }
        #div_nav center nav ul li a span {
          border:none
        }
        #div_nav center nav ul li{
          width:100%;

        }

      }
      @media screen and (max-width:600px){
        header .welcome {
          display:none!important;
        }
        header .social {
          width:100%;
        }
        header .social ul {
          text-align:center;
          justify-content:center;
          display:flex
        }
        #div_text {
          width:100%!important;
        }
      }
    `}</style>
    <Head></Head>
    {props.children}
  </div>
);

export default Layout;
