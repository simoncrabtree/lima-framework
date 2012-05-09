define(['dojo/topic'], function(topic){
  topic.subscribe('InvokeFeature', function(featurePath){
    require([featurePath], function(feature){
      feature.invoke();
    });
  });
});
