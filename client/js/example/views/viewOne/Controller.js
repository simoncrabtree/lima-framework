define(['example/views/viewOne/View'], function (View) {
  return {
    invoke: function () {
      var view = new View();
      view.placeAt(dojo.body());
    }
  };
});
