import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  activeElement = 'recipes';

  changeActivePanel(activatePanel: {activePanel: string}) {
    this.activeElement = activatePanel.activePanel;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD9yN74y2fwij90kVkICoFhmoS8G1en8cY",
      authDomain: "trololo-93310.firebaseapp.com"
    });
  }
}
