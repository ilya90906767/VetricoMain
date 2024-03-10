import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import './mosaic-opv2.css'

const MosaicOPV2 = (props) => {
  return (
    <div className="mosaic-opv2-container">
      <Helmet>
        <title>MosaicOPV2 - Steep Lumpy Meerkat</title>
        <meta property="og:title" content="MosaicOPV2 - Steep Lumpy Meerkat" />
      </Helmet>
      <div className="mosaic-opv2-navbar">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name1"></NavbarInteractive>
      </div>
      <div className="mosaic-opv2-phototext">
        <div className="mosaic-opv2-container1"></div>
        <img
          alt="image"
          src="/mosaic/mop12-900h.jpg"
          className="mosaic-opv2-image"
        />
        <div className="mosaic-opv2-container2">
          <h1 className="mosaic-opv2-text">Три Богатыря</h1>
          <span className="mosaic-opv2-text1">
            Мир русской мифологии богат на удивительные истории, героев и
            сказания. Одним из самых популярных образов являются богатыри -
            сильные и отважные воины, защитники Руси. Их подвиги и приключения
            вдохновляли многих на протяжении веков. Сегодня мы с вами отправимся
            в увлекательное путешествие в мир русской мифологии, рассматривая
            мозаичное изображение трех богатырей.
          </span>
        </div>
      </div>
      <div className="mosaic-opv2-container3">
        <img
          alt="image"
          src="/mosaic/%C3%B0%C2%B0%C3%B0%C2%BB%C3%B0%C2%B5%C3%B1%C2%88%C3%B0%C2%B0-700w.jpg"
          className="mosaic-opv2-image1"
        />
        <img
          alt="image"
          src="/mosaic/%C3%B0%C2%98%C3%B0%C2%BB%C3%B1%C2%8C%C3%B1%C2%8F-700w.jpg"
          className="mosaic-opv2-image2"
        />
        <img
          alt="image"
          src="/mosaic/%C3%B0%C2%94%C3%B0%C2%BE%C3%B0%C2%B1%C3%B1%C2%80%C3%B1%C2%8B%C3%B0%C2%BD%C3%B1%C2%8F-700h.jpg"
          className="mosaic-opv2-image3"
        />
        <img
          alt="image"
          src="/mosaic/mop11-1500w.jpg"
          className="mosaic-opv2-image4"
        />
      </div>
      <div className="mosaic-opv2-footer">
        <footer className="mosaic-opv2-footer1">
          <div className="mosaic-opv2-separator"></div>
          <div className="mosaic-opv2-container4">
            <span className="mosaic-opv2-text2">
              © 2024 VETRICO, All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MosaicOPV2
