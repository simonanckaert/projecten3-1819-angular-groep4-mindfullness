import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefeningdetailComponent } from './oefeningdetail.component';

describe('OefeningdetailComponent', () => {
  let component: OefeningdetailComponent;
  let fixture: ComponentFixture<OefeningdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefeningdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefeningdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
