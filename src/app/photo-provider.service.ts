import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import {LoadingController} from '@ionic/angular';

class Photo {
    data: any;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoProviderService {
    public photos: Photo[] = [];

    constructor(public http: HttpClient, private camera: Camera, private storage: Storage, private loadingController: LoadingController) { }

    takePicture() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            this.photos.unshift({
                data: 'data:image/jpeg;base64,' + imageData
            });
            this.storage.set('photos', this.photos);
        }, (err) => {
            // Handle error
            console.log('Camera issue:' + err);
        });
    }

    async loadSaved() {
        this.loadingController.create({}).then((loader) => {
            loader.present();
            this.storage.get('photos').then((photos) => {
                this.photos = photos || [];
                loader.dismiss();
            });
        });
        return await true;
    }
}
