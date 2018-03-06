import {html} from '../vendor/lit-html.js'
import {repeat} from '../vendor/lib/repeat.js'
import {unsafeHTML} from '../vendor/lib/unsafe-html.js'
import {getPosts} from '../wp.js'

const template = (posts) => html`
<blog-post-list-page>
${repeat(posts, (post) => post.ID, (post) => html`<blog-post-item>
<blog-link slot="title" href="/posts/${post.ID}">${unsafeHTML(post.title)}</blog-link>
${repeat(Object.keys(post.categories), (key) => key, (key) => {
  const category = post.categories[key]
  return html`<a slot="category" href="${category.link}">${category.name}</a>`
})}
<span>${unsafeHTML(post.excerpt)}</span>
</blog-post-item>`)}
</blog-post-list-page>
`

export const postList = () => {
  return getPosts().then(({posts}) => template(posts))
}
