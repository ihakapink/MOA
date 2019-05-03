import React from 'react'
import Register from './Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path ='/' component={Header} />
        <h1>MOA development has begun!</h1>
      </Switch>
    </Router>
  )
}

export default App
