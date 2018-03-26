require('isomorphic-fetch')
const {router} = require('./router.js')

router.resolve('/posts').then((page) => {
  console.log(`
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#3e4f5d">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@_likr'">
    <meta name="twitter:title" content="likr's blog">
    <meta name="twitter:description" content="d">
    <meta property="og:title" content="likr's blog">
    <meta property="og:type" content="blog">
    <meta property="og:url" content="おのうえさんのブログです。">
    <meta property="og:image" content="https://blog.likr-lab.com/media.png'">
    <meta property="og:site_name" content="likr's blog">
    <meta property="og:description" content="おのうえさんのブログです。">
    <title>likr's blog</title>
    <link rel="icon" type="image/x-icon" href="/icon128.png">
    <script async type="module" src="/bundle.js"></script>
    <script async type="module" src="/components/blog-post-item.js"></script>
    <script async type="module" src="/components/blog-post-list-page.js"></script>
    <script async type="module" src="/components/blog-post-detail-page.js"></script>
    <script async type="module" src="/components/blog-link.js"></script>
    <style>
/*!
Pure v1.0.0
Copyright 2013 Yahoo!
Licensed under the BSD License.
https://github.com/yahoo/pure/blob/master/LICENSE.md
*/
/*!
normalize.css v^3.0 | MIT License | git.io/normalize
Copyright (c) Nicolas Gallagher and Jonathan Neal
*/
    </style>
    <style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: rgb(61, 146, 201);
}

a:hover, a:focus {
  text-decoration: underline;
}

h3 {
  font-weight: 100;
}

.layout {
  padding: 0;
}

.header {
  text-align: center;
  top: auto;
  margin: 3em auto;
}

.sidebar {
  background: rgb(61, 79, 93);
  color: #fff;
}

.brandTitle, .brandTagline {
  margin: 0;
}

.brandTitle {
  text-transform: uppercase;
}

.brandTitle a {
  color: white;
}

.brandTagline {
  font-weight: 300;
  color: rgb(176, 202, 219);
}

.navList {
  margin: 0;
  padding: 0;
  list-style: none;
}

.navItem {
  display: inline-block;
  display: inline;
  zoom: 1;
}

.navItem a {
  background: transparent;
  border: 2px solid rgb(176, 202, 219);
  color: #fff;
  margin-top: 1em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 85%;
}

.navItem a:hover, .navItem a:focus {
  border: 2px solid rgb(61, 146, 201);
  text-decoration: none;
}

.content {
  padding: 2em 1em 0;
}

.footer {
  text-align: center;
  padding: 1em 0;
}

.footer a {
  color: #ccc;
  font-size: 80%;
}

.footer :global(.pure-menu) a:hover, .footer :global(.pure-menu) a:focus {
  background: none;
}

@media (min-width: 48em) {
  .content {
    padding: 2em 3em 0;
    margin-left: 25%;
  }

  .header {
    margin: 80% 2em 0;
    text-align: right;
  }

  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
  }
}
    </style>
    <link rel="manifest" href="/manifest.json">
    <script>
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-12701994-5', 'auto');
ga('send', 'pageview');
    </script>
    <script async src='https://www.google-analytics.com/analytics.js'></script>
  </head>
  <body>
    <div class="pure-g layout"}>
      <div class="pure-u-1 pure-u-md-1-4 sidebar">
        <div class="header">
          <h1 class="brandTitle">
            <blog-link href="/posts">likr's blog</blog-link>
          </h1>
          <h2 class="brandTagline">blog using WP.com API</h2>
          <nav>
            <ul class="navList">
              <li class="navItem">
                <a class="pure-button" href="https://developer.wordpress.com/docs/api/">WP.com API</a>
              </li> <li class="navItem">
                <a class="pure-button" href="https://facebook.github.io/react/">React</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="pure-u-1 pure-u-md-3-4 content">
        <div id="content">${page}</div>
        <div class="footer">
          <div class="pure-menu pure-menu-horizontal">
            <ul>
              <li class="pure-menu-item">
                <a href="http://likr.github.io/" class="pure-menu-link">About</a>
              </li>
              <li class="pure-menu-item">
                <a href="http://twitter.com/_likr/" class="pure-menu-link">Twitter</a>
              </li>
              <li class="pure-menu-item">
                <a href="http://github.com/likr/blog" class="pure-menu-link">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
  `)
})