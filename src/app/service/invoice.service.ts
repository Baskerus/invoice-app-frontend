import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from '../interfaces/Invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private apiServerUrl = environment.apiBaseUrl;
  public total = 0;
  public pendingTotal = 0;
  public paidTotal = 0;

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

  public updateInvoice(invoice: Invoice): Observable<Invoice> {
    console.log('Trying update');
    return this.http.put<Invoice>(
      `${this.apiServerUrl}/invoices/update`,
      invoice
    );
  }

  public deleteInvoice(id: number) {
    return this.http.delete(`${this.apiServerUrl}/invoices/delete/${id}`);
  }
}
