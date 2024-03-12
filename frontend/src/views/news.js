import React from 'react'

import { Helmet } from 'react-helmet'

import './news.css'

const News = (props) => {
  return (
    <div className="news-container">
      <Helmet>
        <title>News - Vetrico</title>
        <meta property="og:title" content="News - Vetrico" />
      </Helmet>
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
      <div className="news-header">
        <h1 className="news-text04">Мозаика в Риме</h1>
      </div>
      <div className="news-main-photo">
        <img
          alt="image"
          src="/mosaic/%C3%B0%C2%A0%C3%B0%C2%B8%C3%B0%C2%BC-1500w.jpeg"
          className="news-image"
        />
      </div>
      <div className="news-text05">
        <span className="news-text06">
          <span>
            Римская мозаика - это удивительное искусство, которое воплотилось в
            камне и стекле. Эти удивительные композиции, созданные еще в
            древности, до сих пор поражают своей красотой и изысканностью.
            Давайте погрузимся в мир римской мозаики и узнаем больше об этом
            удивительном виде искусства.
          </span>
          <br></br>
          <br></br>
          <span>
            Римская мозаика имеет древние корни и своё развитие начала еще в III
            веке до н.э. Это искусство достигло пика своего расцвета в период
            Римской империи, когда мозаичные полы и стены стали неотъемлемой
            частью роскошных вилл и общественных зданий. Римские мастера
            создавали удивительные композиции, изображающие сцены из мифологии,
            пейзажи, животных и растения.
          </span>
          <br></br>
          <br></br>
          <span>
            Основными материалами, используемыми для римской мозаики, были
            мрамор, керамика и стекло. Мастера тщательно выбирали цвета и формы
            камней, чтобы создать неповторимые узоры и изображения. Процесс
            создания мозаики требовал невероятного мастерства и терпения, ведь
            каждый камешек нужно было разместить точно на своем месте.
          </span>
          <br></br>
        </span>
      </div>
      <div className="news-add-photos">
        <img
          alt="image"
          src="/mosaic/%C3%B0%C2%B0%C3%B0%C2%BB%C3%B0%C2%B5%C3%B1%C2%88%C3%B0%C2%B0-700w.jpg"
          className="news-image1"
        />
        <img
          alt="image"
          src="/mosaic/%C3%B0%C2%A2%C3%B0%C2%91_%C3%B0%C2%BE%C3%B0%C2%B1%C3%B1%C2%89%C3%B0%C2%B8%C3%B0%C2%B9_%C3%B0%C2%BF%C3%B0%C2%BB%C3%B0%C2%B0%C3%B0%C2%BD-700h.jpg"
          className="news-image2"
        />
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          className="news-image3"
        />
        <img
          alt="image"
          src="/mosaic/%C3%B0%C2%A2%C3%B0%C2%91_%C3%B0%C2%B2%C3%B0%C2%B8%C3%B0%C2%B4%20_%C3%B1%C2%81%C3%B0%C2%B1%C3%B0%C2%BE%C3%B0%C2%BA%C3%B1%C2%83-700h.jpg"
          className="news-image4"
        />
      </div>
      <div className="news-footer">
        <footer className="news-footer1">
          <div className="news-separator"></div>
          <div className="news-container1">
            <span className="news-text15">
              © 2024 VETRICO, All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default News
