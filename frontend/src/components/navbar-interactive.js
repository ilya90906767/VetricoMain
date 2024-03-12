import React from 'react'

import PropTypes from 'prop-types'

import './navbar-interactive.css'

const NavbarInteractive = (props) => {
  return (
    <div className={`navbar-interactive-container ${props.rootClassName} `}>
      <header
        data-thq="thq-navbar"
        className="navbar-interactive-navbar-interactive"
      >
        <a
          href="http://nanoscript-land.ru/"
          className="navbar-interactive-link"
        >
          {props.text}
        </a>
        <div
          data-thq="thq-navbar-nav"
          className="navbar-interactive-desktop-menu"
        >
          <nav className="navbar-interactive-links">
            <a
              href="http://nanoscript.ru/catalog"
              className="navbar-interactive-link01"
            >
              {props.text1}
            </a>
            <a
              href="http://nanoscript-land.ru/#workshop"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar-interactive-link02"
            >
              {props.text2}
            </a>
            <a
              href="http://nanoscript-land.ru/#news"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar-interactive-link03"
            >
              {props.text3}
            </a>
            <a href="tel:+71234567890" className="navbar-interactive-link04">
              {props.text4}
            </a>
          </nav>
          <a href="tel:+71234567890" className="navbar-interactive-link05">
            <span className="">+7 123 456 78 90</span>
            <br className=""></br>
          </a>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="navbar-interactive-burger-menu"
        >
          <svg viewBox="0 0 1024 1024" className="navbar-interactive-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="navbar-interactive-mobile-menu"
        >
          <div className="navbar-interactive-nav">
            <div className="navbar-interactive-top">
              <span className="navbar-interactive-text2">{props.text5}</span>
              <div
                data-thq="thq-close-menu"
                className="navbar-interactive-close-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="navbar-interactive-icon2"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-interactive-links1">
              <a href="#catalog" className="navbar-interactive-link06">
                {props.text6}
              </a>
              <a href="#workshop" className="navbar-interactive-link07">
                {props.text7}
              </a>
              <a href="#news" className="navbar-interactive-link08">
                {props.text8}
              </a>
              <a href="tel:+71234567890" className="navbar-interactive-link09">
                {props.text9}
              </a>
            </nav>
            <span className="navbar-interactive-text3">
              <br className=""></br>
              <span className="navbar-interactive-text5">+7 123 456 78 90</span>
              <br className=""></br>
            </span>
          </div>
        </div>
      </header>
    </div>
  )
}

NavbarInteractive.defaultProps = {
  text7: 'Мастерская',
  text1: 'Каталог',
  text9: 'Контакты',
  text2: 'Мастерская',
  text3: 'Новости',
  text8: 'Новости',
  text: 'VETRICO',
  rootClassName: '',
  text5: 'VETRICO',
  text6: 'Каталог',
  text4: 'Контакты',
}

NavbarInteractive.propTypes = {
  text7: PropTypes.string,
  text1: PropTypes.string,
  text9: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text8: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text4: PropTypes.string,
}

export default NavbarInteractive
