import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {getPosts} from '../utils/wp'
import styles from '../styles/post-list'

export default class extends React.Component {
  static async getInitialProps () {
    const posts = await getPosts()
    return {
      posts
    }
  }

  render () {
    const {posts} = this.props
    const origin = 'https://blog.likr-lab.com'
    const url = `${origin}${this.props.url.asPath}`
    const title = `Recent Posts - likr's blog`
    return <div>
      <Head>
        <title>{title}</title>
        <meta name='twitter:title' content={title} />
        <meta property='og:title' content={title} />
        <meta property='og:url' content={url} />
      </Head>
      <style jsx>{styles}</style>
      <div className={posts}>
        <h1 className='contentSubhead'>Recent Posts</h1>
        {posts.map((post) => {
          return <section key={post.id} className='post'>
            <header className='postHeader'>
              <h2 className='postTitle'>
                <Link as={`/posts/${post.id}`} href={`/post-detail?postId=${post.id}`}>
                  <a dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                </Link>
              </h2>
              <p className='postMeta'>
                Categories: {Object.keys(post.categories).map((key) => {
                  const category = post.categories[key]
                  return <a key={key} className='postCategory' href={category.link}>{category.name}</a>
                })}
              </p>
            </header>
            <div className='postDescription' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
          </section>
        })}
        <div className='pagination'>
          <div className='pure-menu pure-menu-horizontal'>
            <ul />
          </div>
        </div>
      </div>
    </div>
  }
}
