import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { useParams } from 'react-router-dom';

import './style.css'
import CatalogV22 from './views/catalog-v22'
import News from './views/news'
import MosaicOPV22 from './views/mosaic-opv22'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={CatalogV22} exact path="/catalog" />
        <Route component={News} exact path="/news" />
        <Route component={MosaicOPV22} path="/mosaic/:title" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
