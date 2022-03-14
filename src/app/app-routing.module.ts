import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{ path: 'add', component: AddInvoiceComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
