import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceService } from './services/invoice.service';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { InvoicesTotalComponent } from './components/invoices-total/invoices-total.component';

@NgModule({
  declarations: [
    AppComponent,
    AddInvoiceComponent,
    HomeComponent,
    InvoiceComponent,
    DialogComponent,
    InvoicesTotalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
