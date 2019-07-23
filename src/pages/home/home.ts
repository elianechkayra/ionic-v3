import { Component } from '@angular/core';
import { NavController, IonicPage ,AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  my_name: string = 'eliane';
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    const new_name = 'naji';
    this.changeName(new_name, 3000);
  }

  changeName(nameValue: string, timeoutValue: number = 5000){
    setTimeout(() => {
      this.my_name = nameValue
    }, timeoutValue);
  }

  openPopup(str){
    let my_alert = this.alertCtrl.create({
      title: 'My Alert Title',
      subTitle: '* '+str+' *',
      message: 'Hello from the other side',
      buttons: [
        'Dismiss'
      ]

    });
    my_alert.present();
  }

}
