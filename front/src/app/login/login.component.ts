import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {SensorService} from 'src/app/service/sensor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message;
  loading = false;
  registerForm: FormGroup;
  submitted = false;

  username
  password ;
  constructor(private router: Router,private formBuilder: FormBuilder,private sensorService:SensorService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }
  authentifer() {
    this.submitted = true;

    if (this.registerForm.invalid) {

      return
    }
    this.sensorService.login(this.registerForm.value['username'], this.registerForm.value['password']).subscribe(res => {


        console.log(res);
        console.log(this.registerForm.value['username']);
        console.log(this.registerForm.value['password']);

        if (JSON.parse(JSON.stringify(res)).status === "success") {
          localStorage.setItem('token', JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data.token)));
          localStorage.setItem('user', JSON.stringify(JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(res)).data)).user));
          this.router.navigate(['/home/charts'])
        } else {

          if (JSON.parse(JSON.stringify(res)).status === "erreur") {
            Swal.fire('Erreur', 'Merci de vérifier votre username et password!', 'error')
            this.registerForm.reset()

          }
        }
      }
    )
  }
  get l() {

    return this.registerForm.controls;
  }
  Reg(){

    
    this.router.navigate(['/register']);

  }
}
