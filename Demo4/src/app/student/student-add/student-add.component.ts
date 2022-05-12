import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  newStudent:Student = new Student(0,"",0,0);

  constructor(public stdSv:StudentService) { }

  insert(){
    this.stdSv.addStudent(this.newStudent);
  }

  ngOnInit(): void {
  }

}
