Zanga.Views.PostsIndex = Backbone.View.extend({
  initialize: function (){
    this.collection = new Zanga.Collections.Posts();
    this.listenTo(this.collection, 'remove', this.render);
    this.listenTo(this.collection, 'reset', this.render);
  },

  template: JST['postsIndex'],
  tagName: "ul",

  render: function (){
    this.$el.empty();

    this.collection.each( function (post){
      var postLi = new Zanga.Views.PostsIndexItem({
        model: post, collection: this.collection});
      this.$el.append(postLi.render().$el);
    }.bind(this));

    return this;
  },

  refreshPosts: function (callback) {
    this.collection.fetch({success: callback, reset: true});
  }
});
