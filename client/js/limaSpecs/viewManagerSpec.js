define(['lima/viewManager',
       'limaSpecs/fixtures/testViewOne/View',
       'dojo/text!limaSpecs/fixtures/testViewOne/View.html'
], function(viewManager){
  describe('View Manager', function(){
    describe('When showView is called with a view class name', function(){

      var viewShown;
      beforeEach(function(){
        viewShown = undefined;
        viewManager.viewPanel = dojo.create('div');
        viewManager.showView('limaSpecs/fixtures/testViewOne/View', function(view){
          viewShown = view;
        });
      });

      it('Creates a new instance of a _TemplatedView which has the specific behaviour of testViewOne', function(){
        expect(viewShown.templateString).toContain('<h1>Test View One</h1>');
        expect(viewShown.specificMethodInViewOne).toBeDefined();
      });

      it('Puts the view into the viewPanel domNode', function(){
        expect(viewManager.viewPanel.innerHTML).toContain('Test View One');
      });
    });
  });
});
