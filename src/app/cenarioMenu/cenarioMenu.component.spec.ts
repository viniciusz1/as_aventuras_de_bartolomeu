import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenarioMenuComponent } from './cenarioMenu.component';

describe('CenarioMenuComponent', () => {
  let component: CenarioMenuComponent;
  let fixture: ComponentFixture<CenarioMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenarioMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenarioMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
