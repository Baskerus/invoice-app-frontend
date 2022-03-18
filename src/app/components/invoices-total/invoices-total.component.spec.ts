import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesTotalComponent } from './invoices-total.component';

describe('InvoicesTotalComponent', () => {
  let component: InvoicesTotalComponent;
  let fixture: ComponentFixture<InvoicesTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoicesTotalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
