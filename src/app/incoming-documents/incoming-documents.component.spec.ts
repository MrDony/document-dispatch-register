import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingDocumentsComponent } from './incoming-documents.component';

describe('IncomingDocumentsComponent', () => {
  let component: IncomingDocumentsComponent;
  let fixture: ComponentFixture<IncomingDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
