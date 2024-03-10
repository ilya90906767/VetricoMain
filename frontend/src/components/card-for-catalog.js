import React from 'react'

import PropTypes from 'prop-types'

import './card-for-catalog.css'

const CardForCatalog = (props) => {
  return (
    <div className={`card-for-catalog-container ${props.rootClassName} `}>
      <span className="card-for-catalog-text">{props.text}</span>
    </div>
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
