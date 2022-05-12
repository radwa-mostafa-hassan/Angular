import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string = "radwa";
  names:string[]=[
    "Radwa",
    "Mahitab",
    "Shaimaa",
  ];
  string:string = "Radwa-Mostafa";
}
