import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cenarioMenu',
  templateUrl: './cenarioMenu.component.html',
  styleUrls: ['./cenarioMenu.component.css']
})
export class CenarioMenuComponent implements OnInit {

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
