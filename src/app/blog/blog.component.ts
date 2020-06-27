import { Component, OnInit } from '@angular/core';
import { post } from '../blogPosts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
  blogPosts= post

  constructor() { }

  ngOnInit(): void {
  }

}
