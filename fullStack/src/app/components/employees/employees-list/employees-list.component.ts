import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = []; //--> Employees Not Found
  // employees: Employee[] = [
  //   {
  //     id: '5b4ed4cc',
  //     name: 'Abhinav Tyagi',
  //     email: 'abhi.tyagi@gmail.com',
  //     phone: 9988745623,
  //     salary: 60000,
  //     department: 'Human Resources'
  //   },
  //   {
  //     id: '6b4cb4cc',
  //     name: 'Samay Joshi',
  //     email: 'samay.joshi@gmail.com',
  //     phone: 9927745623,
  //     salary: 70000,
  //     department: 'Information Technology'
  //   },
  //   {
  //     id: '7d4ed4ec',
  //     name: 'Piyush Sharma',
  //     email: 'piyush.sharma@gmail.com',
  //     phone: 7988745683,
  //     salary: 50000,
  //     department: 'Production'
  //   },
  //   {
  //     id: '2b8ed3cf',
  //     name: 'Nikhil Kemnie',
  //     email: 'nikhil.kemnie@gmail.com',
  //     phone: 6588745689,
  //     salary: 80000,
  //     department: 'Marketing'
  //   },
  //   {
  //     id: '3z7ed4kc',
  //     name: 'Ankit Gupta',
  //     email: 'ankit.gupta@gmail.com',
  //     phone: 7588745668,
  //     salary: 40000,
  //     department: 'Electrical'
  //   },
  //   {
  //     id: 'xb8ed4zf',
  //     name: 'Jatin Tanwar',
  //     email: 'jatin.tanwar@gmail.com',
  //     phone: 7988745853,
  //     salary: 30000,
  //     department: 'Legal'
  //   }
  // ];
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
