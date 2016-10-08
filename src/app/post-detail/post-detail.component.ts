import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { WpService } from '../wp.service'
import { Post } from '../post'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  private post = null

  constructor(private route: ActivatedRoute, private wpService: WpService) {
  }

  ngOnInit() {
    this.route.params.forEach((params) => {
      this.wpService.getPost(params['id'])
        .then((post) => {
          this.post = post
        })
    })
  }
}
