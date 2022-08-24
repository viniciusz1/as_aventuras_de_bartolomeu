import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cenario1',
  templateUrl: './cenario1.component.html',
  styleUrls: ['./cenario1.component.css']
})
export class Cenario1Component implements OnInit {

  @Output()
  keydown: EventEmitter<KeyboardEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    const container = document.getElementById('container');
    console.log(container)
    if (container) {
      container.addEventListener('keydown', (e: KeyboardEvent) => {
        console.log(e)
        this.keydown.emit(e);
      })
    }
  }

}
