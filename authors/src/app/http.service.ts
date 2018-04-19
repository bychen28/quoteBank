import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  selected: any;
  
  constructor(private _http: HttpClient){}

  getAuthors(){
    return this._http.get('/authors')
  }
  createAuthor(newAuthor){
    return this._http.post('/author', {newAuthorKey: newAuthor})
  }

  deleteAuthor(author){
    return this._http.delete('/remove/' + author._id)
  }

  editAuthor(author){
    console.log(this.selected._id + " I AM THE EDIT ROUTE")
    return this._http.put('/author/edit/' + this.selected._id, {id: author._id, name: author.name})
  }
  viewQuote(author){
    // console.log(author + "I AM HERE") 
    this.selected = author  
  }
  addQuote(quote){
    return this._http.put('author/quote/' + this.selected._id, quote)
  }
  
}
