var BigView = Backbone.View.extend({
  initialize: function () {
        this.listenTo(this.collection, "reset", this.render);
        this.listenTo(this.collection, "change", this.render);
    },
    template: _.template($('#gallery-template').html()),
    render: function () {
      var that = this;
      console.log(this.collection.toJSON());
      this.$el.html(this.template({collection:this.collection.toJSON()}));
      return this;
    },
});