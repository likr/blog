import React from 'react'
import Head from 'next/head'
import {getPost} from '../utils/wp'
import styles from '../styles/post-detail'

export default class extends React.Component {
  static async getInitialProps ({query}) {
    const post = await getPost(query.postId)
    return {
      post
    }
  }

  render () {
    const {post} = this.props
    const origin = 'https://blog.likr-lab.com'
    const url = `${origin}${this.props.url.asPath}`
    const title = `${post.title.rendered} - likr's blog`
    return <div>
      <Head>
        <title>{title}</title>
        <meta name='twitter:title' content={title} />
        <meta property='og:title' content={title} />
        <meta property='og:url' content={url} />
      </Head>
      <style jsx>{styles}</style>
      <section className='post'>
        <header className='postHeader'>
          <h2 className='postTitle' dangerouslySetInnerHTML={{__html: post.title.rendered}} />
          <p className='postMeta'>
            Categories: {Object.keys(post.categories).map((key) => {
              const category = post.categories[key]
              return <a key={key} className='postCategory' href={category.link}>{category.name}</a>
            })}
          </p>
        </header>
        <div className='postDescription' dangerouslySetInnerHTML={{__html: post.content.rendered}} />
      </section>
    </div>
  }
}
