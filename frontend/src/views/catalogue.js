import React, {useEffect, useState} from 'react'
import axios from 'axios';

import { Helmet } from 'react-helmet'

import './catalogue.css'

const Catalogue = (props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  const [allMosaics, setAllMosaics] = useState([])

  const handleNextClick = () => {
    if (endIndex < allMosaics.length) {
      setStartIndex(endIndex);
      setEndIndex(endIndex + 6);
    }
  };
  
  const handlePrevClick = () => {
    console.log(startIndex, endIndex)
    if (startIndex  >= 6) {
      setEndIndex(startIndex);
      setStartIndex(startIndex - 6);
    }
    console.log(startIndex, endIndex)
  };

  useEffect(() => {
    const fetchMosaics = async (backendUrl) => {
      try {
        const response = await axios.get(`${backendUrl}/api/public/mosaics/`);
        setAllMosaics(response.data);
        console.log(response.data);
        console.log('Retrieve Mosaics from database');
      } catch (error) {
        console.error(error);
      }
    };
  
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
  
      fetchMosaics(backendUrl);
    }, []);

    function getImageSourceById(id) {
      // Use the find method to search for the object with the given id
      const image = allMosaics.find(img => img.id === id);
      
      // If the image is found, return its source, otherwise return null
      return image ? image.image : null;
    }

    function getTitleSourceById(id) {
      // Use the find method to search for the object with the given id
      const image = allMosaics.find(img => img.id === id);
      
      // If the image is found, return its source, otherwise return null
      return image ? image.title : null;
    }

  return (
    <div className="catalogue-container">
      <Helmet>
        <title>Catalogue - Steep Lumpy Meerkat</title>
        <meta property="og:title" content="Catalogue - Steep Lumpy Meerkat" />
      </Helmet>
      <header data-role="Header" className="catalogue-header">
        <h1 className="catalogue-text">VETRICO</h1>
      </header>
      <div className="catalogue-mosaics">
        <div className="catalogue-album">
          <div className="catalogue-left-button">
            <button type="button" onClick={handlePrevClick} className="catalogue-button button">
              <span className="catalogue-text01">
                <br></br>
                <span> </span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="catalogue-right-button">
            <button type="button" onClick={handleNextClick} className="catalogue-button1 button">
              <span>
                <br></br>
                <br></br>
              </span>
            </button>
          </div>
          <div className="catalogue-up-center-element">
          <img
              alt="image"
              src={getImageSourceById(startIndex+3)}
              loading="eager"
              className="catalogue-image1"
            />
            <div className="catalogue-container1">
              <h1 className="catalogue-text08">
                <span>{getTitleSourceById(startIndex+3)}</span>
                <br></br>
                <br></br>
              </h1>
            </div>
          </div>
          <div className="catalogue-up-left-element">
            <img
              alt="image"
              src={getImageSourceById(startIndex+1)}
              loading="eager"
              className="catalogue-image1"
            />
            <div className="catalogue-container2">
              <h1 className="catalogue-text12">
                <span>{getTitleSourceById(startIndex+1)}</span>
                <br></br>
              </h1>
            </div>
          </div>
          <div className="catalogue-down-left-element">
            <img
              alt="image"
              src={getImageSourceById(startIndex+4)}
              loading="lazy"
              className="catalogue-image2"
            />
            <div className="catalogue-container3">
              <h1 className="catalogue-text15">
                <span>{getTitleSourceById(startIndex+4)}</span>
                <br></br>
              </h1>
            </div>
          </div>
          <div className="catalogue-up-right-element">
            <div className="catalogue-container4">
              <h1 className="catalogue-text18">
                <span>{getTitleSourceById(startIndex+2)}</span>
                <br></br>
              </h1>
            </div>
            <img
              alt="image"
              src={getImageSourceById(startIndex+2)}
              loading="lazy"
              className="catalogue-image3"
            />
          </div>
          <div className="catalogue-down-center-element">
            <div className="catalogue-container5">
              <h1 className="catalogue-text21">
                <span>{getTitleSourceById(startIndex+6)}</span>
                <br></br>
              </h1>
            </div>
            <img
              alt="image"
              src={getImageSourceById(startIndex+6)}
              loading="lazy"
              className="catalogue-image4"
            />
          </div>
          <div className="catalogue-down-right-element">
            <div className="catalogue-container6">
              <h1 className="catalogue-text24">
                <span>{getTitleSourceById(startIndex+5)}</span>
                <br></br>
              </h1>
            </div>
            <img
              alt="image"
              src={getImageSourceById(startIndex+5)}
              loading="lazy"
              className="catalogue-image5"
            />
          </div>
          <div className="catalogue-container7">
            <button type="button" className="catalogue-button2 button">
              <span>
                <br></br>
                <br></br>
              </span>
            </button>
            <button type="button" className="catalogue-button3 button">
              <span>
                <br></br>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="catalogue-footer">
        <div className="catalogue-banner">
          <h1 className="catalogue-text33">Понравилась мозаика?</h1>
          <button type="button" className="catalogue-button4 button">
            Связаться с нами
          </button>
        </div>
        <footer className="catalogue-footer1">
          <div className="catalogue-separator"></div>
          <div className="catalogue-container8">
            <span className="catalogue-text34">
              © 2024 VETRICO, All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Catalogue
