window.Zanga = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Zanga.Routers.PostRouter($('.content'));
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Zanga.initialize();
});
