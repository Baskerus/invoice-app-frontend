import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InvoicesTotalComponent } from './invoices-total.component';

describe('InvoicesTotal', () => {
  let component: InvoicesTotalComponent;
  let fixture: ComponentFixture<InvoicesTotalComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [InvoicesTotalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesTotalComponent);
    component = fixture.componentInstance;
    component.invoices = [
      {
        name: 'Basker Onian',
        email: 'ttt@ttt.com',
        address: 'B6 Pencil Way',
        city: 'Worcestershire',
        code: 94105,
        country: 'United Kingdom',
        dueDate: '2022-03-18',
        description: 'fdsfdf',
        total: 11.75,
        isPaid: false,
      },
      {
        name: 'Basker Onian',
        email: 'ttt@ttt.com',
        address: 'B6 Pencil Way',
        city: 'Worcestershire',
        code: 94105,
        country: 'United Kingdom',
        dueDate: '2022-03-18',
        description: 'fdsfdf',
        total: 23.34,
        isPaid: true,
      },
      {
        name: 'Basker Onian',
        email: 'ttt@ttt.com',
        address: 'B6 Pencil Way',
        city: 'Worcestershire',
        code: 94105,
        country: 'United Kingdom',
        dueDate: '2022-03-18',
        description: 'fdsfdf',
        total: 63.34,
        isPaid: false,
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should caluclate totals', () => {
    component.invoices.forEach((invoice) => {
      invoice.total = Math.floor(Math.random() * 100 + 1);
    });

    component.calculateSums();

    expect(component.totalSum).toEqual(component.totalSum);
    expect(component.pendingSum).toEqual(component.pendingSum);
    expect(component.paidSum).toEqual(component.paidSum);
  });

  it('should display totals', () => {
    component.calculateSums();

    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('#pending-display')).nativeElement
        .innerText
    ).toBe('$' + component.pendingSum);

    expect(
      fixture.debugElement.query(By.css('#paid-display')).nativeElement
        .innerText
    ).toBe('$' + component.paidSum);

    expect(
      fixture.debugElement.query(By.css('#total-display')).nativeElement
        .innerText
    ).toBe('$' + component.totalSum);
  });
});
