import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loadedFeature = 'recipe';

  constructor() {}

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
