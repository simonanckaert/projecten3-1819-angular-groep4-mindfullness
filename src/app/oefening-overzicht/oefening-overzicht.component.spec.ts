import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefeningOverzichtComponent } from './oefening-overzicht.component';

describe('OefeningOverzichtComponent', () => {
  let component: OefeningOverzichtComponent;
  let fixture: ComponentFixture<OefeningOverzichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefeningOverzichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefeningOverzichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
