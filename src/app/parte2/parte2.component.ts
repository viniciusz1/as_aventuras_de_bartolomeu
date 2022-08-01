import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-parte2',
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.css']
})
export class Parte2Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  vida = 120;
  ganhou = false;

  ngOnInit(): void {
  }

  ClickDragao() {
    if (this.vida > 0) {
      this.vida = this.vida - 1;
    } else {
      this.ganhou = true;
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 10000)
    }
  }

}
