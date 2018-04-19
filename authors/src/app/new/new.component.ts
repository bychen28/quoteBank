import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  error: string;
  newAuthorInput: {"createAuthor:"};

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) {}


  ngOnInit() {
    
  }
createAuthorButton(){
 let obs = this._httpService.createAuthor(this.newAuthorInput)
 obs.subscribe(data =>{
   console.log(data)
   if((data as any).message == "Added Author"){
    this._router.navigate(['/all'])
  }
  else{
    
    this.error = "Name must be at least 3 characters"
    console.log(this.error)
  }
})
}
}
