define([
       'dojo/topic',
       'lima/viewManager',
       'lima/featureManager',
       'dojo/domReady!'
],
function(topic, viewManager){
  console.log('Example App Ready');

  viewManager.showView('example/views/viewOne/View');
});
