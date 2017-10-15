import Document, {Head, Main, NextScript} from 'next/document'
import Link from 'next/link'
import flush from 'styled-jsx/server'
import globalStyles from '../styles/global'
import appStyles from '../styles/app'

export default class MyDocument extends Document {
  static getInitialProps ({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return {html, head, errorHtml, chunks, styles}
  }

  render () {
    const description = 'おのうえさんのブログです。'
    return (
      <html lang='ja'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='theme-color' content='#3e4f5d' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@_likr' />
          <meta name='twitter:description' content={description} />
          <meta property='og:type' content='blog' />
          <meta property='og:image' content='https://blog.likr-lab.com/static/media.png' />
          <meta property='og:site_name' content={`likr's blog`} />
          <meta property='og:description' content={description} />
          <link rel='icon' type='image/x-icon' href='/static/icon128.png' />
          <link rel='manifest' href='/static/manifest.json' />
        </Head>
        <body>
          <style global jsx>{globalStyles}</style>
          <style jsx>{appStyles}</style>
          <div className={`pure-u-1 pure-u-md-1-4 sidebar`}>
            <div className='header'>
              <h1 className='brandTitle'>
                <Link as='/posts' href='/post-list'>
                  <a>likr's blog</a>
                </Link>
              </h1>
              <h2 className='brandTagline'>blog using WP.com API</h2>
              <nav>
                <ul className='navList'>
                  <li className='navItem'>
                    <a className='pure-button' href='https://developer.wordpress.com/docs/api/'>WP.com API</a>
                  </li> <li className='navItem'>
                    <a className='pure-button' href='https://facebook.github.io/react/'>React</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={`pure-u-1 pure-u-md-3-4 content`}>
            <Main />
            <div className='footer'>
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
          <NextScript />
        </body>
      </html>
    )
  }
}
