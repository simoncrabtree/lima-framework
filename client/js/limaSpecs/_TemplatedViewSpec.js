define(['lima/_TemplatedView',
       'dojo/_base/xhr'
], function (_TemplatedView, xhr) {
  describe('Templated View Base Class', function () {
    describe('getData method', function () {

      var viewBase;
      beforeEach(function () {
        viewBase = new _TemplatedView();
        viewBase.onSuccess = function (data) {
          this.dataReceived = data;
        };
        spyOn(xhr, 'get');
        viewBase.getData('test/url', viewBase.onSuccess);
      });

      it('Calls dojo xhr.get with the correct arguments', function(){
        expect(xhr.get).toHaveBeenCalled();
        var args = xhr.get.mostRecentCall.args[0];
        expect(args.url).toBe('test/url');
        expect(args.handleAs).toBe('json');
        args.load({myData: 'Some Data'});
        expect(viewBase.dataReceived.myData).toBe('Some Data');
      });
    });
  });
});
