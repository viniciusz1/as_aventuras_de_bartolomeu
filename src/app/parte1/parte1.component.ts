import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-parte1',
  templateUrl: './parte1.component.html',
  styleUrls: ['./parte1.component.css'],
})
export class Parte1Component implements OnInit {

  left = 0;
  onKeyDown(tecla: KeyboardEvent){
    if(tecla.key == 'ArrowRight'){
      this.left = this.left + 10      
    }
    if(tecla.key == 'ArrowLeft'){
      this.left = this.left - 10
    }
  }

  constructor(
    private appService: AppService
  ) { 
    appService.keydown()
    .subscribe((e) => {
      this.onKeyDown(e);
    })
  }

  ngOnInit(): void {
  }
}
//  else if(tecla == 37) {
	 
//   // seta pra ESQUERDA
   
//  } else if(tecla == 38) {
  
//   // seta pra CIMA
   
//  } else if(tecla == 39) {
  
//   // seta pra DIREITA
   
//  } else if(tecla == 40) {
  
//   // seta pra BAIXO
   
//  }
// }
