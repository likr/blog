import React from 'react'
import {Link} from 'react-router'
import styles from './app.css'

export const App = ({children}) => {
  return <div className={`pure-g ${styles.layout}`}>
    <div className={`pure-u-1 pure-u-md-1-4 ${styles.sidebar}`}>
      <div className={styles.header}>
        <h1 className={styles.brandTitle}>
          <Link to='/posts'>likr's blog</Link>
        </h1>
        <h2 className={styles.brandTagline}>blog using WP.com API</h2>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a className='pure-button' href='https://developer.wordpress.com/docs/api/'>WP.com API</a>
            </li> <li className={styles.navItem}>
              <a className='pure-button' href='https://facebook.github.io/react/'>React</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div className={`pure-u-1 pure-u-md-3-4 ${styles.content}`}>
      {children}
      <div className={styles.footer}>
        <div className='pure-menu pure-menu-horizontal'>
          <ul>
            <li className='pure-menu-item'>
              <a href='http://likr.github.io/' className='pure-menu-link'>About</a>
            </li>
            <li className='pure-menu-item'>
              <a href='http://twitter.com/_likr/' className='pure-menu-link'>Twitter</a>
            </li>
            <li className='pure-menu-item'>
              <a href='http://github.com/likr/blog' className='pure-menu-link'>GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}
