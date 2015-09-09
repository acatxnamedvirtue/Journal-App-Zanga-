Zanga.Routers.PostRouter = Backbone.Router.extend({
  routes: {
    "" : "postsIndex",
    "posts/new" : "postNew",
    "posts/:id" : "postShow",
    "posts/:id/edit" : "postEdit"
  },

  initialize: function ($el){
    this.$el = $el;
  },

  postsIndex: function (callback){
    this._postsIndex = new Zanga.Views.PostsIndex()
    this._postsIndex.refreshPosts(callback);
    this._swapPost(this._postsIndex);
  },

  postShow: function (id){
    if(this._postsIndex === undefined) {
      this.postsIndex(this.postShow.bind(this, id));
      return;
    }

    var post = this._postsIndex.collection.getOrFetch(id);
    this._swapPost(new Zanga.Views.PostShow({model: post}));
  },

  postEdit: function (id){
    if(this._postsIndex === undefined) {
      this.postsIndex(this.postEdit.bind(this, id));
      return;
    }

    var post = this._postsIndex.collection.getOrFetch(id);
    this._swapPost(new Zanga.Views.PostForm({model: post}));
  },

  postNew: function() {
  },

  _swapPost: function (view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(view.render().$el);
  }
});
