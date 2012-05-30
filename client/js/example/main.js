define([
       'dojo/topic',
       'lima/featureManager',
       'lima/List',
       'dojo/domReady!'
],
function(topic, featureManager, List){
  console.log('Example App Ready');

  featureManager.setFeatureRootDirectory('example/features');
  featureManager.setAvailableFeatures([
                                      'show_hello_world',
                                      'show_vehicle_journeys'
  ]);

  window.lima = {list: List};
  topic.publish('InvokeFeature', 'show_vehicle_journeys');
  //topic.publish('InvokeFeature', 'show_hello_world');
});
