import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeconnectionComponent } from './deconnection.component';

describe('DeconnectionComponent', () => {
  let component: DeconnectionComponent;
  let fixture: ComponentFixture<DeconnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeconnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
