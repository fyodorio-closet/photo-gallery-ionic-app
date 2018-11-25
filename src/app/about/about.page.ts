import {Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { PhotoProviderService } from '../photo-provider.service';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {
    constructor(public navCtrl: NavController, private photoService: PhotoProviderService) {
    }

    ngOnInit() {
        this.photoService.loadSaved();
    }
}
