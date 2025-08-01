import { Component } from '@angular/core';
import { DxTileViewTypes } from 'devextreme-angular/ui/tile-view';
import notify from 'devextreme/ui/notify';
import { formatNumber } from 'devextreme/localization';
import { bikes } from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';

  // Create local versions of formatNumber and bikes to implement in app.component.html
  formatNumber = formatNumber;
  bikes = bikes;

  handleItemClick(e: DxTileViewTypes.ItemClickEvent): void {
    notify(`Price: ${formatNumber(e.itemData.price, 'currency')}`);
  }
}
