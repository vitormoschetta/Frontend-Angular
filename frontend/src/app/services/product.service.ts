import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DataResult } from '../models/dataResult';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "https://localhost:5001/api/product";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { } 

  create(product: Product): Observable<DataResult> {
    const url = `${this.baseUrl}/create`
    return this.http.post<DataResult>(url, product);
  }

  getAll(): Observable<Product[]> {
    const url = `${this.baseUrl}/getall`
    return this.http.get<Product[]>(url);
  }

  getById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/getbyid/${id}`
    return this.http.get<Product>(url)    
  }

  update(product: Product): Observable<DataResult> {
    const url = `${this.baseUrl}/update/${product.id}`
    return this.http.put<DataResult>(url, product)    
  }

  delete(id: string): Observable<DataResult> {
    const url = `${this.baseUrl}/delete/${id}`
    return this.http.delete<DataResult>(url)
  }

  ShowMessageSuccess(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  ShowMessageError(message: string): void {
    this.snackBar.open(message, '', {
      duration: 4000,
      horizontalPosition: "center",
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    })
  }

}
