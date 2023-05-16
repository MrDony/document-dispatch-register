import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedDocumentsComponent } from './recieved-documents.component';

describe('RecievedDocumentsComponent', () => {
  let component: RecievedDocumentsComponent;
  let fixture: ComponentFixture<RecievedDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecievedDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecievedDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
