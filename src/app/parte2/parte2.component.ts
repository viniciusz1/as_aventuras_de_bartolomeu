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
      this.onKeyDown(e);
    })
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

  vida = 50;
  ganhou = 0;

  ngOnInit(): void {
    setTimeout(() => {
      if (this.vida == 0) {
        this.ganhou = 1
      } else {
        this.ganhou = 2
      setTimeout(() => {
        // this.router.navigate(['/']);
      },5000)
      }
    }, 20000)
    this.repeat();
  }

  ClickDragao() {
    if (this.vida > 0) {
      this.vida = this.vida - 1;
    } else {
      this.ganhou = 1;
      setTimeout(() => {
        // this.router.navigate(['/']);
      }, 10000)
    }
  }

}
