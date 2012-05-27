define(['lima/featureManager',
       'lima/viewManager',
       'dojo/topic',
       'limaSpecs/fixtures/testViewOne/View',
       'limaSpecs/fixtures/features/show_view_one'
],
function(featureManager, viewManager, topic, testFeature, TestViewOne){
  describe('The Feature Manager', function(){

    describe('when InvokeFeature is published for a "View"', function(){
      beforeEach(function(){
        spyOn(viewManager, 'createView');
        var features = [
          'show_view_one'
        ];

        featureManager.setFeatureRootDirectory('limaSpecs/fixtures/features');
        featureManager.setAvailableFeatures(features);
        topic.publish('InvokeFeature', 'show_view_one');
      });

      it("Passes the View to the viewManager's showView method" , function(){
        expect(viewManager.createView).toHaveBeenCalled();
      });
    });
  });
});
