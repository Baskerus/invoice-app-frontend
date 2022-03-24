import { InvoiceService } from 'src/app/services/invoice.service';
import { InvoiceComponent } from './invoice.component';

let invoice = describe('Invoice Component', () => {
  let component: InvoiceComponent;

  beforeEach(() => {
    component = new InvoiceComponent(null, null);
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
  });

  it('should display picked date in proper format', () => {
    // Arrange
    component.invoice.dueDate = "2023-04-08"
    // Act
    component.ngOnInit()
    // Assert
    expect(component.displayDate).toBe('08-04-2023');
  });

  it('should display initial date in proper format', () => {
    // Arrange
    let pickerDate = '2022/11/03';
    // Act
    component.handlePicker(pickerDate);
    // Assert
    expect(component.displayDate).toBe('03-11-2022');
    expect(component.isDirty).toBe(true);
  });

  it('should switch paid status', () => {
    // Arrange
    let prevStatus = component.invoice.isPaid;
    // Act
    component.handleStatusButton();
    // Assert
    expect(component.invoice.isPaid).toBe(!prevStatus);
  });
});
