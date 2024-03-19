import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './card-for-catalog.css'

const CardForCatalog = (props) => {
  return (
    <Link to={`/mosaic/${props.title}`} className="">
      <div className={`card-for-catalog-container ${props.rootClassName} `} style={{
        backgroundImage: `url(${props.image})`
      }} >
        <span className="card-for-catalog-text">{props.text}</span>
      </div>
    </Link>
  )
}

CardForCatalog.defaultProps = {
  text: 'Фиалки',
  rootClassName: '',
}

CardForCatalog.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CardForCatalog
