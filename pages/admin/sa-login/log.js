import React, { useState } from "react";
import Head from "next/head";
import fetch from 'isomorphic-unfetch'
import { login } from '../../../utils/auth'
const md5 = require('md5');

class Login extends React.Component {

	constructor(props){
		super(props);

	}


  handleSubmit = async event => {
		const [userData, setUserData] = useState({ username: '', userpass: '', error: '' })
		event.preventDefault()
		setUserData(Object.assign({}, userData, { error: '' }))

		const username = userData.username
		const url = '/api/login'

		try {
			const response = await fetch(url, {
				method: 'POST',

				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username }),
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

	 /*getUser = async ctx =>{

		const adminToken="af43c0445a680a18d52b648e1cb51c97";
		const tokenmd5="5b5ef644ff6a389fe63f3674295e2051";
		const host=process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://mukemmellblog.herokuapp.com";
		const pageRequestSelect = `${host}/api/db/select?token=${tokenmd5}&adminToken=${adminToken}&que=userLogin&username=${md5($('#admin_userID').val())}&userpass=${md5($('#admin_pass').val())}`;
		console.log(pageRequestSelect);
		const resSelect = await fetch(pageRequestSelect);
		const jsonSelect = await resSelect.json();
		if(jsonSelect.posts["0"]["COUNT(*)"] == 1){
			setCookie(ctx, 'adminToken', adminToken, {
				maxAge: 20*60,
				path: '/',
			});
			setCookie(ctx, 'storage', tokenmd5, {
				maxAge: 20*60,
				path: '/',
			});
			window.location="/admin"
		}
		else {
			window.location="#error";
		}
	}

	handleClick = ()=>{
		this.getUser();
	}*/



	render () {
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
					<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

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
						<form onSubmit={this.handleSubmit} >
							<div>
								<input id="username" type="text" className="login-username" value={userData.username} placeholder="Email" name="username"
								 onChange={ event => setUserData(
															Object.assign({}, userData, { username: event.target.value })
													)} />
							</div>
							<div><input id="userpass" type="password" className="login-password" value={userData.userpass} placeholder="Password" name="userpass" /></div>
							<div><button id="admin_login" type="submit" className="login-submit" name="admin_login" > Giriş</button></div>
							{userData.error && <p className="error">Error: {userData.error}</p>}
						</form>
						<div className="underlay-photo" style={{background:"#418787"}}></div>
						<div className="underlay-black"></div>
					</div>
			</div>
		);
	}

}

export default Login;
