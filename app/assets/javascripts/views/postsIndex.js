Zanga.Views.PostsIndex = Backbone.View.extend({
  initialize: function (){
    this.collection = new Zanga.Collections.Posts();
    this.listenTo(this.collection, 'remove reset sync change', this.render);
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

  refreshPosts: function () {
    this.collection.fetch({reset: true});
  }
});
