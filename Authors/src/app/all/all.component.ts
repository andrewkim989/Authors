import { Component, OnInit } from '@angular/core';
import { AuthorsService } from "../authors.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  authors = [];

  constructor(
    private AuthorsService: AuthorsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    let t = this.AuthorsService.getAllAuthors();
    t.subscribe(data => {
      console.log("Got 'em all!", data);
      this.authors = data["authors"];
    })
  }

  editRedirect(author) {
    this.router.navigate(["/edit", author._id]);
  }

  deleteAuthor (author) {
    let deleted = this.AuthorsService.deleteAuthor(author);
    deleted.subscribe(
      data => console.log("Data deleted", data));
    this.getAuthors();
  }
}
