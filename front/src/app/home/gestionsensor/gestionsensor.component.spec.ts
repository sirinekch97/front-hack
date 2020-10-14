import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionsensorComponent } from './gestionsensor.component';

describe('GestionsensorComponent', () => {
  let component: GestionsensorComponent;
  let fixture: ComponentFixture<GestionsensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionsensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionsensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
