define(function(){
  return {
    invoke: function () {
      this.getData('query/helloworld', this.displayMessage);
    },

    displayMessage: function (viewData) {
      this.message.innerHTML = viewData.message;
      this.show();
    },

    messageClicked: function () {
      console.log('Message clicked');
      this.getData('query/version', this.displayVersion);
    },

    displayVersion: function(data) {
      this.message.innerHTML = data.version;
    }

  };
});
