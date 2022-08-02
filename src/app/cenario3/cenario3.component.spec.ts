import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cenario3Component } from './cenario3.component';

describe('Cenario3Component', () => {
  let component: Cenario3Component;
  let fixture: ComponentFixture<Cenario3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cenario3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cenario3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
