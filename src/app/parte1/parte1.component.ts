import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-parte1',
  templateUrl: './parte1.component.html',
  styleUrls: ['./parte1.component.css'],
})
export class Parte1Component implements OnInit, OnDestroy {

  left = 0;
  lado = ''
  paraCachorro = false
  onKeyDown(tecla: KeyboardEvent) {
    this.paraCachorro = false
    setTimeout(() => {
      this.paraCachorro = true
    }
      , 2000)
    if (this.left < 500) {
      if (tecla.key == 'ArrowRight') {
        this.left = this.left + 10
        this.lado = 'scaleX(1)'
      }
      if (tecla.key == 'ArrowLeft') {
        this.left = this.left - 10
        this.lado = 'scaleX(-1)'
      }
    } else if (this.left < 820 && this.clicou_menina) {
      if (tecla.key == 'ArrowRight') {
        this.left = this.left + 10
        this.lado = 'scaleX(1)'
      }
      if (tecla.key == 'ArrowLeft') {
        this.left = this.left - 10
        this.lado = 'scaleX(-1)'
      }
    } else if (this.left > 800 && this.clicou_cachorro) {
      if (tecla.key == 'ArrowRight') {
        this.left = this.left + 10
        this.lado = 'scaleX(1)'
      }
      if (tecla.key == 'ArrowLeft') {
        this.left = this.left - 10
        this.lado = 'scaleX(-1)'
      }
      
      
    }
    
    if (this.left > 1150) {
      this.router.navigate(['/nivel-2'])
    }
  }
  sub: Subscription
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  constructor(
    private appService: AppService,
    private router: Router,
    private local: LocalStorageService,
  ) {
    this.sub = appService.keydown()
      .subscribe((e) => {
        this.onKeyDown(e);
      })
  }

  clicou_menina = false;
  clicou_cachorro = false;
  alimentou = 0;

  ngOnInit(): void {
    this.local.set("alimentou", this.alimentou)
    this.left = 0
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
    this.alimentou = 1
    this.local.set("alimentou", this.alimentou)

  }

  ignorar() {
    this.clicou_cachorro = true
    this.alimentou = 2
    this.local.set("alimentou", this.alimentou)
  }

}
