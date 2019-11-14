import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    { title: "hello1", thought: "world" },
    { title: "hello2", thought: "world" },
    { title: "hello3", thought: "world" }
  ];
  show: boolean = false;
  constructor() {}
  onDelete(index: number): void {
    this.posts.splice(index, 1);
  }
  onSubmit(newEntry: Post): void {
    this.posts.unshift(newEntry);
  }
  toggleForm() {
    this.show = !this.show;
  }
  ngOnInit() {}
}
