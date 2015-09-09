Zanga.Views.PostsIndexItem = Backbone.View.extend({
  template: JST['postsIndexItem'],
  tagName: "li",
  events: {
    'click .delete' : 'deletePost'
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  deletePost: function (e) {
    this.model.destroy();
  }
});
