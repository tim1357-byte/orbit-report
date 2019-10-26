// import { Component, OnInit } from '@angular/core';

import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';






@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {


  

  changeColor: boolean = true;
  // ok here is line 1 

  @Input() satellites: Satellite[];

  constructor() { }
 

  ngOnInit() {
  }

  
//HERE IS WHERE WE ARE AT

  sort(column: string): void {
    // array.sort modifies the array, sorting the items based on the given compare function
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
 }

 







}
