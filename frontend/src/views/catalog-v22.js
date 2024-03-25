import React, {useEffect, useState} from 'react'
import axios, { all } from 'axios';

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import CardForCatalog from '../components/card-for-catalog'
import './catalog-v22.css'
import { useParams } from 'react-router-dom';

const CatalogV22 = (props) => {
  const {subcategory} = useParams();
  

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(6);
  const [allMosaics, setAllMosaics] = useState([])

  const handleNextClick = () => {
    if (endIndex < allMosaics.length) {
      setStartIndex(endIndex);
      setEndIndex(endIndex + 6);
      console.log(startIndex, endIndex)
    }
  };
  
  const handlePrevClick = () => {
    if (startIndex  >= 6) {
      setEndIndex(startIndex);
      setStartIndex(startIndex - 6);
    }
    console.log(startIndex, endIndex)
  };

  useEffect(() => {

    const fetchMosaics = async (backendUrl, subcategory) => {
      try {
        const response = await axios.get(`${backendUrl}/api/public/mosaics/`);
        const filteredMosaics = response.data.filter(mosaic => mosaic.subcategory === subcategory);
        setAllMosaics(filteredMosaics);
        console.log(filteredMosaics);
        console.log(subcategory);
        console.log('Retrieve Mosaics from database');
      } catch (error) {
        console.error(error);
      }
    };
  
      const backendUrl = process.env.REACT_APP_BACKEND_URL;
  
      fetchMosaics(backendUrl);
    }, []);

    const MosaicsOnPage = allMosaics.slice(startIndex,endIndex);

    let PrevButton;
    if (startIndex != 0){
      PrevButton =<button type="button" className="catalog-v22-button1 button" onClick={handlePrevClick}>
      <span className="catalog-v22-text4">&lt;--</span>
    </button>
    } else {
      PrevButton = ""
    }
    let NextButton;
    if (endIndex < allMosaics.length){
      NextButton =<button type="button" className="catalog-v22-button1 button" onClick={handleNextClick}>
      <span className="catalog-v22-text4">--&gt;</span> 
    </button>
    } else {
      NextButton = ""
    }

  return (
    <div className="catalog-v22-container">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')
</style>

      <Helmet>
        <title>Vetrico</title>
        <meta property="og:title" content="Vetrico" />
      </Helmet>
      <div className="catalog-v22-navbar">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name3"></NavbarInteractive>
      </div>
      <div className="catalog-v22-container1">
        <span className="catalog-v22-text">
          <span>Каталог</span>
          <br></br>
        </span>
      </div>
      <div className="catalog-v22-container2">
        {MosaicsOnPage.map((object, index) => (
          <CardForCatalog rootClassName="card-for-catalog-root-class-name" text={object.title} image={object.image} title={object.title}key={index} ></CardForCatalog>
          
      ))}
      </div>
      <div className="catalog-v22-container3">
        <div className="catalog-v22-container4">
          {NextButton}
        </div>
        <div className="catalog-v22-container5">

        {PrevButton}

        </div>
        <div className="catalog-v22-container6"></div>
      </div>
      <div className="catalog-v22-footer">
        <footer className="catalog-v22-footer1">
          <div className="catalog-v22-separator"></div>
          <div className="catalog-v22-container7">
            <span className="catalog-v22-text5">
              © 2024 VETRICO, All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default CatalogV22
