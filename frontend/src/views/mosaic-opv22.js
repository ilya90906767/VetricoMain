import React, {useEffect, useState} from 'react'
import axios, { all } from 'axios';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import './mosaic-opv22.css'

const MosaicOPV22 = (props) => {
  const { title } = useParams();
  console.log(title)

  const [oneMosaic, setOneMosaic] = useState([]);
  
  useEffect(() => {
    const fetchMosaics = async (backendUrl, title) => {
      try {
        const response = await axios.get(`${backendUrl}/api/public/onemosaic/${title}`);
        setOneMosaic(response.data);
        console.log(response.data);
        console.log('Retrieve Mosaics from database');
      } catch (error) {
        console.error(error);
      }
    };
  
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
  
      fetchMosaics(backendUrl, title);
    }, []);
    let  image2, image3, image4, image5;
    if (oneMosaic.image2 != "None"){ image2 =
      <img
      alt="image"
      src={oneMosaic.image2}
      className="mosaic-opv22-image1"
    />
    }
    else{image2=""}

    if (oneMosaic.image3 != "None"){ image3 =
      <img
      alt="image"
      src={oneMosaic.image3}
      className="mosaic-opv22-image2"
    />
    }
    else{image3=""}

    if (oneMosaic.image4 != "None"){ image4 =
      <img
      alt="image"
      src={oneMosaic.image4}
      className="mosaic-opv22-image3"
    />
    }
    else{image4=""}

    if (oneMosaic.image5 != "None"){ image5 =
      <img
      alt="image"
      src={oneMosaic.image5}
      className="mosaic-opv22-image4"
    />
    }
    else{image5=""}

  
  return (
    <div className="mosaic-opv22-container">
            <style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')
</style>
      <Helmet>
        <title>{title} Vetrico</title>
        <meta property="og:title" content="MosaicOPV22 - Vetrico" />
      </Helmet>
      <div className="mosaic-opv22-navbar">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name2"></NavbarInteractive>
      </div>
      <div className="mosaic-opv22-phototext">
        <div className="mosaic-opv22-container1" style={{
        backgroundImage: `url(${oneMosaic.image})`
      }}></div>
        <img
          alt="image"
          src={oneMosaic.image}
          className="mosaic-opv22-image"
        />
        <div className="mosaic-opv22-container3">
          <h1 className="mosaic-opv22-text">
            <span className="mosaic-opv22-text1">{title}</span>
            <br></br>
          </h1>
          <span className="mosaic-opv22-text3">
            {oneMosaic.description}
          </span>
        </div>
      </div>
      <div className="mosaic-opv22-container4">
        {image2}
        {image3}
        {image4}
        {image5}
      </div>
      <footer className="mosaic-opv22-footer">
        <div className="mosaic-opv22-separator"></div>
        <div className="mosaic-opv22-container5">
          <span className="mosaic-opv22-text4">
            © 2024 VETRICO, All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default MosaicOPV22
