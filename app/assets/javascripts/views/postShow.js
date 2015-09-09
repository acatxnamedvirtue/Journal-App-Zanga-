Zanga.Views.PostShow = Backbone.View.extend({
  template: JST['postShow'],
  events: {
    'click .delete' : 'deletePost',
    'dblclick .title-area' : 'editTitle',
    'dblclick .body-area' : 'editBody',
    'blur .title-input' : 'saveTitle',
    'blur .body-input' : 'saveBody'
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({ post: this.model })
    this.$el.html(content);
    return this;
  },

  deletePost: function (e) {
    this.model.destroy();
    Backbone.history.navigate("", {trigger: true});
  },

  editTitle: function (e){
    $(e.currentTarget).html($("<input class=\"title-input\" type=\"text\" name=\"post[title]\" value=\"" +
     this.model.get('title') + "\">"));
  },

  saveTitle: function (e){
    var title = $(e.currentTarget).val();
    this.model.save({title: title});
  },

  editBody: function (e){
    $(e.currentTarget).html($("<textarea class=\"body-input\" name=\"post[title]\">"+
     this.model.get('body') + "</textarea>"));
  },

  saveBody: function (e){
    var body = $(e.currentTarget).val();
    this.model.save({body: body});
  }
})
