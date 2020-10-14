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
    this.allRain();
   
  }
allTemp(){
  this.sensorService.getAllTemp().subscribe(user => {
    this.tempList = user;
    console.log(this.tempList)
    this.aa=this.dataSources;
    this.p=this.aa.data[0].value 
    for(let i =0;i<this.tempList.length;i++){
      this.element=this.tempList[i]
      console.log("elt",this.element)
      console.log("heree",this.p)
      this.aa.data.push({label:this.element.name,value:[this.element.TemperatureMesure]})

      //this.p.value.push(this.element.TemperatureMesure)
      //this.p.label=this.element.name
    }

 

})
}
allHumid(){
  this.sensorService.getAllHmid().subscribe(res=>{
    console.log("okkkk",res)
    this.listeHumid=res
    this.aa=this.dataSources2;
    this.p=this.aa.data[0].value 
    for(let i =0;i<this.listeHumid.length;i++){
      this.element=this.listeHumid[i]
      console.log("elt",this.element)
      console.log("heree",this.p)
      this.aa.data.push({label:this.element.name,value:[this.element.HumidityMesure]})
    }

 
  })
}
  allRain(){
    this.sensorService.getAllRain().subscribe(res=>{
      console.log("okkkk",res)
      this.listerain=res
      this.aa=this.dataSources3;
      this.p=this.aa.data[0].value 
      for(let i =0;i<this.listerain.length;i++){
        this.element=this.listerain[i]
        console.log("elt",this.element)
        console.log("heree",this.p)
        this.aa.data.push({label:this.element.name,value:[this.element.RainMesure]})
      }
  
   
    })
}

}