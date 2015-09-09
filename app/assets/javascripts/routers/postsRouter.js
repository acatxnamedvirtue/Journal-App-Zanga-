Zanga.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "" : "root",
    "posts/new" : "postNew",
    "posts/:id" : "postShow"
  },

  initialize: function ($el, postIndex){
    this.$el = $el;
    this._postsIndex = postIndex;
  },

  root: function (){
    this._currentView && this._currentView.remove();
    this._currentView = null;
  },

  postShow: function (id){
    var post = this._postsIndex.collection.getOrFetch(id);
    this._swapPost(new Zanga.Views.PostShow(
      { model: post, collection: this._postsIndex.collection }
    ));
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
