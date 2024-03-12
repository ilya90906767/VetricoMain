import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import './mosaic-opv22.css'

const MosaicOPV22 = (props) => {
  return (
    <div className="mosaic-opv22-container">
      <Helmet>
        <title>MosaicOPV22 - Vetrico</title>
        <meta property="og:title" content="MosaicOPV22 - Vetrico" />
      </Helmet>
      <div className="mosaic-opv22-navbar">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name2"></NavbarInteractive>
      </div>
      <div className="mosaic-opv22-phototext">
        <div className="mosaic-opv22-container1"></div>
        <img
          alt="image"
          src="/mosaic/%C3%B1%C2%84%C3%B0%C2%B8%C3%B0%C2%B0%C3%B0%C2%BB%C3%B0%C2%BA%C3%B0%C2%B8-1200w.jpg"
          className="mosaic-opv22-image"
        />
        <div className="mosaic-opv22-container2">
          <Link to="/catalog" className="mosaic-opv22-navlink">
            <svg
              viewBox="0 0 1060.5714285714284 1024"
              className="mosaic-opv22-icon"
            >
              <path d="M1024 457.143v109.714c0 10.286-8 18.286-18.286 18.286h-713.143v128c0 7.429-4 13.714-10.857 16.571s-14.286 1.714-20-2.857l-219.429-200c-3.429-3.429-5.714-8-5.714-13.143v0c0-5.143 2.286-10.286 5.714-13.714l219.429-202.286c5.714-5.143 13.143-6.286 20-3.429 6.286 2.857 10.857 9.143 10.857 16.571v128h713.143c10.286 0 18.286 8 18.286 18.286z"></path>
            </svg>
          </Link>
        </div>
        <div className="mosaic-opv22-container3">
          <h1 className="mosaic-opv22-text">
            <span className="mosaic-opv22-text1">Фиалки</span>
            <br></br>
          </h1>
          <span className="mosaic-opv22-text3">
            Мир русской мифологии богат на удивительные истории, героев и
            сказания. Одним из самых популярных образов являются богатыри -
            сильные и отважные воины, защитники Руси. Их подвиги и приключения
            вдохновляли многих на протяжении веков
          </span>
        </div>
      </div>
      <div className="mosaic-opv22-container4">
        <img
          alt="image"
          src="/mosaic/mop1-700h.jpg"
          className="mosaic-opv22-image1"
        />
        <img
          alt="image"
          src="/mosaic/mop2-1500w.jpg"
          className="mosaic-opv22-image2"
        />
        <img
          alt="image"
          src="/mosaic/%C3%B0%C2%94%C3%B0%C2%BE%C3%B0%C2%B1%C3%B1%C2%80%C3%B1%C2%8B%C3%B0%C2%BD%C3%B1%C2%8F-700h.jpg"
          className="mosaic-opv22-image3"
        />
        <img
          alt="image"
          src="/mosaic/mop11-700h.jpg"
          className="mosaic-opv22-image4"
        />
      </div>
      <footer className="mosaic-opv22-footer">
        <div className="mosaic-opv22-separator"></div>
        <div className="mosaic-opv22-container5">
          <span className="mosaic-opv22-text4">
            © 2024 VETRICO, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default MosaicOPV22
