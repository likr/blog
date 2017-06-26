import React from 'react'
import Helmet from 'react-helmet'

export const Head = ({subTitle}) => {
  const baseTitle = 'likr\'s blog'
  const title = subTitle ? `${subTitle} - ${baseTitle}` : baseTitle
  const description = 'おのうえさんのブログです。'
  const url = window.location.toString()
  return <Helmet
    title={title}
    meta={[
      {'name': 'twitter:card', 'content': 'summary'},
      {'name': 'twitter:site', 'content': '@_likr'},
      {'name': 'twitter:title', 'content': title},
      {'name': 'twitter:description', 'content': description},
      {'property': 'og:title', 'content': title},
      {'property': 'og:type', 'content': 'blog'},
      {'property': 'og:url', 'content': url},
      {'property': 'og:image', 'content': 'https://blog.likr-lab.com/media.png'},
      {'property': 'og:site_name', 'content': baseTitle},
      {'property': 'og:description', 'content': description}
    ]}
  />
}
