import UniversalRouter from 'universal-router'
import {postList} from './pages/post-list'
import {postDetail} from './pages/post-detail'

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
