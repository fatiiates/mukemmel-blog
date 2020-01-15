import Head from "./head";

const Layout = props => (

  <div className="container">
    <style jsx global>{`
      .container {
        display:block;
        background:linear-gradient(135deg, rgba(164,67,230,1) 20%, rgba(252,69,94,1) 50%, rgba(215,184,19,1) 80%);
      }
    `}</style>
    <Head></Head>
    {props.children}
  </div>
);

export default Layout;
