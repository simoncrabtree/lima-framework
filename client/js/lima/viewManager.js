define(['dojo/_base/declare',
       'lima/_TemplatedView'
],
function(declare, _ViewBase){

  return {
    createView: function (viewPath, onViewShownCallback) {
      var self = this;
      var templatePath = viewPath + '.html';
      var viewPanel = this.viewPanel || 'viewPanel';
      require([viewPath, 'dojo/text!' + templatePath], function(viewObject, template){
        var viewClass = declare([_ViewBase], viewObject);
        self.currentView = new viewClass({
          templateString: template
        });
        
        self.currentView.invoke();
        if(onViewShownCallback){
          onViewShownCallback(viewInstance);
        }
      });
    }

  };
});
