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
  ranking: { nivel1: number, nivel2: number, total: number, jogador: string }[] = []
  nick = "";
  tempo = 0;
  alimentou = false;
  musica = 1;
  estado = "ON";
  ganhou = localStorage.getItem("GANHOU");


  entrar() {
    if (this.nick) {
      this.localStorageService.set('jogador', this.nick)
      this.router.navigate(['/nivel-1'])
    } else {
      alert('Coloque um Nickname')
    }
  }

  public ngOnInit(): void {
    //   if(this.localStorageService.get('recarga') == true){
    //     this.localStorageService.set('recarga', false)
    //     location.reload()
    //   }
    //   this.localStorageService.set('recarga', true)

    this.localStorageService.set("alimentou", this.alimentou)
    this.ranking = this.localStorageService.get('ranking')
    console.log(this.ranking)
  }

  playAudio() {
    let audio = this.createAudio();
    this.musica++;
    if (audio != undefined && this.ganhou != "true") {
      this.estado = "OFF";
      audio.play();
    } else {
      localStorage.setItem("GANHOU", "false");
      document.location.reload();
    }
  }

  createAudio() {
    if (this.musica == 1) {
      let audio = new Audio();
      audio.src = "../../assets/musicaTema.mp3";
      return audio
    }
    return undefined
  }
}
