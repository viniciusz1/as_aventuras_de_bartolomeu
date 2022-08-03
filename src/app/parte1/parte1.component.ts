import { AfterViewInit, Component, ElementRef,Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-parte1',
  templateUrl: './parte1.component.html',
  styleUrls: ['./parte1.component.css'],
})
export class Parte1Component implements OnInit, OnDestroy {

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
  ngOnDestroy(): void {
    this.left = 0;
  }

  constructor(
    private appService: AppService,
    private router: Router,
    private local: LocalStorageService,
  ) { 
    appService.keydown()
    .subscribe((e) => {
      this.onKeyDown(e);
    })
  }

  clicou_menina = false
  clicou_cachorro = false
  alimentou = false

  ngOnInit(): void {
    this.left=0
  }

  sim() {
    this.clicou_menina = true
  }

  nao() {
    this.clicou_menina = true
    this.router.navigate(['/']);
  }

  alimentar() {
    this.clicou_cachorro = true
    this.alimentou = true
    this.local.set("alimentou", this.alimentou)
  }

  ignorar() {
    this.clicou_cachorro = true
    this.alimentou = false
    this.local.set("alimentou", this.alimentou)
  }

}
