import Head from "next/head";

const Layout = props => (
  <div className="wrapper">
  <style jsx global>{`
    @font-face {
      font-family: Raleway-Regular;
      src: url('/static/fonts/raleway/Raleway-Regular.ttf');
    }
    .wrapper {
      background:#202020;
    }
    .wrapper *{
      font-family:Raleway-Regular!important;
    }
    .fa,.fab,.fas,.far {
      font-family:"Font Awesome 5 Free"!important;
    }
  `}</style>
        <Head>
          <link href="/static/css/animate.css" rel="stylesheet" />
          <link href="/static/css/bootstrap.css" rel="stylesheet" />
          <link href="/static/css/basic.css" rel="stylesheet" />
          <link href="/static/css/custom.css" rel="stylesheet" />
          <link href="/static/css/bootstrap-fileupload.min.css" rel="stylesheet" />
          <link href="/static/css/login-uti.css" rel="stylesheet" />

          <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"/>
          <link href="/static/fonts/fontawesome/css/solid.min.css" rel="stylesheet" />
          <link href="/static/fonts/fontawesome/css/brands.min.css" rel="stylesheet" />
          <link href="/static/fonts/fontawesome/css/regular.min.css" rel="stylesheet" />
          <link href="/static/fonts/fontawesome/css/fontawesome.min.css" rel="stylesheet" />

          <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

          <link rel="icon" href="/static/img/ico/favicon.ico" />

        </Head>
    {props.children}
  </div>
);

export default Layout;
