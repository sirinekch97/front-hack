import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { TopbarComponent } from './home/topbar/topbar.component';
import {MatSliderModule} from '@angular/material/slider';

import { ContainerComponent } from './home/container/container.component';
import { ChartsComponent } from './home/charts/charts.component';
import { LoginComponent } from './login/login.component';
// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import {MatCardModule} from '@angular/material/card';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionsensorComponent } from './home/gestionsensor/gestionsensor.component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    
    ContainerComponent,
    
    TopbarComponent,
    
    
    
    ChartsComponent,
    
    
    
    LoginComponent,
    
    
    
    GestionsensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FusionChartsModule,
    ReactiveFormsModule, FormsModule, BrowserAnimationsModule,MatSliderModule,
    MatCardModule

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
