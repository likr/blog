import './service-worker-registration'
import {render} from './vendor/lit-html'
import {router} from './router'

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
      render(page, document.getElementById('content'))
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
