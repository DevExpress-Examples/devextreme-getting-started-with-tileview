import { Component } from '@angular/core';
import { DxTileViewTypes } from 'devextreme-angular/ui/tile-view';
import notify from 'devextreme/ui/notify';
import { formatNumber } from 'devextreme/localization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular';

  // Assign DevExtreme formatNumber to an AppComponent variable to call the function in the template
  formatNumber = formatNumber;

  handleItemClick(e: DxTileViewTypes.ItemClickEvent): void {
    notify(`Price: ${formatNumber(e.itemData.price, 'currency')}`);
  }

  bikes = [{
    id: 1,
    price: 347,
    imageSrc: 'assets/bike-100351718.jpg',
  }, {
    id: 2,
    price: 263,
    imageSrc: 'assets/bike-100596823.jpg',
  }, {
    id: 3,
    price: 199,
    imageSrc: 'assets/bike-102148546.jpg',
    disabled: true,
  }, {
    id: 4,
    price: 183,
    imageSrc: 'assets/bike-102295135.jpg',
  }, {
    id: 5,
    price: 310,
    imageSrc: 'assets/bike-127498832.jpg',
  }, {
    id: 6,
    price: 119,
    imageSrc: 'assets/bike-139876222.jpg',
  }, {
    id: 7,
    price: 393,
    imageSrc: 'assets/bike-140502955.jpg',
    disabled: true,
  }, {
    id: 8,
    price: 209,
    imageSrc: 'assets/bike-141074368.jpg',
  }, {
    id: 9,
    price: 271,
    imageSrc: 'assets/bike-150288776.jpg',
  }, {
    id: 10,
    price: 382,
    imageSrc: 'assets/bike-151383566.jpg',
  }, {
    id: 11,
    price: 351,
    imageSrc: 'assets/bike-154285904.jpg',
    disabled: true,
  }, {
    id: 12,
    price: 278,
    imageSrc: 'assets/bike-163737746.jpg',
    disabled: true,
  }, {
    id: 13,
    price: 328,
    imageSrc: 'assets/bike-237259474.jpg',
  }, {
    id: 14,
    price: 117,
    imageSrc: 'assets/bike-264576329.jpg',
  }, {
    id: 15,
    price: 384,
    imageSrc: 'assets/bike-269977580.jpg',
  }, {
    id: 16,
    price: 226,
    imageSrc: 'assets/bike-277653266.jpg',
  }, {
    id: 17,
    price: 205,
    imageSrc: 'assets/bike-296009759.jpg',
  }, {
    id: 18,
    price: 398,
    imageSrc: 'assets/bike-324242990.jpg',
    disabled: true,
  }, {
    id: 19,
    price: 136,
    imageSrc: 'assets/bike-331626269.jpg',
  }, {
    id: 20,
    price: 244,
    imageSrc: 'assets/bike-361135133.jpg',
  }, {
    id: 21,
    price: 203,
    imageSrc: 'assets/bike-59094319.jpg',
    disabled: true,
  }, {
    id: 22,
    price: 297,
    imageSrc: 'assets/bike-59094328.jpg',
  }, {
    id: 23,
    price: 369,
    imageSrc: 'assets/bike-59094343.jpg',
  }, {
    id: 24,
    price: 239,
    imageSrc: 'assets/bike-71772073.jpg',
  }, {
    id: 25,
    price: 172,
    imageSrc: 'assets/bike-79912432.jpg',
  }, {
    id: 26,
    price: 191,
    imageSrc: 'assets/bike-80954299.jpg',
    disabled: true,
  }, {
    id: 27,
    price: 313,
    imageSrc: 'assets/bike-81988162.jpg',
  }];
}
