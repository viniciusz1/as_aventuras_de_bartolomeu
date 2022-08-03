import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router,
  private localStorageService: LocalStorageService) { }
  ranking: {nivel1: number, nivel2: number, total: number, jogador: string}[] = []

  nick=""
  tempo = 0
  entrar(){
    if(this.nick){
      this.localStorageService.set('jogador', this.nick)
      this.router.navigate(['/nivel-1'])
    }else{
      alert('Coloque um Nickname')
    }
  }

  alimentou = false;

  ngOnInit(): void {
    this.localStorageService.set("alimentou", this.alimentou)
    this.ranking = this.localStorageService.get('ranking')
    console.log(this.ranking)
  }

  

}
