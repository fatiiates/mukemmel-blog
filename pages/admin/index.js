import React from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/admin/layout";
import Header from "../../components/admin/header";
import Footer from "../../components/admin/footer";
import Nav from "../../components/admin/nav";

import Router from 'next/router'
import nextCookie from 'next-cookies'
import { withAuthSync } from '../../utils/auth'
import getHost from '../../utils/get-host'

const Home = ({ posts }) => (
  <Layout>
    <Header/>
    <Nav/>
    <div id="page-wrapper">
        <div id="page-inner">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-head-line">HOŞGELDİN ADMİN <i className="em em-heart_eyes" ariarole="presentation" arialabel="SMILING FACE WITH HEART-SHAPED EYES"></i></h1>
                    <h1 className="page-subhead-line">Gezinme çubukları ile sana tanınmış tüm özellikleri yerine getirebilirsin.
                    Kendi evin gibi&nbsp;&nbsp;
                    <i className="em em-laughing" ariarole="presentation" arialabel="SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"></i></h1>
                </div>
            </div>

        </div>
        <Footer/>

    </div>
    <script src="/static/js/jquery-1.10.2.js"></script>
    <script src="/static/js/bootstrap.js"></script>
    <script src="/static/js/jquery.metisMenu.js"></script>
    <script src="/static/js/jquery.steps.min.js"></script>
    <script src="/static/js/custom.js"></script>
    <script src="/static/js/bootstrap-fileupload.js"></script>

  </Layout>

);




Home.getInitialProps = async ctx => {

  const { token } = nextCookie(ctx)
  const apiUrl = getHost(ctx.req) + '/api/isLogin'

  const redirectOnError = () =>
    typeof window !== 'undefined'
      ? Router.push('/admin/sa-login')
      : ctx.res.writeHead(302, { Location: '/admin/sa-login' }).end()

  try {
    const response = await fetch(apiUrl, {
      credentials: 'include',
      headers: {
        Authorization: JSON.stringify({ token }),
      },
    })
    if (response.ok)
      return {auth:"success"};
    else {
      // https://github.com/developit/unfetch#caveats
      return await redirectOnError()
    }
  } catch (error) {
    // Implementation or Network error
    return redirectOnError()
  }

};


export default withAuthSync(Home);
