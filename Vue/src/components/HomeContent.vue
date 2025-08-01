<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { DxTileView, type DxTileViewTypes } from 'devextreme-vue/tile-view';
import notify from 'devextreme/ui/notify';
import { formatNumber } from 'devextreme/localization';

const bikes = [{
  id: 1,
  price: 347,
  imageSrc: '/bike-catalog/bike-100351718.jpg',
}, {
  id: 2,
  price: 263,
  imageSrc: '/bike-catalog/bike-100596823.jpg',
}, {
  id: 3,
  price: 199,
  imageSrc: '/bike-catalog/bike-102148546.jpg',
  disabled: true,
}, {
  id: 4,
  price: 183,
  imageSrc: '/bike-catalog/bike-102295135.jpg',
}, {
  id: 5,
  price: 310,
  imageSrc: '/bike-catalog/bike-127498832.jpg',
}, {
  id: 6,
  price: 119,
  imageSrc: '/bike-catalog/bike-139876222.jpg',
}, {
  id: 7,
  price: 393,
  imageSrc: '/bike-catalog/bike-140502955.jpg',
  disabled: true,
}, {
  id: 8,
  price: 209,
  imageSrc: '/bike-catalog/bike-141074368.jpg',
}, {
  id: 9,
  price: 271,
  imageSrc: '/bike-catalog/bike-150288776.jpg',
}, {
  id: 10,
  price: 382,
  imageSrc: '/bike-catalog/bike-151383566.jpg',
}, {
  id: 11,
  price: 351,
  imageSrc: '/bike-catalog/bike-154285904.jpg',
  disabled: true,
}, {
  id: 12,
  price: 278,
  imageSrc: '/bike-catalog/bike-163737746.jpg',
  disabled: true,
}, {
  id: 13,
  price: 328,
  imageSrc: '/bike-catalog/bike-237259474.jpg',
}, {
  id: 14,
  price: 117,
  imageSrc: '/bike-catalog/bike-264576329.jpg',
}, {
  id: 15,
  price: 384,
  imageSrc: '/bike-catalog/bike-269977580.jpg',
}, {
  id: 16,
  price: 226,
  imageSrc: '/bike-catalog/bike-277653266.jpg',
}, {
  id: 17,
  price: 205,
  imageSrc: '/bike-catalog/bike-296009759.jpg',
}, {
  id: 18,
  price: 398,
  imageSrc: '/bike-catalog/bike-324242990.jpg',
  disabled: true,
}, {
  id: 19,
  price: 136,
  imageSrc: '/bike-catalog/bike-331626269.jpg',
}, {
  id: 20,
  price: 244,
  imageSrc: '/bike-catalog/bike-361135133.jpg',
}, {
  id: 21,
  price: 203,
  imageSrc: '/bike-catalog/bike-59094319.jpg',
  disabled: true,
}, {
  id: 22,
  price: 297,
  imageSrc: '/bike-catalog/bike-59094328.jpg',
}, {
  id: 23,
  price: 369,
  imageSrc: '/bike-catalog/bike-59094343.jpg',
}, {
  id: 24,
  price: 239,
  imageSrc: '/bike-catalog/bike-71772073.jpg',
}, {
  id: 25,
  price: 172,
  imageSrc: '/bike-catalog/bike-79912432.jpg',
}, {
  id: 26,
  price: 191,
  imageSrc: '/bike-catalog/bike-80954299.jpg',
  disabled: true,
}, {
  id: 27,
  price: 313,
  imageSrc: '/bike-catalog/bike-81988162.jpg',
}];

function handleItemClick(e: DxTileViewTypes.ItemClickEvent) {
  notify(`Price: ${formatNumber(e.itemData.price, 'currency')}`);
}
</script>
<template>
  <div>
    <DxTileView
      :data-source="bikes"
      :item-margin="5"
      :base-item-width="175"
      :base-item-height="175"
      show-scrollbar="always"
      :height="370"
      item-template="tileTemplate"
      @item-click="handleItemClick"
    >
      <template #tileTemplate="data">
        <div
          v-if="!data.data.disabled"
          class="image"
          :style="{ 'background-image': `url(${data.data.imageSrc})` }"
        >
          <p class="price-text">{{ formatNumber(data.data.price, 'currency') }}</p>
        </div>
        <div
          v-else
          class="image"
          :style="{ 'background-image': `url(${data.data.imageSrc})`, 'opacity': '50%' }"
        >
          <p class="price-text">Out of stock</p>
        </div>
      </template>
    </DxTileView>
  </div>
</template>

<style scoped>
.dx-tile-content.image {
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
  padding: 5px;
}

.price-text {
  margin: 0;
}
</style>
