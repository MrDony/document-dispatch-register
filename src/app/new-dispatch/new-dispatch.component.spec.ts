import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDispatchComponent } from './new-dispatch.component';

describe('NewDispatchComponent', () => {
  let component: NewDispatchComponent;
  let fixture: ComponentFixture<NewDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDispatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
