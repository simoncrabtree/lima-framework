define([
       'dojo/topic',
       'lima/featureManager',
       'dojo/domReady!'
],
function(topic){
  console.log('Example App Ready');

  topic.publish('InvokeFeature', 'example/views/viewOne/Controller');

});
