import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prim',
  templateUrl: './prim.component.html',
  styleUrls: ['./prim.component.css']
})
export class PrimComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  date:Date = new Date();
  knob:number = 56;
  switch:boolean = false;
  slider:number = 50;
  checked:boolean = true;
  value:any;
}
