import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Post } from "../interfaces/post";
import { format } from "url";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  newPost: Post = {
    title: "",
    thought: ""
  };
  @Output() submitted = new EventEmitter<Post>();
  constructor() {}
  submitPost() {
    this.submitted.emit(this.newPost);
    this.newPost.title = "";
    this.newPost.thought = "";
  }
  ngOnInit() {}
}
