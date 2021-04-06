import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './Header'
import { Footer } from './Footer'
import { Dashboard } from './pages/Dashboard'

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard header={<Header />} footer={<Footer />} />
          </Route>
          <Route component={Home} path="/" exact />
        </Switch>
      </Router>
    </>
  )
}
