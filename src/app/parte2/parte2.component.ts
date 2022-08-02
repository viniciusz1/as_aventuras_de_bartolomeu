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
      console.log(e);
    })
  }

  vida = 120;
  ganhou = false;

  ngOnInit(): void {
    // let dragao = document.getElementById('containerDragao')
    // for (let movimentar = 0; movimentar < 10; movimentar++) {
    //   if (movimentar < 9) {
    //     dragao?.classList.remove("containerDragaoMexer");
    //     dragao?.classList.add("containerDragao");
    //   }
    //   if (movimentar == 9) {
    //     dragao?.classList.remove("containerDragao");
    //     dragao?.classList.add("containerDragaoMexer");
    //     movimentar = 0;
    //   }
    // }
  }

  ClickDragao() {
    if (this.vida > 0) {
      this.vida = this.vida - 1;
    } else {
      this.ganhou = true;
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 10000)
    }
  }

}
