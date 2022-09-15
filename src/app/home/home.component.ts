import { ContentfulService } from './../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ContentfulService: ContentfulService) { }

  blogPosts$ : Observable<any> | undefined;


  ngOnInit(): void {
    this.blogPosts$ = this.ContentfulService.getAllEntries();
  }

}
