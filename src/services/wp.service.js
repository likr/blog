const angular = require('angular')

class WpService {
  constructor ($http, $sce) {
    this.endpoint = 'https://public-api.wordpress.com/rest/v1.1/sites/ylikr.wordpress.com'
    this.$http = $http
    this.$sce = $sce
  }

  getPost (id) {
    const url = `${this.endpoint}/posts/${id}`
    return this.$http.get(url)
      .then((response) => {
        const post = response.data
        this.convertPost(post)
        return post
      })
  }

  getPosts () {
    const url = `${this.endpoint}/posts/`
    return this.$http.get(url)
      .then((response) => {
        console.log(response)
        const posts = response.data.posts
        for (const post of posts) {
          this.convertPost(post)
        }
        return {
          data: posts,
          page: 1,
          perPage: 10,
          total: 1,
          totalPages: 1
        }
      })
  }

  convertPost (post) {
    post.id = post.ID
    post.content = {
      rendered: this.$sce.trustAsHtml(post.content)
    }
    post.excerpt = {
      rendered: this.$sce.trustAsHtml(post.excerpt)
    }
    post.title = {
      rendered: this.$sce.trustAsHtml(post.title)
    }
    post.author.avatar_urls = {
      24: this.$sce.trustAsUrl(post.author.avatar_URL),
      48: this.$sce.trustAsUrl(post.author.avatar_URL),
      96: this.$sce.trustAsUrl(post.author.avatar_URL)
    }
  }
}

WpService.$inject = ['$http', '$sce']

module.exports = angular
  .module('app.services.wp', [])
  .service('WpService', WpService)
  .name
