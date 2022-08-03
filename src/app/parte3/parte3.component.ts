import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { LocalStorageService } from '../local-storage.service';
import Swal from 'sweetalert2';

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
  vida = 5;

  //Arrumar timer para verificar se o jogador ganhou




  ngOnInit(): void {
    // this.repeat();
    setTimeout(() => {
      if (this.vida == 0) {
        this.ganhou = 1;
        
      } else {
        this.ganhou = 2;
        Swal.fire({
          title: 'GAME OVER!',
          width: 600,
          padding: '3em',
          color: '#FFF',
          background: 'transparent',
          confirmButtonText: "Voltar",
          confirmButtonColor: "#9f1b1b"
        }).then(
          (e) => {
            if(e){
              this.router.navigate(['/'])
            }
          }
        )
      }
    }, 20000);
    this.repeat()
  }

  

  fim = 200;
  repeat() {
    setInterval(() => {
      this.fim--;
    }, 100);
  }

  ClickDragao() {
    if (this.vida > 0) {
      this.vida = this.vida - 1;
    } else {
      this.ganhou = 1;
      this.localStorageService.set('nivel-2', 20 - (this.fim/10))
      this.localStorageService.setRanking()
      Swal.fire({
        title: 'VOCÊ GANHOU! PARABÉNS!!',
        width: 600,
        padding: '3em',
        color: '#FFF',
        background: 'transparent',
        confirmButtonText: "Voltar",
        confirmButtonColor: "green"
      }).then(
        (e) => {
          if(e){
            this.router.navigate(['/'])
          }
        }
      )
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
