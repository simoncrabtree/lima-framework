define(['lima/featureManager', 'dojo/topic', 'limaSpecs/testFeature'],
       function(featureManager, topic, testFeature){
  describe('The Feature Manager', function(){

    describe('When the InvokeFeature topic is published', function(){

      beforeEach(function(){
        spyOn(testFeature, 'invoke');
        topic.publish('InvokeFeature', 'limaSpecs/testFeature');
      });

      it('Loads and Invokes the correct feature', function(){
        expect(testFeature.invoke).toHaveBeenCalled();
      });
    });
  });

});
