import { ContentfulService } from './../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ContentfulService: ContentfulService) { }

  blogPost$: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.blogPost$ = this.ContentfulService.getEntryById(id);
      }
    );
  }

}
