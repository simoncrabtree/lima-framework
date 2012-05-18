define([
       'dojo/_base/declare',
       'dijit/_WidgetBase',
       'dijit/_TemplatedMixin',
       'dijit/_WidgetsInTemplateMixin'
],
function(declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin){
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], 
                 {
                   templateString: '<div>This is the View Base</div>'
                 });
});
