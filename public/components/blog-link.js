import {html, render} from '../vendor/lit-html.js'

const template = (element) => html`
<style>
a {
  color: inherit;
  text-decoration: none;
}

a:hover, a:focus {
  text-decoration: underline;
}
</style>
<a id="link" href="${element.href}"><slot /></a>
`

class Link extends window.HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: 'open'})
  }

  connectedCallback () {
    render(template(this), this.shadowRoot)
    this.handleClick = (event) => {
      event.preventDefault()
      const route = {
        pathname: event.currentTarget.pathname,
        search: event.currentTarget.search
      }
      window.dispatchEvent(new window.CustomEvent('routechange', {
        detail: route
      }))
      window.history.pushState(route, '', route.pathname)
    }
    this.shadowRoot.getElementById('link').addEventListener('click', this.handleClick)
  }

  disconnectedCallback () {
    this.shadowRoot.getElementById('link').removeEventListener('click', this.handleClick)
  }

  get href () {
    return this.getAttribute('href')
  }

  set href (value) {
    this.setAttribute('href', value)
  }
}

window.customElements.define('blog-link', Link)
