import React, { useState } from "react";
import Head from "next/head";
import fetch from 'isomorphic-unfetch'
import { login } from '../../../utils/auth'
const md5 = require('md5');

const Login = () => {
  const [userData, setUserData] = useState({ username: '', userpass: '', error: '' })

  const handleSubmit = async event => {
    event.preventDefault()
    setUserData(Object.assign({}, userData, { error: '' }))

    const username = userData.username
    const userpass = userData.userpass
    const url = '/api/login'

    try {
      const response = await fetch(url, {
        method: 'POST',

        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, userpass }),
      })
      if (response.status === 200) {
        const { token } = await response.json()
        await login({ token })
      } else {
        console.log('Login failed.')
        // https://github.com/developit/unfetch#caveats
        let error = new Error(response.statusText)
        error.response = response
        throw error
      }
    } catch (error) {
      console.error(
        'You have an error in your code or there are Network issues.',
        error
      )

      const { response } = error
      setUserData(
        Object.assign({}, userData, {
          error: response ? response.statusText : error.message,
        })
      )
    }
  }

  return (
    <div className="container" >
      <style jsx global >{`
        #__next{
          width:100%;
          height:100%;
        }
        .container {
          width:100%;
          height:100%;
          display:flex;
          align-items:center;
          justify-content:center
        }
        .login-username,.login-password {
          width:auto;
        }
      `}</style>
        <Head>

          <link rel="stylesheet" type="text/css" href="/static/css/admin-login.css"/>
          <link rel="icon" href="/static/img/ico/favicon.ico" />
        </Head>
        <div>
          <input type="text" readOnly="readonly " style={{display:"none"}} value="Kullanıcı Bulunamadı!" className="admin-login-error"/>
          <p className="login-text">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-lock fa-stack-1x"></i>
              </span>
          </p>
          <form onSubmit={handleSubmit} >
            <div>
              <input id="username" type="text" className="login-username" value={userData.username} placeholder="Email" name="username"
               onChange={ event => setUserData(
                            Object.assign({}, userData, { username: event.target.value })
                        )} />
            </div>
            <div><input id="userpass" type="password" className="login-password" value={userData.userpass} placeholder="Password" name="userpass"
              onChange={ event => setUserData(
                           Object.assign({}, userData, { userpass: event.target.value })
                       )} />
            </div>
            <div><button id="admin_login" type="submit" className="login-submit" name="admin_login" > Giriş</button></div>
            {userData.error && <p className="error">Error: {userData.error}</p>}
          </form>
          <div className="underlay-photo" style={{background:"#418787"}}></div>
          <div className="underlay-black"></div>
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

        </div>
    </div>
  )
}

export default Login
