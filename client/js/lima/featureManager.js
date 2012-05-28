define(['dojo/topic',
       'dojo/_base/array',
       'lima/viewManager'
], function(topic, array, viewManager){

  var featureRootDirectory;

  return {
    setFeatureRootDirectory: function(rootDirectory){
      featureRootDirectory = rootDirectory;
    },

    setAvailableFeatures: function(features){
      topic.subscribe('InvokeFeature', function(featureToInvoke){
        var matchingFeature = array.filter(features, function(item){
          return item === featureToInvoke;
        })[0];

        if(matchingFeature){
          require([featureRootDirectory + '/' + featureToInvoke], function(feature){
            if(feature.view){
              viewManager.createView(feature.view, function(view){
                if(view.invoke){
                  view.invoke();
                } else {
                  throw new 'View ' + feature.view + ' needs an invoke method!';
                }
              });
            }
          });
        } else {
          throw 'Unknown Feature:' + featureToInvoke;
        }

      });
    }
  };
});
