define(['dojo/_base/declare',
       'dgrid/OnDemandList',
       'dojo/dom-construct',
       'dojo/store/Memory'
], function(declare, List, domConstruct, MemoryStore) {
  return declare([List], {

    renderRow: function (item) {
      return domConstruct.create('div', {innerHTML: item.registration});
    },

    renderData: function (data) {
      this.set('store', new MemoryStore({
        idProperty: 'id',
        data: data
      }));
      this.resize();
    }
  });
});
