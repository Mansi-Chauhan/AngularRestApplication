import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ciew-comp',
  templateUrl: './ciew-comp.component.html',
  styleUrls: ['./ciew-comp.component.css']
})
export class CiewCompComponent implements OnInit {

  username: string = "Mansi" ;
  response: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  search(){
    this.http.get("https://api.github.com/users/"+this.username).subscribe((response)=>this.response=response);
  }

}
