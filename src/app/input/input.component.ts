import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, OnChanges{
  id: string = ''
  item = {
    placeholder: 'Enter Anything!',
    type: 'number'
  }
  constructor() { 
   }
  ngOnChanges() {
    
  }
  ngOnInit(): void {
    console.log("Input id: ")
    console.log(this.id)
  }
}
