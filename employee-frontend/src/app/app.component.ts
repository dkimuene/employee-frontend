import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from './interface/employee';
import { ServerService } from './service/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: Employee[]= [];

  editEmployee!:Employee;
  deleteEmployee!:Employee;
  

  constructor(private serverService: ServerService, private route:ActivatedRoute){}

  ngOnInit():void{
    this.getEmployees();
    
    
  }
  getEmployees():void{
    this.serverService.getEmployees().subscribe((response: Employee[]) => this.employees=response)
    console.log(this.employees)
  }
  
  onAddEmployee(addForm: NgForm):void{
    document.getElementById("add-employee-form")?.click;
    this.serverService.addEmployee(addForm.value).subscribe(
      (response:Employee) =>{
        console.log(response);
        this.getEmployees();
        addForm.reset();
      }
    )
  }
  onUpdateEmployee(employee: Employee):void{
    this.serverService.updateEmployee(employee).subscribe(
      (response:Employee) =>{
        console.log(response);
        this.getEmployees();
      }
    )
  
  }
  onDeleteEmployee(employeeId: number):void{
    this.serverService.deleteEmployees(employeeId).subscribe(
      (response:Employee) =>{
        console.log(response);
        this.getEmployees();
      }
    )
  }

  accessEmployee(employee:Employee){
    this.editEmployee = employee;
    console.log(this.editEmployee)
  
  }
  accessEmployeeForDelete(employee:Employee){
    this.deleteEmployee = employee;
    console.log(this.deleteEmployee)
  }
}