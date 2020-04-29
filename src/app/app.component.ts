import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'freelancini';
  constructor() {
    const config = {
    apiKey: "AIzaSyC1zKllyXkc2rSv5Rz4GJEKAkInJv1sVEg",
    authDomain: "freelancini-1e0e3.firebaseapp.com",
    databaseURL: "https://freelancini-1e0e3.firebaseio.com",
    projectId: "freelancini-1e0e3",
    storageBucket: "freelancini-1e0e3.appspot.com",
    messagingSenderId: "460007213830",
    appId: "1:460007213830:web:6d6250d0c1118c04c86c87",
    measurementId: "G-R27EBYKBBV"
    };
    firebase.initializeApp(config);
  }
}
