import Layout from '../components/layout'

const Error = () =>{
  return (
    <Layout>
      <style jsx global>{`
        #__next {
          width:100%;
          height:100%;
        }
        .container {
          background-size:cover;
          background-repeat:no-repeat;
          background-image:url('/static/img/stop.jpg');
          padding:0;
          display:flex;
          justify-content:center;
          align-items:center
        }
        p {
          font-size:45px
        }
        a {
          margin-top:30px
        }
        @media screen and (max-width:500px){
          .wrap-login100 {
            padding:10px
          }
        }

      `}</style>
      <div className="container col-md-12" >
        <div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55" style={{background:"rgba(255,255,255,.9)"}}>
          <p >Ooooops! <br/> Bir şeyler ters gitti <br/> Dolayısıyla;</p>
          <img src="/static/img/yer.png" alt="" height="300px" width="300px"/>
          <div class="col-md-12">
            <a class="back btn btn-danger" href="javascript:history.back();">GERİ DÖN</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
