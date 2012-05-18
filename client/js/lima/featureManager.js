"use strict";
define(['dojo/topic', 'dojo/_base/array'], function(topic, array){
  return {
    setAvailableFeatures: function(features){
      topic.subscribe('InvokeFeature', function(featureToInvoke, options){
        var matchingFeature = array.filter(features, function(item){
          return item.key === featureToInvoke;
        })[0];

        if(matchingFeature){
          require([matchingFeature.path], function(feature){
            feature.invoke();
            if(options.onInvoked){
              options.onInvoked(feature);
            }
          });
        } else {
          throw 'Unknown Feature:' + featureToInvoke;
        }

      });
    }
  };
});
