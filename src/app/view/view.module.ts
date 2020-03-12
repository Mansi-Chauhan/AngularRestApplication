import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiewCompComponent } from './ciew-comp/ciew-comp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CiewCompComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CiewCompComponent
  ]
  
})
export class ViewModule { }
