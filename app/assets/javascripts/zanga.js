window.Zanga = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var sidebar = new Zanga.Views.PostsIndex();
    $('.sidebar').html(sidebar.render().$el);
    sidebar.refreshPosts();
    new Zanga.Routers.PostRouter($('.content'), sidebar);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Zanga.initialize();
});
