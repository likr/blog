import './service-worker-registration'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import {App} from './app'
import {PostList} from './post-list'
import {PostDetail} from './post-detail'

const root = <Router history={hashHistory}>
  <Route path='/' component={App}>
    <IndexRedirect to='/posts' />
    <Route path='posts' component={PostList} />
    <Route path='posts/:postId' component={PostDetail} />
  </Route>
</Router>

render(root, document.getElementById('content'))
