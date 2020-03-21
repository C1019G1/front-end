import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AppRoutingModule} from '../app-routing.module';

const firebaseConfig = {
  apiKey: 'AIzaSyD9VLzRq6DwX-CaCqkEhiGP-IH0TnSllbQ',
  authDomain: 'c1019-dau-gia.firebaseapp.com',
  databaseURL: 'https://c1019-dau-gia.firebaseio.com',
  projectId: 'c1019-dau-gia',
  storageBucket: 'c1019-dau-gia.appspot.com',
  messagingSenderId: '329990344373',
  appId: '1:329990344373:web:208a28cea912b5919ff8fc',
  measurementId: 'G-J3RKWBQ4CY'
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, AppRoutingModule // storage
  ],
})
export class FirebaseModule {
}
