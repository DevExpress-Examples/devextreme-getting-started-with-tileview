<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { DxTileView, type DxTileViewTypes } from 'devextreme-vue/tile-view';
import notify from 'devextreme/ui/notify';
import { formatNumber } from 'devextreme/localization';
import { bikes } from '@/data.js';

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
