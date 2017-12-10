import {html, render} from '../vendor/lit-html.js'

const template = (element) => html`
<div>
<slot />
</div>
`

class PostDetailPage extends window.HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: 'open'})
  }

  connectedCallback () {
    render(template(this), this.shadowRoot)
  }
}

window.customElements.define('blog-post-detail-page', PostDetailPage)
