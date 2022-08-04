import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppService } from '../app.service';
import { LocalStorageService } from '../local-storage.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

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
  tela = true
  ganhou = 0;
  vida = 120;
  cachorro = false;
  // ngOnDestroy(): void {
  //   this.tela=false
  // }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.vida == 0) {
        this.ganhou = 1;
        
      } else {
        this.ganhou = 2;
        this.modalGameOver();
      }
    }, 20000);
    this.repeat()
    this.cachorro = this.localStorageService.get('alimentou')

  }

  fim = 200;

  timerTela = 200

  repeat() {
    setInterval(() => {
      this.timerTela = this.fim / 10
      this.fim--;
    }, 100)
  }
  coroa = false
  ClickDragao() {
    console.log(this.vida)
    let alimentou = this.localStorageService.get("alimentou")
    if (this.vida > 0) {
      if (alimentou == true) {
        this.vida = this.vida - 2;
      } else {
        this.vida = this.vida - 1;
      }
      if (this.vida <= 0) {
        this.ganhou = 1;
        var mexer = document.getElementById("principal");
        mexer?.classList.add("tremida")
        this.localStorageService.set('nivel-2', 20 - (this.fim/10))
        this.localStorageService.setRanking()
        this.coroa = true
      }
    }

  }

  left = 0;
  lado = ''
  onKeyDown(tecla: KeyboardEvent){

      if(tecla.key == 'ArrowRight'){
        this.left = this.left + 10
        this.lado = 'scaleX(1)'  
      }
      if(tecla.key == 'ArrowLeft'){
        this.left = this.left - 10
        this.lado = 'scaleX(-1)'  
      }
      if(this.left >= 1050){
        this.modalWin()
      }

      
  }

  modalWin(){
    Swal.fire({
      title: 'VOCÊ GANHOU! PARABÉNS!!',
      width: 600,
      padding: '3em',
      color: '#FFF',
      background: 'transparent',
      confirmButtonText: "Voltar",
      confirmButtonColor: "green",
      allowOutsideClick:false
    }).then(
      (e) => {
        if(e.value == true){
          this.router.navigate(['/'])
        }
      }
    )
  }

  modalGameOver(){
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

}
