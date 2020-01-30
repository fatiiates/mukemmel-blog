import React, { useState } from "react";
import Head from "next/head";
import fetch from 'isomorphic-unfetch'
import Layout from '../../../components/admin/layout'
import Header from '../../../components/admin/header'
import Nav from '../../../components/admin/nav'
import Footer from '../../../components/admin/footer'
import Notification from '../../../components/classes/tags/notification'

import { logout } from '../../../utils/auth'
import { login } from '../../../utils/auth'
const md5 = require('md5');

import Router from 'next/router'
import nextCookie from 'next-cookies'
import { withAuthSync } from '../../../utils/auth'
import getHost from '../../../utils/get-host'

const ChangePass =() => {
  const [userData, setUserData] = useState({ new_pass: '', new_pass_r: '', available_pass: '', error:'' })

  const handleSubmit = async event =>{
    $('#loading').addClass("lds-facebook");
    event.preventDefault()
    setUserData(Object.assign({}, userData, { error: '' }))

    const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
    const adminToken="af43c0445a680a18d52b648e1cb51c97";
    const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";

    const url = `${host}/api/db/update?tokenLocal=${tokenmd5}&adminToken=${adminToken}&que=passChange`;
    console.log(url);
    const new_pass = userData.new_pass
    const available_pass = userData.available_pass
    const new_pass_r = userData.new_pass_r

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ available_pass, new_pass, new_pass_r }),
    })

    const resJson = await response.json()

    if(resJson.posts.warningCount === 0 && (resJson.posts.affectedRows > 0 || resJson.posts.changedRows > 0))
        logout();
    else
      window.location="#error";

    $('#loading').removeClass("lds-facebook");

    setUserData(
      Object.assign({}, userData, {
        error: response ? response.statusText : error.message,
      })
    )


  }


  return (
    <Layout>
      <Header/>
      <Nav/>
      <div id="page-wrapper">
          <style jsx>{`
            .lds-facebook {
              display: inline-block;
              position: relative;
              width: 80px;
              height: 80px;
            }
            .lds-facebook div {
              display: inline-block;
              position: absolute;
              left: 8px;
              width: 16px;
              background: #fcf;
              animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
            }
            .lds-facebook div:nth-child(1) {
              left: 8px;
              animation-delay: -0.24s;
            }
            .lds-facebook div:nth-child(2) {
              left: 32px;
              animation-delay: -0.12s;
            }
            .lds-facebook div:nth-child(3) {
              left: 56px;
              animation-delay: 0;
            }
            @keyframes lds-facebook {
            0% {
              top: 8px;
              height: 64px;
            }
            50%, 100% {
              top: 24px;
              height: 32px;
            }
            }

          `}</style>
          <div id="page-inner">
              <div className="row">
                  <div className="col-md-12">
                      <h1 className="page-head-line">Şifre Değiştirme Paneli</h1>
                      <h1 className="page-subhead-line">Buradan şifreni değiştirebilirsin...</h1>
                  </div>
                  <div className="col-md-12" >
                    <Notification/>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                  <div className="panel panel-primary">
                      <div className="panel-heading">Şifre Değiştirme</div>
                          <div className="panel-body" style={{overflowX:"hidden"}}>
                              <form onSubmit={handleSubmit} name="imageInsert">
                                  <div className="col-md-12">
                                      <div className="form-group col-md-12" >
                                          <label>Mevcut Şifre*</label>
                                          <input id="available_pass" className="form-control" value={userData.available_pass} type="text" name="available_pass"
                                          onChange={ event => setUserData(
                                                       Object.assign({}, userData, { available_pass: event.target.value })
                                                   )}
                                           required />
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="form-group col-md-12" >
                                          <label>Yeni Şifre*</label>
                                          <input id="new_pass" rows="5" className="form-control" value={userData.new_pass} type="text" name="new_pass"
                                          onChange={ event => setUserData(
                                                       Object.assign({}, userData, { new_pass: event.target.value })
                                                   )}
                                           required />
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="form-group col-md-12" >
                                          <label>Yeni Şifre Tekrar*</label>
                                          <input id="new_pass_r" className="form-control" value={userData.new_pass_r} type="text" name="new_pass_r"
                                          onChange={ event => setUserData(
                                                       Object.assign({}, userData, { new_pass_r: event.target.value })
                                                   )}
                                           required />
                                      </div>
                                  </div>
                                  <div className="col-md-12">
                                      <div className="form-group col-md-12" >
                                        <button type="submit" className="btn btn-danger" >Değiştir</button>
                                        <div id="loading" >
                                          <div></div>
                                          <div></div>
                                          <div></div>
                                        </div>
                                      </div>
                                  </div>

                              </form>
                          </div>
                  </div>
              </div>
            </div>
          </div>
          <Footer/>

      </div>
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="/static/js/jquery.steps.min.js"></script>
      <script src="/static/js/bootstrap.js"></script>
      <script src="/static/js/bootstrap-fileupload.js"></script>
      <script src="/static/js/jquery.metisMenu.js"></script>
      <script src="/static/js/custom.js"></script>
    </Layout>
  )
}

ChangePass.getInitialProps = async ctx => {

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


export default withAuthSync(ChangePass);
