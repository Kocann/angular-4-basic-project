import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  activeElement = 'recipes';

  changeActivePanel(activatePanel: {activePanel: string}) {
    this.activeElement = activatePanel.activePanel;
  }
}
