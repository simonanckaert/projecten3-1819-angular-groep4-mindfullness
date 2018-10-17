import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefeningenLijstComponent } from './oefeningen-lijst.component';

describe('OefeningenLijstComponent', () => {
  let component: OefeningenLijstComponent;
  let fixture: ComponentFixture<OefeningenLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefeningenLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefeningenLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
