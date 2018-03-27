import {html, render} from 'lit-html'

const template = (element) => html`
<style>
.post {
  padding-bottom: 2em;
}

.post-description {
  font-family: Georgia, "Cambria", serif;
  color: #444;
  line-height: 1.8em;
}

.post-meta {
  color: #999;
  font-size: 90%;
  margin: 0;
}

::slotted([slot="title"]) {
  font-size: 2em;
  color: #222;
  margin-bottom: 0.2em;
}

::slotted([slot="category"]) {
  margin: 0 0.1em;
  padding: 0.3em 1em;
  color: #fff !important;
  background: #999 !important;
  font-size: 80%;
}
</style>
<section class="post">
  <header class="post-header">
    <h2 class="post-title">
      <slot name="title" />
    </h2>
    <p class="post-meta">
      Categories: <slot name="category" class="post-category" />
    </p>
  </header>
  <div class="post-description">
    <slot />
  </div>
</section>
`

class PostItem extends window.HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: 'open'})
  }

  connectedCallback () {
    render(template(this), this.shadowRoot)
  }
}

window.customElements.define('blog-post-item', PostItem)
