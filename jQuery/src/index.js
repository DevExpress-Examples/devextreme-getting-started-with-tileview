$(() => {
  $('#tileview').dxTileView({
    dataSource: tiles,
    itemMargin: 16,
    baseItemWidth: 280,
    baseItemHeight: 160,
    width: 608,
    height: 368,
    activeStateEnabled: false,
    itemTemplate(itemData, itemIndex, itemElement) {
      const iconBox = $('<div>')
        .addClass('icon-box')
        .append($('<i>')
          .addClass(`dx-icon-${itemData.icon}`)
        );

      const textBox = $('<div>')
        .addClass('text-box')
        .append(
          $('<h3>')
            .addClass('tile-title')
            .text(itemData.title),
          $('<p>')
            .addClass('tile-text')
            .text(itemData.text),
        );

      itemElement.append(iconBox);
      itemElement.append(textBox);
    },
  });
});
