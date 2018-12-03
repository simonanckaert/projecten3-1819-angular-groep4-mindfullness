import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlantComponent } from './klant.component';

describe('KlantComponent', () => {
  let component: KlantComponent;
  let fixture: ComponentFixture<KlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
