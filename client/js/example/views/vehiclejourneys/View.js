define(function () {
  return {
    invoke: function () {
      this.getData('query/vehiclejourneys', this.viewDataReceived);
    },

    viewDataReceived: function (data) {
      this.setClass('hasVehicleJourneys', data.length > 0);
      this.setClass('onlyOneVehicle', data.length === 1);
      this.journeyList.renderData(data);
      this.show();
    },

    refresh: function () {
      console.log('Refresh Data!');
    }
  };
});
