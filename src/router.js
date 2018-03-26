const UniversalRouter = require('universal-router')
const {postList} = require('./pages/post-list.js')
const {postDetail} = require('./pages/post-list.js')

exports.router = new UniversalRouter([
  {
    path: '',
    action: () => ({redirect: '/posts'})
  },
  {
    path: '/posts',
    children: [
      {
        path: '',
        action: postList
      },
      {
        path: '/:postId',
        action: postDetail
      }
    ]
  }
])
