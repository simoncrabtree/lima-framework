define([
       'dojo/_base/declare',
       'dijit/_WidgetBase',
       'dijit/_TemplatedMixin',
       'dijit/_WidgetsInTemplateMixin',
       'dojo/_base/xhr',
       'dojo/_base/lang',
       'dojo/dom-class'
],
function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, xhr, lang, domClass){
  return declare(
    [_WidgetBase,
      _TemplatedMixin,
      _WidgetsInTemplateMixin
  ],
  {
    templateString: '<div>This is the View Base</div>',

    show: function () {
      this.placeAt('viewPanel');
    },

    getData: function(url, onSuccess){
      var self = this;
      xhr.get({
        url: url,
        load: lang.hitch(self, onSuccess),
        handleAs: 'json'
      });
    },

    setClass: function(className, condition){
      domClass.toggle(this.domNode, className, condition);
    }
  });
});
