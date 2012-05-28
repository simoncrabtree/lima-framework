define([
       'dojo/topic',
       'lima/featureManager',
       'dojo/domReady!'
],
function(topic, featureManager){
  console.log('Example App Ready');

  featureManager.setFeatureRootDirectory('example/features');
  featureManager.setAvailableFeatures([
                                      'show_hello_world',
                                      'show_vehicle_journeys'
  ]);

  topic.publish('InvokeFeature', 'show_vehicle_journeys');
  //topic.publish('InvokeFeature', 'show_hello_world');
});
