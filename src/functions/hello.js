/* global fetch */

import 'isomorphic-fetch'

const request = (query) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({query}),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('https://api.graphcms.com/simple/v1/cjef06x4m1wwt0193pf1iknmx', options)
    .then((response) => response.json())
}

const getPosts = () => {
  const query = `
    query {
      allPosts (orderBy: updatedAt_DESC) {
        id,
        title,
        content,
        categories {
          id,
          name
        }
      }
    }
  `
  return request(query)
}

const getPost = (id) => {
  const query = `
    query {
      Post (id: "${id}") {
        id,
        title,
        content,
        categories {
          id,
          name
        }
      }
    }
  `
  return request(query)
}

export const handler = (event, context, callback) => {
  // res.set('Access-Control-Allow-Origin', '*')
  // res.set('Access-Control-Allow-Methods', 'GET, POST')
  console.log(event)
  switch (event.queryStringParameters.action) {
    case 'getPosts':
      getPosts()
        .then((response) => {
          callback(null, {
            statusCode: 200,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(response)
          })
        })
      break
    case 'getPost':
      getPost(req.query.postId)
        .then(({data}) => {
          res.json(data.Post)
        })
      break
    default:
      // res.status(400).send('Bad Request')
  }
}

