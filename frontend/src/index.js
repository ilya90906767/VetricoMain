import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import MainPage from './views/main-page'
import Catalogue from './views/catalogue'
import News from './views/news'
import MosaicOnePage from './views/mosaic-one-page'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Catalogue} exact path="/catalogue" />
        <Route component={News} exact path="/news" />
        <Route component={MosaicOnePage} exact path="/onemosaic" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
