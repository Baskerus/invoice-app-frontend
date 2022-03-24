import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { InvoiceService } from 'src/app/services/invoice.service';
import { InvoiceComponent } from './invoice.component';

describe('InvoiceComponent', () => {
  let component: InvoiceComponent;
  let fixture: ComponentFixture<InvoiceComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: InvoiceService, useValue: {} },
        { provide: MatDialog, useValue: {} },
      ],
      declarations: [InvoiceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceComponent);
    component = fixture.componentInstance;
    component.invoice = {
      name: 'Basker Onian',
      email: 'test@test.com',
      address: 'B6 Pencil Way',
      city: 'Worcestershire',
      code: 94105,
      country: 'United Kingdom',
      dueDate: '2022-03-18',
      description: 'fdsfdf',
      total: 12,
      isPaid: true,
    };
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should format picked date', () => {
    component.ngOnInit();

    expect(component.displayDate).toBe('18-03-2022');
  });

  it('should format initial display date', () => {
    component.invoice = { dueDate: '2022-04-08' };

    component.handlePicker('2022/11/03');

    expect(component.displayDate).toBe('03-11-2022');
    expect(component.isDirty).toBe(true);
  });

  it('should switch paid status', () => {
    component.invoice = { isPaid: true };

    component.handleStatusButton();

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

  it('should display invoice description', () => {
    expect(
      fixture.debugElement.query(By.css('#description')).nativeElement.value
    ).toBe(component.invoice.description);
  });

  it('should display invoice total in header', () => {
    expect(
      fixture.debugElement.query(By.css('#header-total')).nativeElement
        .innerText
    ).toBe('$' + component.invoice.total.toFixed(2));
  });

  it('should display invoice total in drawer', () => {
    expect(
      fixture.debugElement.query(By.css('#drawer-total')).nativeElement.value
    ).toBe(JSON.stringify(component.invoice.total));
  });

  it('should display bill info', () => {
    expect(
      fixture.debugElement.query(By.css('#name-input')).nativeElement.value
    ).toBe(component.invoice.name);

    expect(
      fixture.debugElement.query(By.css('#address-input')).nativeElement.value
    ).toBe(component.invoice.address);

    expect(
      fixture.debugElement.query(By.css('#city-input')).nativeElement.value
    ).toBe(component.invoice.city);

    expect(
      fixture.debugElement.query(By.css('#code-input')).nativeElement.value
    ).toBe(JSON.stringify(component.invoice.code));

    expect(
      fixture.debugElement.query(By.css('#country-input')).nativeElement.value
    ).toBe(component.invoice.country);

    expect(
      fixture.debugElement.query(By.css('#email-input')).nativeElement.value
    ).toBe(component.invoice.email);
  });
});
