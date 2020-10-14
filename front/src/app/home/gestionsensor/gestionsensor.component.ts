import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/service/sensor.service';

@Component({
  selector: 'app-gestionsensor',
  templateUrl: './gestionsensor.component.html',
  styleUrls: ['./gestionsensor.component.css']
})
export class GestionsensorComponent implements OnInit {
  tempList
  constructor(private sensorService:SensorService) { }

  ngOnInit() {
    this.allTemp()
  }

  allTemp(){
    this.sensorService.getAllTemp().subscribe(user => {
      this.tempList = user;
      console.log(this.tempList)
    
  
  })
  }
}
