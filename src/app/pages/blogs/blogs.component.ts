import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: any = []
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getBlogs().subscribe((res: any) => {
      res.forEach((blog: any) => {
        this.blogs.push(blog);
      });
    })
  }

}
