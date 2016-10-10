import React from 'react'
import {getPost} from './wp'
import styles from './post-detail.css'

export class PostDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post: null
    }
  }

  componentDidMount () {
    getPost(this.props.params.postId).then((post) => {
      this.setState({
        post
      })
    })
  }

  render () {
    const {post} = this.state
    if (post == null) {
      return <div />
    }
    return <section className={styles.post}>
      <header className={styles.postHeader}>
        <img className={styles.postAvatar} alt={`${post.author.name}'s avatar`} height='48' width='48' src={post.author.avatar_URL} />
        <h2 className={styles.postTitle} dangerouslySetInnerHTML={{__html: post.title}} />
        <p className={styles.postMeta}>
          By <a className={styles.postAuthor} href={post.author.profile_URL}>{post.author.name}</a> under {Object.keys(post.categories).map((key) => {
            const category = post.categories[key]
            return <a key={key} className={styles.postCategory} href={category.meta.links.self}>{category.name}</a>
          })}
        </p>
      </header>
      <div className={styles.postDescription} dangerouslySetInnerHTML={{__html: post.content}} />
    </section>
  }
}
