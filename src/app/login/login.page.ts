import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  constructor(private router : Router, public alert: AlertController) {}
 form: NgForm;

  login(form){
    if( form.value.email== "admin@gmail.com" && form.value.password =="admin")
    {
      this.router.navigate(['profile']);
      form.resetForm();
    }

    else{
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Message',
      subHeader: '',
      message: 'Password not correct.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
