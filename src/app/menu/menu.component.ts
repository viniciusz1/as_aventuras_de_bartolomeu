import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  click = 0;
  vida = 120;

  ngOnInit(): void {
  }

  aumentarClick() {
    this.click++;
    this.vida = this.vida-1
  }

  

}
