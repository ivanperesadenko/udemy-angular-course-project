import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  public collapsed = true;
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {}

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }
}
