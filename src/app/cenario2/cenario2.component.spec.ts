import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cenario2Component } from './cenario2.component';

describe('Cenario2Component', () => {
  let component: Cenario2Component;
  let fixture: ComponentFixture<Cenario2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cenario2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cenario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
