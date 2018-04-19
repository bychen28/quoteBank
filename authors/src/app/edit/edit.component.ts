import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author: any;
  error: string;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit() {
    console.log("hello edit page")
    this.author = this._httpService.selected
  }
  cancelButton(){
  	this._router.navigate(['/all'])
  }
  submitEdit(){
    console.log(this.author +"hit submit edit")
    let obs = this._httpService.editAuthor(this.author);
  	obs.subscribe(data => {
  		console.log(data)
  		if((data as any).message == "Success in Edit"){
  			this._router.navigate(['/all'])
  		}
  		else{
  			this.error = "Name must be at least 3 characters"
  		}
  	})
  }
}
