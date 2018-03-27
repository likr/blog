import {html, render} from 'lit-html'

const template = (element) => html`
<style>
.content-subhead {
  text-transform: uppercase;
  color: #aaa;
  border-bottom: 1px solid #eee;
  padding: 0.4em 0;
  font-size: 80%;
  font-weight: 500;
  letter-spacing: 0.1em;
}

.pagination {
  text-align: center;
  padding: 1em 0;
}

.pagination a[disabled] {
  color: #ccc;
  text-decoration: none;
}

.pagination :global(.pure-menu) a:hover, .pagination :global(.pure-menu) a:focus {
  background: none;
}
</style>
<div>
<h1 class="content-subhead">Recent Posts</h1>
<slot />
</div>
`

class PostListPage extends window.HTMLElement {
  constructor () {
    super()
    this.attachShadow({mode: 'open'})
  }

  connectedCallback () {
    render(template(this), this.shadowRoot)
  }
}

window.customElements.define('blog-post-list-page', PostListPage)
