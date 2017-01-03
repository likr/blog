import React from 'react'
import {Link} from 'react-router'
import {getPosts} from './wp'
import {renderered} from './prerender'
import {Head} from './head'
import styles from './post-list.css'

export class PostList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    getPosts().then(({posts}) => {
      this.setState({
        posts
      }, () => {
        renderered()
      })
    })
  }

  render () {
    const {posts} = this.state
    return <div className={styles.posts}>
      <Head subTitle='Recent Posts' />
      <h1 className={styles.contentSubhead}>Recent Posts</h1>
      {posts.map((post) => {
        return <section key={post.ID} className={styles.post}>
          <header className={styles.postHeader}>
            <img className={styles.postAvatar} alt={`${post.author.name}'s avatar`} height='48' width='48' src={post.author.avatar_URL} />
            <h2 className={styles.postTitle}>
              <Link to={`/posts/${post.ID}`} dangerouslySetInnerHTML={{__html: post.title}} />
            </h2>
            <p className={styles.postMeta}>
              By <a className={styles.postAuthor} href={post.author.profile_URL}>{post.author.name}</a> under {Object.keys(post.categories).map((key) => {
                const category = post.categories[key]
                return <a key={key} className={styles.postCategory} href={category.meta.links.self}>{category.name}</a>
              })}
            </p>
          </header>
          <div className={styles.postDescription} dangerouslySetInnerHTML={{__html: post.excerpt}} />
        </section>
      })}
      <div className={styles.pagination}>
        <div className='pure-menu pure-menu-horizontal'>
          <ul />
        </div>
      </div>
    </div>
  }
}
