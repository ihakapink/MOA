import React from 'react'

import Login from './Login'

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'


const App = () => {
  return (
    <Router>

      <Switch>
        <Route path='/' component ={Login} />
      </Switch>

    </Router>
  )
}

export default App
