Zanga.Views.PostForm = Backbone.View.extend({
  template: JST['postForm'],
  tagName: 'form',
  className: 'post-form',
  events: {
    'submit' : 'submitForm'
  },

  render: function() {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  submitForm: function(e) {
    e.preventDefault();
    var formData = $(e.currentTarget).serializeJSON();
    this.model.set(formData.post);
    this.model.save({}, {
      success: function() {
        Backbone.history.navigate("posts/" + this.model.id, {trigger: true});
      }.bind(this),
      error: function(data, res) {
        this.$el.find('.errors').empty()
        _(res.responseJSON).each(function(el) {
          this.$el.find('.errors').append(el + "<br><br>")
        }.bind(this))
      }.bind(this)
    });
  }
})