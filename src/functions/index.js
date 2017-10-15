const functions = require('firebase-functions')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev, conf: {distDir: 'next'}})
const handle = app.getRequestHandler()

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl)
  return app.prepare().then(() => {
    return handle(req, res)
    // const server = express()

    // server.get('/', (req, res) => {
    //   res.redirect('/posts')
    // })

    // server.get('/posts', (req, res) => {
    //   app.render(req, res, '/post-list')
    // })

    // server.get('/posts/:postId', (req, res) => {
    //   app.render(req, res, '/post-detail', {
    //     postId: req.params.postId
    //   })
    // })

    // server.get('*', (req, res) => {
    //   return handle(req, res)
    // })

    // server(req, res)
  })
})
