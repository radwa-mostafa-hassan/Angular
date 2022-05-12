import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments:Department[] = [
    new Department(1,"OS","Alex"),
    new Department(2,"PD","Smart"),
    new Department(3,"AI","Alex"),
    new Department(4,"Java","Smart"),
  ];

  getAllDepartments(){
    return this.departments;
  }

  addDepartment(newDept:Department){
    this.departments.push(new Department(newDept.id, newDept.deptName, newDept.location));
  }

  constructor() { }
}