Zanga.Views.PostsIndexItem = Backbone.View.extend({
  template: JST['postsIndexItem'],
  tagName: "li",
  events: {
    'click .delete' : 'deletePost',
    'click .edit' : 'editPost'
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    return this;
  },

  deletePost: function (e) {
    this.model.destroy();
  },

  editPost: function (e) {
    Backbone.history.navigate("posts/" + this.model.id + "/edit", {trigger: true});
  }
});
