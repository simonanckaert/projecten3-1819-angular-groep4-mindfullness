import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessieoverzichtComponent } from './sessieoverzicht.component';

describe('SessieoverzichtComponent', () => {
  let component: SessieoverzichtComponent;
  let fixture: ComponentFixture<SessieoverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessieoverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessieoverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
