import {html} from '../vendor/lit-html'
import {repeat} from '../vendor/lib/repeat'
import {unsafeHTML} from '../vendor/lib/unsafe-html'
import {getPosts} from '../wp'

const template = (posts) => html`
<blog-post-list-page>
${repeat(posts, (post) => post.id, (post) => html`<blog-post-item>
<blog-link slot="title" href="/posts/${post.id}">${unsafeHTML(post.title.rendered)}</blog-link>
${repeat(Object.keys(post.categories), (key) => key, (key) => {
  const category = post.categories[key]
  return html`<a slot="category" href="${category.link}">${category.name}</a>`
})}
<span>${unsafeHTML(post.excerpt.rendered)}</span>
</blog-post-item>`)}
</blog-post-list-page>
`

export const postList = () => {
  return getPosts().then((posts) => template(posts))
}
