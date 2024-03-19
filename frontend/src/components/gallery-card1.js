import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="gallery-card1-image"
      />
      <h2 className="gallery-card1-text">{props.title}</h2>
      <span className="gallery-card1-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard1.propTypes = {
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard1
