define([
       'dojo/_base/lang',
       'lima/_TemplatedView'
],
function (lang, _TemplatedView) {

  var view;

  function createView (path) {
    var templatePath = 'dojo/text!' + path + '.html';
    require([path, templatePath], function(customisedView, template){
      view = new _TemplatedView({templateString: template});
      lang.mixin(view, customisedView);
      view.placeAt(dojo.body());
    });
  }

  return {
    invoke: function () {
      createView('example/views/viewOne/View');
    }
  };
});
