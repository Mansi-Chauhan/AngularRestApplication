import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestangularService';

  constructor(private arg1: TestService , private http: HttpClient){
    arg1.printToConsole("running");

    
  }

  ngOnInit(){

    let obs = this.http.get("https://api.github.com/users/Mansi-Chauhan");
    obs.subscribe((response)=>console.log(response));
  }
  

  
  
  
}
