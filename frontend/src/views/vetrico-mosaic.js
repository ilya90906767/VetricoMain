import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import './vetrico-mosaic.css'

const VetricoMosaic = (props) => {
  return (
    <div className="vetrico-mosaic-container">
      <Helmet>
        <title>Vetrico-Mosaic - Vetrico</title>
        <meta property="og:title" content="Vetrico-Mosaic - Vetrico" />
      </Helmet>
      <div className="vetrico-mosaic-navbar">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name2"></NavbarInteractive>
      </div>
      <div className="vetrico-mosaic-phototext">
        <div className="vetrico-mosaic-container1"></div>
        <img
          alt="image"
          src="/mosaic/%C3%B1%C2%84%C3%B0%C2%B8%C3%B0%C2%B0%C3%B0%C2%BB%C3%B0%C2%BA%C3%B0%C2%B8-1200w.jpg"
          className="vetrico-mosaic-image"
        />
        <div className="vetrico-mosaic-container2">
          <h1 className="vetrico-mosaic-text">
            <span className="vetrico-mosaic-text1">Фиалки</span>
            <br></br>
          </h1>
          <span className="vetrico-mosaic-text3">
            Мир русской мифологии богат на удивительные истории, героев и
            сказания. Одним из самых популярных образов являются богатыри -
            сильные и отважные воины, защитники Руси. Их подвиги и приключения
            вдохновляли многих на протяжении веков
          </span>
        </div>
      </div>
      <div className="vetrico-mosaic-container3">
        <img
          alt="image"
          src="/mosaic/mop1-700h.jpg"
          className="vetrico-mosaic-image1"
        />
        <img
          alt="image"
          src="/mosaic/mop2-1500w.jpg"
          className="vetrico-mosaic-image2"
        />
        <img
          alt="image"
          src="/mosaic/%C3%B0%C2%94%C3%B0%C2%BE%C3%B0%C2%B1%C3%B1%C2%80%C3%B1%C2%8B%C3%B0%C2%BD%C3%B1%C2%8F-700h.jpg"
          className="vetrico-mosaic-image3"
        />
        <img
          alt="image"
          src="/mosaic/mop11-700h.jpg"
          className="vetrico-mosaic-image4"
        />
      </div>
      <footer className="vetrico-mosaic-footer">
        <div className="vetrico-mosaic-separator"></div>
        <div className="vetrico-mosaic-container4">
          <span className="vetrico-mosaic-text4">
            © 2024 VETRICO, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default VetricoMosaic
