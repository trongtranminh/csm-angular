import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Invoice } from '@app/models';
import { environment as env } from '@env/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InvoiceService {

  private invoiceUrl = env.apiUrl + 'invoices';

  constructor(
    private http: HttpClient
  ) { }

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.invoiceUrl);
  }

  getInvoiceById(id: string): Observable<Invoice> {
    return this.http.get<Invoice>(this.invoiceUrl + '/' + id);
  }

  createNewInvoice(tableID: number): Observable<boolean> {
    return this.http.post<boolean>(this.invoiceUrl + '/'  + tableID, httpOptions);
  }

}
