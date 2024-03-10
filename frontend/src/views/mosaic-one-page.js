import React from 'react'

import { Helmet } from 'react-helmet'

import './mosaic-one-page.css'

const MosaicOnePage = (props) => {
  return (
    <div className="mosaic-one-page-container">
      <Helmet>
        <title>MosaicOnePage - Steep Lumpy Meerkat</title>
        <meta
          property="og:title"
          content="MosaicOnePage - Steep Lumpy Meerkat"
        />
      </Helmet>
      <header data-role="Header" className="mosaic-one-page-header">
        <h1 className="mosaic-one-page-text">VETRICO</h1>
      </header>
      <div className="mosaic-one-page-container1">
        <h1 className="mosaic-one-page-text1">
          <span>Title of mosaic</span>
          <br></br>
        </h1>
      </div>
      <div className="mosaic-one-page-mosaics">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="mosaic-one-page-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="mosaic-one-page-slider-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="mosaic-one-page-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="mosaic-one-page-slider-slide2 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="mosaic-one-page-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="mosaic-one-page-slider-pagination-bullet swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="mosaic-one-page-slider-pagination-bullet1 swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="mosaic-one-page-slider-pagination-bullet2 swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="mosaic-one-page-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="mosaic-one-page-slider-button-next swiper-button-next"
          ></div>
        </div>
      </div>
      <div className="mosaic-one-page-container2">
        <span className="mosaic-one-page-text4">
          <span>
            Римская мозаика - это удивительное искусство, которое воплотилось в
            камне и стекле. Эти удивительные композиции, созданные еще в
            древности, до сих пор поражают своей красотой и изысканностью.
            Давайте погрузимся в мир римской мозаики и узнаем больше об этом
            удивительном виде искусства
          </span>
          <br></br>
          <br></br>
        </span>
      </div>
      <footer className="mosaic-one-page-footer">
        <span className="mosaic-one-page-text8">
          © 2021 teleportHQ, All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default MosaicOnePage
