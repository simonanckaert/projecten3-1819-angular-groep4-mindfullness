import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerichtdetailComponent } from './berichtdetail.component';

describe('BerichtdetailComponent', () => {
  let component: BerichtdetailComponent;
  let fixture: ComponentFixture<BerichtdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerichtdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerichtdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
