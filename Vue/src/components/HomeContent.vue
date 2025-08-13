<script setup lang="ts">
import 'devextreme/dist/css/dx.fluent.blue.dark.css';
import { DxTileView, type DxTileViewTypes } from 'devextreme-vue/tile-view';
import notify from 'devextreme/ui/notify';
import { formatNumber } from 'devextreme/localization';
import { tiles } from '@/data.js';

</script>
<template>
  <div class="demo-container">
    <DxTileView
      :data-source="tiles"
      :item-margin="16"
      :base-item-width="280"
      :base-item-height="160"
      :width="608"
      :height="368"
      :active-state-enabled="false"
      item-template="tileTemplate"
    >
      <template #tileTemplate="data">
        <div class="icon-box">
          <i :class="`dx-icon-${data.data.icon}`"></i>
        </div>
        <div class="text-box">
          <h3 class="tile-title">{{data.data.title}}</h3>
          <p class="tile-text">{{data.data.text}}</p>
        </div>
      </template>
    </DxTileView>
  </div>
</template>

<style scoped>

</style>
