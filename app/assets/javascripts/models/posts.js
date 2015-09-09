Zanga.Models.Post = Backbone.Model.extend({
  urlRoot: "posts/",

  toJSON: function() {
    return {post: _.clone(this.attributes)};
  }
})
