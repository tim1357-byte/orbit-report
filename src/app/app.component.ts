import { Component } from '@angular/core';
import { Satellite } from './satellite';
import { SourceListMap } from 'source-list-map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

  displayList: Satellite[];
  //this here was added
  sourceList: Satellite[];



 constructor() {
  this.sourceList = [];
 this.displayList = [];
// this.displayList = this.sourceList.slice(0);
 

  let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
  
  
  window.fetch(satellitesUrl).then(function(response) {
     response.json().then(function(data) {
        let fetchedSatellites = data.satellites;
        let changeColor: boolean = false;

        for (let i = 0; i < fetchedSatellites.length; i++) {
         
          let newSat = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          this.sourceList.push(newSat);
        } 
        
        for (let i = 0; i < fetchedSatellites.length; i++) {
        if (this.sourceList[i].shouldShowWarning() === true){
          console.log("yea this is it")
          changeColor = true;
        } else {
          console.log("nope not this time")
          changeColor = false;
        }
        }
      
        // console.log(fetchedSatellites[0]);
        // console.log(fetchedSatellites[2]);

        this.displayList = this.sourceList.slice(0);
        
     }  .bind(this));
  }  .bind(this));
 
  }
  
  
  ngOnInit() {
  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       if (name.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
          
    }
    }
    
  this.displayList = matchingSatellites;
    
  }

}




