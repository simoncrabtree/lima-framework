define(['dojo/_base/declare',
       'lima/_TemplatedView'
],
function(declare, _ViewBase){
  return {
    showView: function (viewPath) {
      require([viewPath], function(viewObject){
        var viewClass = declare([_ViewBase], view);
        var view = new viewClass();
      });
    }
  };
});
