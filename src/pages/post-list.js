import {getPosts} from '../wp.js'

const template = (posts) => `
<blog-post-list-page>
${
  posts
    .map((post) => {
      return `
        <blog-post-item>
        <blog-link slot="title" href="/posts/${post.id}">${post.title}</blog-link>
        ${
          post.categories
            .map((category) => {
              return `<a slot="category">${category.name}</a>`
            })
            .join('')
        }
        <span>${post.content}</span>
        </blog-post-item>
      `
    })
    .join('')
}
</blog-post-list-page>
`

export const postList = () => {
  return getPosts().then((posts) => {
    return template(posts)
  })
}
