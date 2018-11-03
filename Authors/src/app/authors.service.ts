import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private _http: HttpClient) { }

  getAllAuthors(){
    return this._http.get("/authors");
  }

  addAuthor(newauthor){
    return this._http.post("/authors", newauthor);
  }

  getAuthor(id) {
    return this._http.get("/authors/" + id);
  }

  editAuthor(id, edit) {
    return this._http.put("/authors/" + id, edit);
  }

  deleteAuthor(author) {
    return this._http.delete("/authors/" + author._id);
  }
}
