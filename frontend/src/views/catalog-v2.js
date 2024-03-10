import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import CardForCatalog from '../components/card-for-catalog'
import './catalog-v2.css'

const CatalogV2 = (props) => {
  return (
    <div className="catalog-v2-container">
      <Helmet>
        <title>CatalogV2 - Steep Lumpy Meerkat</title>
        <meta property="og:title" content="CatalogV2 - Steep Lumpy Meerkat" />
      </Helmet>
      <div className="catalog-v2-navbar">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name"></NavbarInteractive>
      </div>
      <div className="catalog-v2-container1">
        <span className="catalog-v2-text">
          <span>Каталог</span>
          <br></br>
        </span>
      </div>
      <div className="catalog-v2-flowers">
        <span className="catalog-v2-text3">Цветы</span>
        <div className="catalog-v2-container2"></div>
        <div className="catalog-v2-container3">
          <CardForCatalog rootClassName="card-for-catalog-root-class-name6"></CardForCatalog>
          <CardForCatalog rootClassName="card-for-catalog-root-class-name8"></CardForCatalog>
          <CardForCatalog rootClassName="card-for-catalog-root-class-name7"></CardForCatalog>
        </div>
        <div id="more1" className="catalog-v2-container4">
          <CardForCatalog rootClassName="card-for-catalog-root-class-name12"></CardForCatalog>
          <CardForCatalog rootClassName="card-for-catalog-root-class-name13"></CardForCatalog>
          <CardForCatalog rootClassName="card-for-catalog-root-class-name14"></CardForCatalog>
        </div>
        <button type="button" className="catalog-v2-button button">
          Смотреть еще
        </button>
      </div>
      <div className="catalog-v2-bogatyr">
        <span className="catalog-v2-text4">Богатыри</span>
        <div className="catalog-v2-container5"></div>
        <div className="catalog-v2-container6">
          <CardForCatalog
            text="Алеша Попович"
            rootClassName="card-for-catalog-root-class-name15"
          ></CardForCatalog>
          <CardForCatalog
            text="Илья Муромец"
            rootClassName="card-for-catalog-root-class-name16"
          ></CardForCatalog>
          <CardForCatalog
            text="Добрыня Никитич"
            rootClassName="card-for-catalog-root-class-name17"
          ></CardForCatalog>
        </div>
        <div id="more2" className="catalog-v2-container7">
          <CardForCatalog rootClassName="card-for-catalog-root-class-name18"></CardForCatalog>
          <CardForCatalog rootClassName="card-for-catalog-root-class-name19"></CardForCatalog>
          <CardForCatalog rootClassName="card-for-catalog-root-class-name20"></CardForCatalog>
        </div>
        <button type="button" className="catalog-v2-button1 button">
          Смотреть еще
        </button>
      </div>
    </div>
  )
}

export default CatalogV2
