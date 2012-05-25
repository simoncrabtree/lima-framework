define(['dojo/_base/declare',
       'lima/_TemplatedView'
],
function(declare, _ViewBase){

  return {
    showView: function (viewPath, onViewShownCallback) {
      var templatePath = viewPath + '.html';
      var viewPanel = this.viewPanel || 'viewPanel';
      require([viewPath, 'dojo/text!' + templatePath], function(viewObject, template){
        var viewClass = declare([_ViewBase], viewObject);
        var viewInstance = new viewClass({
          templateString: template
        });
        viewInstance.placeAt(viewPanel);
        if(onViewShownCallback){
          onViewShownCallback(viewInstance);
        }
      });
    }

  };
});
