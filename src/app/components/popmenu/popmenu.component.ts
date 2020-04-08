import { Component, OnInit } from '@angular/core';
import { NavController,AlertController ,ModalController,PopoverController} from '@ionic/angular';


@Component({
  selector: 'popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss']
})
export class PopmenuComponent implements OnInit {
  openMenu: Boolean = false;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public mdlCtrl:ModalController,
    public popCtrl:PopoverController) { }

  ngOnInit() {
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }
 
  
}
