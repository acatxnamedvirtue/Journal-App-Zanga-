Zanga.Views.PostShow = Backbone.View.extend({
  template: JST['postShow'],
  events: {
    'click .edit' : 'editPost',
    'click .delete' : 'deletePost'
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ post: this.model })
    this.$el.html(content);
    return this;
  },

  editPost: function (e) {
    Backbone.history.navigate("posts/" + this.model.id + "/edit", {trigger: true});
  },

  deletePost: function (e) {
    this.model.destroy();
    Backbone.history.navigate("", {trigger: true});
  }
})
