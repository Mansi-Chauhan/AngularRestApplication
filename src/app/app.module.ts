import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestService } from './test.service'; //TYPSCRIPT IMPORT
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { CiewCompComponent } from './view/ciew-comp/ciew-comp.component';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViewModule
  ],
  providers: [ TestService,
               HttpClientModule ],                 //ANGULAR IMPORT
  bootstrap: [AppComponent]
})
export class AppModule {

 }
