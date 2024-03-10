import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import './mosaic-opv22.css'

const MosaicOPV22 = (props) => {
  return (
    <div className="mosaic-opv22-container">
      <Helmet>
        <title>MosaicOPV22 - Steep Lumpy Meerkat</title>
        <meta property="og:title" content="MosaicOPV22 - Steep Lumpy Meerkat" />
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
      <div className="mosaic-opv22-container3">
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
        <div className="mosaic-opv22-container4">
          <span className="mosaic-opv22-text4">
            © 2024 VETRICO, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default MosaicOPV22
