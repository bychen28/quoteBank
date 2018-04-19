import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view-quote',
  templateUrl: './view-quote.component.html',
  styleUrls: ['./view-quote.component.css']
})
export class ViewQuoteComponent implements OnInit {
  author: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    console.log(this._httpService.selected)

    this.author = this._httpService.selected
  }

}
