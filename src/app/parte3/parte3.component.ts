import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parte3',
  templateUrl: './parte3.component.html',
  styleUrls: ['./parte3.component.css']
})
export class Parte3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.repeat();
  }

fim = 20;
repeat(){
  if (this.fim < 0) return
  var meuInterval = setInterval(() => {
    this.fim --;
    if(this.fim <= 0){
      clearInterval(meuInterval);
    }
  }, 1000);
}


}
