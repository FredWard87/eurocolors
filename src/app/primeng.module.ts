import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';

const mdodulosPrime:any = [
  SidebarModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    mdodulosPrime
  ],
  exports:[
    mdodulosPrime
  ]
})
export class PrimengModule { }
