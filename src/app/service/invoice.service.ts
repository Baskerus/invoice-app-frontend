import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from '../Invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.apiServerUrl}/invoices/all`);
  }

  public addInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(
      `${this.apiServerUrl}/invoices/add`,
      invoice
    );
  }

  public deleteInvoice(id: number) {
    this.http.delete(`${this.apiServerUrl}/invoices/delete/${id}`).subscribe(
      (data) => {
        console.log('Delete successfull.');
      },
      (error: HttpErrorResponse) => {
        console.log('Error deleting invoice.', error.message);
      }
    );
  }

  getInvoicesArray() {
    this.getInvoices().subscribe(
      (response: Invoice[]) => {
        return response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
