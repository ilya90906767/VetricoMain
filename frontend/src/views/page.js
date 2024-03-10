import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Steep Lumpy Meerkat</title>
        <meta property="og:title" content="Page - Steep Lumpy Meerkat" />
      </Helmet>
      <nav className="page-container1">
        <span className="page-text">Vetrico</span>
      </nav>
      <div className="page-container2">
        <span className="page-text1">Три богатыря</span>
        <img
          src="/mosaic/%C3%B0%C2%A2%C3%B0%C2%91_%C3%B0%C2%BE%C3%B0%C2%B1%C3%B1%C2%89%C3%B0%C2%B8%C3%B0%C2%B9_%C3%B0%C2%BF%C3%B0%C2%BB%C3%B0%C2%B0%C3%B0%C2%BD-900h.jpg"
          className="page-image"
        />
        <div className="page-container3"></div>
        <div className="page-container4">
          <img
            alt="image"
            src="/mosaic/%C3%B0%C2%B0%C3%B0%C2%BB%C3%B0%C2%B5%C3%B1%C2%88%C3%B0%C2%B0-200w.jpg"
            className="page-image1"
          />
          <img
            alt="image"
            src="/mosaic/%C3%B0%C2%98%C3%B0%C2%BB%C3%B1%C2%8C%C3%B1%C2%8F-200w.jpg"
            className="page-image2"
          />
          <img
            src="/mosaic/%C3%B0%C2%94%C3%B0%C2%BE%C3%B0%C2%B1%C3%B1%C2%80%C3%B1%C2%8B%C3%B0%C2%BD%C3%B1%C2%8F-200h.jpg"
            className="page-image3"
          />
          <img
            alt="image"
            src="/mosaic/%C3%B0%C2%A2%C3%B0%C2%91_%C3%B0%C2%B2%C3%B0%C2%B8%C3%B0%C2%B4%20_%C3%B1%C2%81%C3%B0%C2%B1%C3%B0%C2%BE%C3%B0%C2%BA%C3%B1%C2%83-200h.jpg"
            className="page-image4"
          />
        </div>
        <div className="page-container5">
          <span className="page-text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
            ipsum accumsan, imperdiet nulla molestie, pretium sem. Fusce id ex
            tempus, gravida ligula ac, convallis risus. Donec volutpat
            scelerisque risus ac tristique. Aliquam finibus vehicula efficitur.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Vivamus non enim eget tellus sagittis facilisis. Aliquam ac quam
            quis arcu convallis venenatis eu non metus. Aenean eu nulla eget
            metus sagittis elementum. Aliquam commodo nulla eu libero mollis,
            volutpat placerat sapien tincidunt. Nam vitae dolor tellus. Donec
            dapibus libero mi, at aliquet dolor euismod eu. Suspendisse quis
            tellus orci. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Morbi eu leo vel nibh tincidunt cursus sit amet sit amet
            quam. Vestibulum posuere purus at magna dapibus, quis sodales enim
            laoreet. Integer nisi libero, facilisis ullamcorper nibh sit amet,
            posuere fringilla tellus.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Page
