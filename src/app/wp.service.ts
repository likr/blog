import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { DomSanitizer } from '@angular/platform-browser'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class WpService {
  private endpoint = 'https://public-api.wordpress.com/rest/v1.1/sites/ylikr.wordpress.com'

  constructor (private http: Http, private sanitizer: DomSanitizer) {
  }

  getPost (id) {
    const url = `${this.endpoint}/posts/${id}`
    return this.http.get(url)
      .toPromise()
      .then((response) => response.json())
      .then((post) => {
        this.convertPost(post)
        return post
      })
  }

  getPosts () {
    const url = `${this.endpoint}/posts/`
    return this.http.get(url)
      .toPromise()
      .then((response) => response.json())
      .then((data) => {
        const posts = data.posts
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
      rendered: this.sanitizer.bypassSecurityTrustHtml(post.content)
    }
    post.excerpt = {
      rendered: this.sanitizer.bypassSecurityTrustHtml(post.excerpt)
    }
    post.title = {
      rendered: this.sanitizer.bypassSecurityTrustHtml(post.title)
    }
    post.author.avatar_urls = {
      24: this.sanitizer.bypassSecurityTrustUrl(post.author.avatar_URL),
      48: this.sanitizer.bypassSecurityTrustUrl(post.author.avatar_URL),
      96: this.sanitizer.bypassSecurityTrustUrl(post.author.avatar_URL)
    }
    post.categories = Object.keys(post.categories).map((key) => post.categories[key])
  }
}
