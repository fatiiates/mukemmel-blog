import React from 'react'
export default class extends React.Component {
  static async getInitialProps ({ req, res }) {
    
    res.write(`User-Agent: *
    Disallow: /admin/*
    Disallow: /api/*

    Sitemap: https://www.sitemaps.org/schemas/sitemap/0.9/`)
    res.end()
  }
}
