import React from 'react'

import { Helmet } from 'react-helmet'

import './news.css'

const News = (props) => {
  return (
    <div className="news-container">
      <Helmet>
        <title>News - Steep Lumpy Meerkat</title>
        <meta property="og:title" content="News - Steep Lumpy Meerkat" />
      </Helmet>
      <div className="news-container1">
        <header data-thq="thq-navbar" className="news-navbar-interactive">
          <a href="#main" className="news-link">
            VETRICO
          </a>
          <div data-thq="thq-navbar-nav" className="news-desktop-menu">
            <a href="tel:+71234567890" className="news-link1">
              <span>Связаться с нами:</span>
              <br></br>
              <span>+7 123 456 78 90</span>
              <br></br>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="news-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="news-mobile-menu"></div>
        </header>
        <h1 className="news-text4">Мозаика в Риме</h1>
        <img
          src="/mosaic/%C3%B0%C2%A0%C3%B0%C2%B8%C3%B0%C2%BC-1000h.jpeg"
          alt="image"
          className="news-image"
        />
        <span className="news-text5">
          <span>Член</span>
          <br></br>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default News
