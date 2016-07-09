const angular = require('angular')
const querystring = require('querystring')

const defaultPage = 1
const defaultPerPage = 10

const uniqueIds = (seq, attr) => {
  const ids = new Set()
  for (const item of seq) {
    for (const id of item[attr]) {
      ids.add(id)
    }
  }
  return Array.from(ids)
}

const makeMap = (seq, key) => {
  const map = new Map()
  for (const item of seq) {
    map.set(item[key], item)
  }
  return map
}

const parsePostOptions = (arg) => {
  const options = Object.assign({}, arg)
  const includeAuthors = options.includeAuthors
  const includeCategories = options.includeCategories
  const includeTags = options.includeTags
  delete options.includeAuthors
  delete options.includeCategories
  delete options.includeTags
  return {
    options,
    includeAuthors,
    includeCategories,
    includeTags
  }
}

const wrap = (f, obj, attr) => {
  obj[attr] = f(obj[attr])
}

class WpService {
  constructor ($q, $http, $sce) {
    this.endpoint = 'http://api.wp-app.org/wp-json/wp/v2'
    this.$q = $q
    this.$http = $http
    this.$sce = $sce
  }

  getPost (id, arg) {
    const {options, includeAuthors, includeCategories, includeTags} = parsePostOptions(arg)
    return this.request(`posts/${id}`, options, false)
      .then((post) => {
        this.sanitizePost(post)
        const promises = []
        if (includeAuthors) {
          promises.push(this.resolveAuthors([post]))
        }
        if (includeCategories) {
          promises.push(this.resolveCategories([post]))
        }
        if (includeTags) {
          promises.push(this.resolveTags([post]))
        }
        return this.$q.all(promises).then(() => post)
      })
  }

  getPosts (arg) {
    const {options, includeAuthors, includeCategories, includeTags} = parsePostOptions(arg)
    return this.request('posts', options, true)
      .then((posts) => {
        for (const post of posts.data) {
          this.sanitizePost(post)
        }
        const promises = []
        if (includeAuthors) {
          promises.push(this.resolveAuthors(posts.data))
        }
        if (includeCategories) {
          promises.push(this.resolveCategories(posts.data))
        }
        if (includeTags) {
          promises.push(this.resolveTags(posts.data))
        }
        return this.$q.all(promises).then(() => posts)
      })
  }

  getCategory (id, options) {
    return this.request(`categories/${id}`, options)
      .then((category) => {
        this.sanitizeCategory(category)
        return category
      })
  }

  getCategories (options) {
    return this.request('categories', options, true)
      .then((categories) => {
        for (const category of categories.data) {
          this.sanitizeCategory(category)
        }
        return categories
      })
  }

  getTag (id, options) {
    return this.request(`tags/${id}`, options)
      .then((tag) => {
        this.sanitizeTag(tag)
        return tag
      })
  }

  getTags (options) {
    return this.request('tags', options, true)
      .then((tags) => {
        for (const tag of tags.data) {
          this.sanitizeTag(tag)
        }
        return tags
      })
  }

  getUser (id, options) {
    return this.request(`users/${id}`, options)
      .then((user) => {
        this.sanitizeUser(user)
        return user
      })
  }

  getUsers (options) {
    return this.request('users', options, true)
      .then((users) => {
        for (const user of users.data) {
          this.sanitizeUser(user)
        }
        return users
      })
  }

  request (path, options = {}, sequence = false) {
    const query = querystring.stringify(options)
    return this.$http.get(`${this.endpoint}/${path}?${query}`)
      .then((response) => {
        if (sequence) {
          return {
            data: response.data,
            page: options.page || defaultPage,
            perPage: options.per_page || defaultPerPage,
            total: response.headers('x-wp-total'),
            totalPages: response.headers('x-wp-totalpages')
          }
        } else {
          return response.data
        }
      })
  }

  sanitizePost (post) {
    wrap(this.$sce.trustAsHtml, post.content, 'rendered')
    wrap(this.$sce.trustAsHtml, post.excerpt, 'rendered')
    wrap(this.$sce.trustAsHtml, post.guid, 'rendered')
    wrap(this.$sce.trustAsHtml, post.title, 'rendered')
    wrap(this.$sce.trustAsUrl, post, 'link')
  }

  sanitizeUser (user) {
    wrap(this.$sce.trustAsUrl, user.avatar_urls, '24')
    wrap(this.$sce.trustAsUrl, user.avatar_urls, '48')
    wrap(this.$sce.trustAsUrl, user.avatar_urls, '96')
    wrap(this.$sce.trustAsUrl, user, 'link')
    wrap(this.$sce.trustAsUrl, user, 'url')
  }

  sanitizeCategory (category) {
    wrap(this.$sce.trustAsUrl, category, 'link')
  }

  sanitizeTag (tag) {
    wrap(this.$sce.trustAsUrl, tag, 'link')
  }

  resolveAuthors (posts) {
    const ids = Array.from(new Set(posts.map((post) => post.author)))
    return this.getUsers({per_page: ids.length, include: ids.join(',')})
      .then((users) => {
        const userMap = makeMap(users.data, 'id')
        for (const post of posts) {
          post.author = userMap.get(post.author)
        }
      })
  }

  resolveCategories (posts) {
    const ids = uniqueIds(posts, 'categories')
    return this.getCategories({per_page: ids.length, include: ids.join(',')})
      .then((categories) => {
        const categoryMap = makeMap(categories.data, 'id')
        for (const post of posts) {
          post.categories = post.categories.map((id) => categoryMap.get(id))
        }
      })
  }

  resolveTags (posts) {
    const ids = uniqueIds(posts, 'tags')
    return this.getTags({per_page: ids.length, include: ids.join(',')})
      .then((tags) => {
        const tagMap = makeMap(tags.data, 'id')
        for (const post of posts) {
          post.tags = post.tags.map((id) => tagMap.get(id))
        }
      })
  }
}

WpService.$inject = ['$q', '$http', '$sce']

module.exports = angular
  .module('app.services.wp', [])
  .service('WpService', WpService)
  .name
