import http from 'http'
import jsdom from 'jsdom'
import url from 'url'
import 'isomorphic-fetch'
import {render} from './vendor/lit-html'
import {router} from './router'

const hostname = '127.0.0.1'
const port = 3000

jsdom.JSDOM.fromFile('./public/index.html').then((indexHtml) => {
  global.window = indexHtml.window
  global.document = indexHtml.window.document
  global.Node = indexHtml.window.Node
  global.Text = indexHtml.window.Text
  global.URLSearchParams = url.URLSearchParams
  document.createRange = () => {
    return {
      setStartBefore: () => {},
      setStart: () => {},
      setStartAfter: () => {},
      setEndBefore: () => {},
      setEnd: () => {},
      setEndAfter: () => {},
      getBoundingClientRect: () => ({}),
      extractContents: () => ({}),
      deleteContents: () => {},
      detach: () => {}
    }
  }

  console.log(document.createRange)

  const server = http.createServer((req, res) => {
    console.log(req.url)
    router.resolve(req.url).then((page) => {
      console.log(page)
      render(page, document.getElementById('content'))
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(document.documentElement.outerHTML)
    })
  })

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })
})

process.on('unhandledRejection', console.dir)
