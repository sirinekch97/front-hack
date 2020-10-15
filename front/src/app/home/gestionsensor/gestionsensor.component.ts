import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/service/sensor.service';

@Component({
  selector: 'app-gestionsensor',
  templateUrl: './gestionsensor.component.html',
  styleUrls: ['./gestionsensor.component.css']
})
export class GestionsensorComponent implements OnInit {
  tempList
  humidList
  constructor(private sensorService:SensorService) { }

  ngOnInit() {
    this.allTemp()
    this.allHumid()
  }

  allTemp(){
    this.sensorService.getAllTemp().subscribe(data => {
      this.tempList = data;
      console.log("find",this.tempList)
    
  
  })
  }
  allHumid(){
    this.sensorService.getAllHmid().subscribe(data => {
      this.humidList = data;
    
  
  })
  }
}
