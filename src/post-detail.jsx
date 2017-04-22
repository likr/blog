import React from 'react'
import {getPost} from './wp'
import {renderered} from './prerender'
import {Head} from './head'
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
      }, () => {
        renderered()
      })
    })
  }

  render () {
    const {post} = this.state
    if (post == null) {
      return <div />
    }
    return <section className={styles.post}>
      <Head subTitle={post.title} />
      <header className={styles.postHeader}>
        <h2 className={styles.postTitle} dangerouslySetInnerHTML={{__html: post.title.rendered}} />
        <p className={styles.postMeta}>
          Categories: {Object.keys(post.categories).map((key) => {
            const category = post.categories[key]
            return <a key={key} className={styles.postCategory} href={category.link}>{category.name}</a>
          })}
        </p>
      </header>
      <div className={styles.postDescription} dangerouslySetInnerHTML={{__html: post.content.rendered}} />
    </section>
  }
}
