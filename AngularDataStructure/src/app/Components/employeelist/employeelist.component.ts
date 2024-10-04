import { Component } from '@angular/core';
import { Employees } from './Employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  name = "";
  department = "";
  img = ""
  
  
  employees: Employees[] = []


  addEmployees(){

    const newEmployee: Employees = {

      employeeName: this.name,
      employeeDepartment: this.department,
      employeeImage: this.img

    };

    this.employees.push(newEmployee);

  }
}
