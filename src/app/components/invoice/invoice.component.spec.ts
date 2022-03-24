import { getNsPrefix } from '@angular/compiler';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MatDialog, MatDialogActions } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { InvoiceService } from 'src/app/services/invoice.service';
import { InvoiceComponent } from './invoice.component';

describe('Invoice Component', () => {
  let component: InvoiceComponent;
  let fixture: ComponentFixture<InvoiceComponent>;
  let serviceStub;
  let debugElement: DebugElement;

  beforeEach(async () => {
    serviceStub = {
      updateInvoice: () => true,
      deleteInvoices: () => true,
    };

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: InvoiceService, useValue: serviceStub },
        { provide: MatDialog, useValue: {} },
      ],
      declarations: [InvoiceComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.invoice = {
      name: 'Basker Onian',
      email: 'ttt@ttt.com',
      address: 'B6 Pencil Way',
      city: 'Worcestershire',
      code: 94105,
      country: 'United Kingdom',
      dueDate: '2022-03-18',
      description: 'fdsfdf',
      total: 1.33,
      isPaid: false,
    };
    fixture.detectChanges();
  });

  /*   beforeEach(() => {
    component.invoice = {
      id: 195,
      name: 'Basker Onian',
      email: 'ttt@ttt.com',
      address: 'B6 Pencil Way',
      city: 'Worcestershire',
      code: 94105,
      country: 'United Kingdom',
      dueDate: '2022-03-18',
      description: 'fdsfdf',
      total: 1.33,
      isPaid: false,
    };
  }); */

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should format picked date', () => {
    // Arrange

    // Act
    component.ngOnInit();
    // Assert
    expect(component.displayDate).toBe('18-03-2022');
  });

  it('should format initial display date', () => {
    // Arrange
    component.invoice = { dueDate: '2022-04-08' };
    // Act
    component.handlePicker('2022/11/03');
    // Assert
    expect(component.displayDate).toBe('03-11-2022');
    expect(component.isDirty).toBe(true);
  });

  it('should switch paid status', () => {
    // Arrange
    component.invoice = { isPaid: true };
    // Act
    component.handleStatusButton();
    // Assert
    expect(component.invoice).toEqual({ isPaid: false });
  });

  it('should display "paid" if invoice is paid', () => {
    component.invoice.isPaid = true;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('#status-display')).nativeElement
        .innerText
    ).toBe('Paid');
  });

  it('should display "pending" if invoice is not paid', () => {
    component.invoice.isPaid = false;
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('#status-display')).nativeElement
        .innerText
    ).toBe('Pending');
  });
});
