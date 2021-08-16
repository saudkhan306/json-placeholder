import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostDetail from './Componants/PostDetail'
import Posts from './Componants/Posts'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
