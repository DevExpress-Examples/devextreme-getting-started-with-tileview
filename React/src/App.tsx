import React from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { TileView, type TileViewTypes } from 'devextreme-react/tile-view';
import notify from 'devextreme/ui/notify';
import { formatNumber } from 'devextreme/localization';
import { bikes } from './data.js'

function TileRender(itemData: { price: number; disabled: boolean | undefined; imageSrc: string }): JSX.Element {
  if (!itemData.disabled) {
    return (
      <div className="image" style={{ backgroundImage: `url(${itemData.imageSrc})` }}>
        <p className="price-text">{ formatNumber(itemData.price, 'currency') }</p>
      </div>
    );
  }

  return (
    <div className="image" style={{ backgroundImage: `url(${itemData.imageSrc})`, opacity: '50%' }}>
      <p className="price-text">Out of stock</p>
    </div>
  );
}

function HandleTileClick(e: TileViewTypes.ItemClickEvent): void {
  notify(`Price: ${formatNumber(e.itemData.price, 'currency')}`);
}

function App(): JSX.Element {
  return (
    <React.Fragment>
      <TileView
        dataSource={bikes}
        itemMargin={5}
        baseItemWidth={175}
        baseItemHeight={175}
        showScrollbar="always"
        height={370}
        itemRender={TileRender}
        onItemClick={HandleTileClick}
      ></TileView>
    </React.Fragment>
  );
}

export default App;
