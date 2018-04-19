import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  newQuote: any;
  error: any;
  author: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}


  ngOnInit() {
    this.newQuote = {quote:""}
    this.author = this._httpService.selected
  }

  createQuoteButton(){
    console.log("Create Quote button")
    console.log(this.newQuote)
    let obs = this._httpService.addQuote(this.newQuote);
    obs.subscribe(data =>{
      if((data as any).message =="Error"){
        this.error = "Quote needs to be at least 3 characters"
      }
      else{
        this._router.navigate(['/quotes/'+ this.author._id])
      }
      console.log(data)
    })
  }
  cancelButton(){
  	this._router.navigate(['/all'])
  }
}
