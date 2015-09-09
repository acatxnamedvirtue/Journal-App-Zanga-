Zanga.Views.PostShow = Backbone.View.extend({
  template: JST['postShow'],
  events: {
    'click .edit' : 'editPost'
  },

  render: function () {
    var content = this.template({ post: this.model })
    this.$el.html(content);
    return this;
  },

  editPost: function (e) {
    Backbone.history.navigate("posts/" + this.model.id + "/edit", {trigger: true});
  }
})
