import UniversalRouter from 'universal-router'
import {postList} from './pages/post-list.js'
import {postDetail} from './pages/post-list.js'

export const router = new UniversalRouter([
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
