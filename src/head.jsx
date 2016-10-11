import React from 'react'
import Helmet from 'react-helmet'

export const Head = ({subTitle}) => {
  const baseTitle = 'likr\'s blog'
  const title = subTitle ? `${subTitle} - ${baseTitle}` : baseTitle
  return <Helmet meta={[
    {'name': 'twitter:card', 'content': 'summary'},
    {'name': 'twitter:site', 'content': '@_likr'},
    {'name': 'twitter:title', 'content': title},
    {'name': 'twitter:description', 'content': 'おのうえさんのブログです。'},
    {'property': 'og:title', 'content': title},
    {'property': 'og:type', 'content': 'blog'},
    {'property': 'og:image', 'content': 'media.png'},
    {'property': 'og:url', 'content': 'https://likr.github.io/blog'}
  ]} />
}
