define(['lima/viewManager',
       'limaSpecs/fixtures/testViewOne/View',
       'dojo/text!limaSpecs/fixtures/testViewOne/View.html'
], function(viewManager){
  describe('View Manager', function(){
    describe('When createView is called with a view class name', function(){

      beforeEach(function(){
        viewManager.viewPanel = dojo.create('div');
        viewManager.createView('limaSpecs/fixtures/testViewOne/View');
      });

      it('Creates a new instance of a _TemplatedView which has the specific behaviour of testViewOne', function(){
        expect(viewManager.currentView.templateString).toContain('<h1>Test View One</h1>');
        expect(viewManager.currentView.specificMethodInViewOne).toBeDefined();
      });

      xit('Puts the view into the viewPanel domNode', function(){
        expect(viewManager.viewPanel.innerHTML).toContain('Test View One');
      });
    });
  });
});
