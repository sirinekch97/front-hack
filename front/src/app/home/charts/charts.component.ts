import { Component, OnInit } from '@angular/core';
import { SensorService } from 'src/app/service/sensor.service';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  dataSource: Object;
  width = 800;
  height = 400;
  type = "spline";
  dataFormat = "json";
  dataSources:any
  dataSources2:any
  dataSources3:any

  listerain
  constructor(private sensorService:SensorService) { 
    this.dataSources = {
      chart: {
        caption: "Sensors Mesures",
        yaxisname: "Temperature",
        anchorradius: "2",
        plottooltext: "Average temperature in $label is <b>$dataValue</b>",
        showhovereffect: "1",
        showvalues: "0",
        numbersuffix: "°C",
        theme: "fusion",
        anchorbgcolor: "#72D7B2",
        palettecolors: "#72D7B2"
      },
      data: [
        {
          
          value: []
        }
        
      ]
    };
    this.dataSources2 = {
      chart: {
        caption: "Sensors Mesures",
        yaxisname: "Humidity",
        anchorradius: "2",
        plottooltext: "Average temperature in $label is <b>$dataValue</b>",
        showhovereffect: "1",
        showvalues: "0",
        numbersuffix: "%",
        theme: "fusion",
        anchorbgcolor: "#72D7B2",
        palettecolors: "#72D7B2"
      },
      data: [
        {
          
          value: []
        }
        
      ]
    };
    this.dataSources3 = {
      chart: {
        caption: "Sensors Mesures",
        yaxisname:"Rain",
        anchorradius: "2",
        plottooltext: "Average Rain in $label is <b>$dataValue</b>",
        showhovereffect: "1",
        showvalues: "0",
        numbersuffix: "ml",
        theme: "fusion",
        anchorbgcolor: "#72D7B2",
        palettecolors: "#72D7B2"
      },
      data: [
        {
          
          value: []
        }
        
      ]
    };
  }
  listeTemp:any
  listeHumid:any
  tempList
  aa
  p
  element
  ngOnInit() {
    this.allTemp()
    this.allHumid()
   
  }
  allTemp(){
    this.sensorService.getAllTemp().subscribe(user => {
      this.tempList = user;
      console.log(this.tempList)
      
      this.aa=this.dataSources
      for(let i =0;i<20;i++){
        this.element=this.tempList[i].TemperaturMesure
        //console.log("elt",this.element)
        //console.log("tab",this.aa)
        this.aa.data.push({label:this.tempList[i].name,value:[this.element]})
  //console.log(this.aa)
        //this.p.value.push(this.element.TemperatureMesure)
        //this.p.label=this.element.name
      }
  
   
  
  })
  }
  allHumid(){
    this.sensorService.getAllHmid().subscribe(data=>{
      this.listeHumid = data;
      console.log(this.listeHumid)
      
      this.aa=this.dataSources2
      for(let j =0;j<20;j++){
        this.element=this.listeHumid[j].Humiditymesure
  
        console.log("elt",this.element.Humiditymesure)
        console.log("tab",this.aa)
        this.aa.data.push({label:this.listeHumid[j].name,value:[this.element]})
  console.log(this.aa)
        
      }
  
  
   
    })
  }

}