import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { Parte3Component } from './parte3/parte3.component';
import { Parte2Component } from './parte2/parte2.component';
import { Parte1Component } from './parte1/parte1.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path:'',
        component: MenuComponent
      },
      {
        path:'nivel-3',
        component: Parte3Component
      },
      {
        path:'nivel-2',
        component: Parte2Component
      },
      {
        path:'nivel-1',
        component: Parte1Component
      },
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class RotasModule { }
