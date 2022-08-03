import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
    if(this.left > 1150){
      this.router.navigate(['/nivel-2'])
    }
  }

  constructor(
    private appService: AppService,
    private router: Router
  ) { 
    appService.keydown()
    .subscribe((e) => {
      this.onKeyDown(e);
    })
  }

  ngOnInit(): void {
    this.left=0
  }
}
