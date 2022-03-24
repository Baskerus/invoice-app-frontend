import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

describe('Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
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
        total: 12.33,
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
        total: 21.33,
        isPaid: false,
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display number of invoices', () => {
    let resultToDisplay = component.numberOfInvoices();

    expect(
      fixture.debugElement.query(By.css('#invoices-number')).nativeElement
        .innerText
    ).toBe(resultToDisplay);
  });
});
