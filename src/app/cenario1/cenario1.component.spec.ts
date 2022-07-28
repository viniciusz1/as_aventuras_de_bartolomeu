import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cenario1Component } from './cenario1.component';

describe('Cenario1Component', () => {
  let component: Cenario1Component;
  let fixture: ComponentFixture<Cenario1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cenario1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cenario1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
