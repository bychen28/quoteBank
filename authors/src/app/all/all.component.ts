import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
 authors: [any]
  constructor(private _httpService: HttpService,private _router: Router,private _route: ActivatedRoute){}

  ngOnInit() {
    this.getAuthors();
  }
getAuthors(){ 
  let obs = this._httpService.getAuthors();
  obs.subscribe(data => this.authors = (data as any).data)
}
deleteAuthor(author){
  let obs = this._httpService.deleteAuthor(author);
  obs.subscribe(data =>{
    console.log(data)
    this.getAuthors();
  })
}
addAuthor(){
  this._router.navigate(['/new']);
}
editAuthor(author){
  console.log(author)
  this._httpService.selected = author
  this._router.navigate(['/edit']);
}
viewQuote(author){
  console.log(author)
  this._httpService.viewQuote(author)
  this._router.navigate(['/viewQuote/'+ author._id]);
}
}
