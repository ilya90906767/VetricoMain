import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import MosaicOPV2 from './views/mosaic-opv2'
import CatalogV22 from './views/catalog-v22'
import MainPage from './views/main-page'
import CatalogV2 from './views/catalog-v2'
import Catalogue from './views/catalogue'
import CatalogV22slider from './views/catalog-v22slider'
import News from './views/news'
import MosaicOPV22 from './views/mosaic-opv22'
import MosaicOnePage from './views/mosaic-one-page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={MosaicOPV2} exact path="/mosaic" />
        <Route component={CatalogV22} exact path="/catalog-v22" />
        <Route component={MainPage} exact path="/" />
        <Route component={CatalogV2} exact path="/catalog-v2" />
        <Route component={Catalogue} exact path="/none" />
        <Route component={CatalogV22slider} exact path="/catalog" />
        <Route component={News} exact path="/news" />
        <Route component={MosaicOPV22} exact path="/mosaic-opv22" />
        <Route component={MosaicOnePage} exact path="/onemosaic" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
