import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Pessoa{
  nome: string,
  tempo: number
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }
  ranking:Pessoa[] = []

  nick=""
  tempo = 0
  entrar(){
    this.ranking.push({nome: this.nick, tempo: this.tempo})
    localStorage.setItem('ranking', JSON.stringify(this.ranking))
    // this.ranking = JSON.parse(localStorage.getItem('ranking')!);
    console.log(this.ranking)
    this.router.navigate(['/nivel-1'])
  }
  ngOnInit(): void {
  }

  

}
