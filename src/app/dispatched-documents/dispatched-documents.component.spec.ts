import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchedDocumentsComponent } from './dispatched-documents.component';

describe('DispatchedDocumentsComponent', () => {
  let component: DispatchedDocumentsComponent;
  let fixture: ComponentFixture<DispatchedDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispatchedDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispatchedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
