import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import{ ContainerComponent} from './home/container/container.component'
import { ChartsComponent } from './home/charts/charts.component';
import { LoginComponent } from 'src/app/login/login.component';
import { GestionsensorComponent } from './home/gestionsensor/gestionsensor.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:'home',component:HomeComponent,children:[{path:'',component:ContainerComponent},{path:'charts',component:ChartsComponent},{path:'sensor_managment',component:GestionsensorComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
