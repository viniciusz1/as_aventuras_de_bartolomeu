import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-parte2',
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.css']
})
export class Parte2Component implements OnInit {

  constructor(
    private router: Router,
    private appService: AppService
  ) { 
    appService.keydown()
    .subscribe((e) => {
      console.log(e);
    })
  }

  vida = 120;
  ganhou = 0;
  tempo = 0;

  ngOnInit(): void {
    setTimeout(() => {
      if (this.vida == 0) {
        this.ganhou = 1
      } else {
        this.ganhou = 2
      }
    }, 20000)
  }

  ClickDragao() {
    if (this.vida > 0) {
      this.vida = this.vida - 1;
    } else {
      this.ganhou = 1;
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 10000)
    }
  }

}
