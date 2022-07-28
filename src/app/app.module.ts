import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Cenario1Component } from './cenario1/cenario1.component';
import { MenuComponent } from './menu/menu.component';
import { Cenario2Component } from './cenario2/cenario2.component';
import { Parte1Component } from './parte1/parte1.component';
import { Parte2Component } from './parte2/parte2.component';

@NgModule({
  declarations: [
    AppComponent,
    Cenario1Component,
    MenuComponent,
    Cenario2Component,
    Parte1Component,
    Parte2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
