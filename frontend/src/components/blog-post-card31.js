import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card31.css'

const BlogPostCard31 = (props) => {
  return (
    <div className={`blog-post-card31-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="blog-post-card31-image"
      />
      <div className="blog-post-card31-container">
        <h1 className="blog-post-card31-text">{props.title}</h1>
        <div className="blog-post-card31-container1">
          <span className="blog-post-card31-text1">{props.description}</span>
          <span className="blog-post-card31-text2">Read More</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard31.defaultProps = {
  title: 'Lorem ipsum dolor sit amet',
  imageAlt: 'image',
  author: 'by Jon Doe 5 hours ago',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  label: 'ENTERPRISE',
  imageSrc:
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&h=1200',
}

BlogPostCard31.propTypes = {
  title: PropTypes.string,
  imageAlt: PropTypes.string,
  author: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default BlogPostCard31
