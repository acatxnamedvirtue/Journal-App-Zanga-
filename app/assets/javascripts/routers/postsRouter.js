Zanga.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "posts/new" : "postNew",
    "posts/:id" : "postShow",
    "posts/:id/edit" : "postEdit"
  },

  initialize: function ($el, postIndex){
    this.$el = $el;
    this._postsIndex = postIndex;
  },

  postShow: function (id){
    var post = this._postsIndex.collection.getOrFetch(id);
    this._swapPost(new Zanga.Views.PostShow({model: post}));
  },

  postEdit: function (id){
    var post = this._postsIndex.collection.getOrFetch(id);
    this._swapPost(new Zanga.Views.PostForm(
      { model: post, collection: this._postsIndex.collection }
    ));
  },

  postNew: function() {
    var post = new Zanga.Models.Post();
    this._swapPost(new Zanga.Views.PostForm(
      { model: post, collection: this._postsIndex.collection }
    ));
  },

  _swapPost: function (view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(view.render().$el);
  }
});
