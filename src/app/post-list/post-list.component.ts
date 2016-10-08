import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { WpService } from '../wp.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = []
  page = 1
  totalPages = 1

  constructor(private route: ActivatedRoute, private wpService: WpService) {
  }

  ngOnInit () {
    this.route.params.forEach((params) => {
      this.page = +params['page'] || 1
      this.wpService.getPosts()
        .then((posts) => {
          this.page = posts.page
          this.totalPages = posts.totalPages
          this.posts = posts.data
        })
    })
  }
}
