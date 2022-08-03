import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-parte3',
  templateUrl: './parte3.component.html',
  styleUrls: ['./parte3.component.css'],
})
export class Parte3Component implements OnInit {
  constructor(private router: Router) {}

  ganhou = 0;
  vida = 120;

  ngOnInit(): void {
    this.repeat();
    setTimeout(() => {
      if (this.vida == 0) {
        this.ganhou = 1;
      } else {
        this.ganhou = 2;
      }
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
    }, 20000);
  }

  ClickDragao() {
    if (this.vida > 0) {
      this.vida = this.vida - 1;
    } else {
      this.ganhou = 1;
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 10000);
    }
  }

  fim = 20;
  repeat() {
    if (this.fim < 0) return;
    var meuInterval = setInterval(() => {
      this.fim--;
      if (this.fim <= 0) {
        clearInterval(meuInterval);
      }
    }, 1000);
  }
}
