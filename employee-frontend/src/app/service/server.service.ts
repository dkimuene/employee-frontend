import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private readonly apiUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/all`);
  }

  getEmployee(employeeId: number):Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiUrl}/find/${employeeId}`);
  }
  addEmployee(employee: Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.apiUrl}/add`, employee);
  }
  updateEmployee(employee: Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.apiUrl}/update`, employee);
  }
  deleteEmployees(employeeId:number):Observable<Employee>{
    return this.http.delete<Employee>(`${this.apiUrl}/delete/${employeeId}`);
  }

}
