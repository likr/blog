import {html} from '../vendor/lit-html.js'
import {repeat} from '../vendor/lib/repeat.js'
import {unsafeHTML} from '../vendor/lib/unsafe-html.js'
import {getPost} from '../wp.js'

const template = (post) => html`
<blog-post-detail-page>
<blog-post-item>
${repeat(Object.keys(post.categories), (key) => key, (key) => {
  const category = post.categories[key]
  return html`<a slot="category" class="post-category" href="${category.link}">${category.name}</a>`
})}
<span slot="title">${unsafeHTML(post.title)}</span>
<span>${unsafeHTML(post.content)}</span>
</blog-post-item>
</blog-post-detail-page>
`

export const postDetail = (context) => {
  return getPost(context.params.postId).then((post) => template(post))
}
