import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-parte3',
  templateUrl: './parte3.component.html',
  styleUrls: ['./parte3.component.css'],
})
export class Parte3Component implements OnInit {
  constructor(private router: Router,
    private appService: AppService) {
    appService.keydown()
    .subscribe((e) => {
      this.onKeyDown(e);
    })
  }

  ganhou = 0;
  vida = 120;
  fim = 20;

  //Arrumar timer para verificar se o jogador ganhou




  ngOnInit(): void {
    // this.repeat();
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

    // this.personagem = document.getElementsByClassName('personagem').item
  }

  repeat() {
    if (this.fim < 0) return;
    else {
      var meuInterval = setInterval(() => {
        this.fim--;
        if (this.fim <= 0) {
          clearInterval(meuInterval);
        }
      }, 1000);
    }
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

  left = 0;
  onKeyDown(tecla: KeyboardEvent){
    if(this.left < 800){
      if(tecla.key == 'ArrowRight'){
        this.left = this.left + 10
      }
      if(tecla.key == 'ArrowLeft'){
        this.left = this.left - 10
      }
    }else{
      if(this.vida == 0)
        if(tecla.key == 'ArrowRight'){
          this.left = this.left + 10
        }
        if(tecla.key == 'ArrowLeft'){
          this.left = this.left - 10
        }
        if(this.left > 1150){
          this.router.navigate(['/nivel-3'])
      }
    }
  }
}
