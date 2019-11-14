import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;
  // defining the event that is sparked by the click that the parent is listening for
  @Output()
  deleted = new EventEmitter<void>();
  constructor() {}
  // methods go below constructor
  deletePost() {
    this.deleted.emit();
  }
  ngOnInit() {}
}
