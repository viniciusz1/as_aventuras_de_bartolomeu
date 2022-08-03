import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-parte3',
  templateUrl: './parte3.component.html',
  styleUrls: ['./parte3.component.css'],
})
export class Parte3Component implements OnInit {
  constructor(private router: Router,
    private appService: AppService,
    private localStorageService: LocalStorageService) {
    appService.keydown()
    .subscribe((e) => {
      this.onKeyDown(e);
    })
  }

  ganhou = 0;
  vida = 20;

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
    this.repeat()
  }

  

  fim = 200;
  repeat() {
    setInterval(() => {
      this.fim--;
      console.log(this.fim)
    }, 100);
  }

  ClickDragao() {
    if (this.vida > 0) {
      this.vida = this.vida - 1;
    } else {
      this.ganhou = 1;
      this.localStorageService.set('nivel-3', 20 - (this.fim/10))
      this.localStorageService.setRanking()
      setTimeout(() => {
        // this.router.navigate(['/']);
      }, 10000)
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
