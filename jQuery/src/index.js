$(() => {
  $('#tileview').dxTileView({
    items: bikes,
    itemMargin: 5,
    baseItemWidth: 175,
    baseItemHeight: 175,
    showScrollbar: 'always',
    height: 370,
    itemTemplate(itemData, itemIndex, itemElement) {
      const text = itemData.disabled ? 'Out of stock' : DevExpress.localization.formatNumber(itemData.price, 'currency');

      const element = $('<div>')
        .addClass('image')
        .css('background-image', `url(${itemData.imageSrc})`)
        .append($('<p>')
          .text(text)
          .addClass('price-text'));

      if (itemData.disabled) {
        element.css('opacity', '50%');
      }

      itemElement.append(element);
    },
    onItemClick(e) {
      DevExpress.ui.notify(`Price: ${DevExpress.localization.formatNumber(e.itemData.price, 'currency')}`);
    },
  });
});
