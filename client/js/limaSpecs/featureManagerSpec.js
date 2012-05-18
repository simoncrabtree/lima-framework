define(['lima/featureManager', 'dojo/topic', 'limaSpecs/testFeature'],
       function(featureManager, topic, testFeature){
         describe('The Feature Manager', function(){

           describe('when InvokeFeature is published', function(){
             beforeEach(function(){
               var features = [
                 {key:'show_test_view_one',
                   type:'View',
                   path:'limaSpecs/fixtures/testViewOne/Controller'}
               ];

               featureManager.setAvailableFeatures(features);
             });


             it('invokes the correct feature', function(){
               var invokedFeature;
               var onInvoked = function(feature){
                 invokedFeature = feature;
               };

               topic.publish('InvokeFeature', 'show_test_view_one', {
                 onInvoked: onInvoked
               });

               waitsFor(function(){
                 return invokedFeature;
               }, 1000);

               runs(function(){
                 expect(invokedFeature.specificProperty).toBe('Controller For View One');
               });
             });
           });
         });
       });
