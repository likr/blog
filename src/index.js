import {router} from './router.js'

const resolve = (path) => {
  router.resolve(path.pathname).then((page) => {
    if (page.redirect) {
      const route = {
        pathname: page.redirect
      }
      window.dispatchEvent(new window.CustomEvent('routechange', {
        detail: route
      }))
      window.history.pushState(route, '', route.pathname)
    } else {
      document.getElementById('content').innerHTML = page
    }
  })
}

window.addEventListener('routechange', (event) => {
  resolve(event.detail)
})

window.addEventListener('popstate', (event) => {
  resolve(event.state)
})

window.dispatchEvent(new window.CustomEvent('routechange', {
  detail: {
    pathname: window.location.pathname
  }
}))
