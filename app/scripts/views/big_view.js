var BigView = Backbone.View.extend({
  currentPage : 1,
  perPage: 3,

  initialize: function () {
        this.listenTo(this.collection, "reset", this.render);
        this.listenTo(this.collection, "change", this.render);
    },
    template: _.template($('#gallery-template').html()),
  paginate: function(){
    console.log(this.collection.slice((this.currentPage-1) *this.perPage, this.currentPage * this.perPage));
    return this.collection.slice((this.currentPage-1) *this.perPage, this.currentPage * this.perPage);
  },

  nextPage: function(){
    this.currentPage = this.currentPage+1;
    this.render();
    // console.log(this);
  },

  previousPage: function(){
    this.currentPage = this.currentPage-1;
    this.render();
  },

  events: {
    "click #next-page" : "nextPage",
    "click #previous-page" : "previousPage",
  },

    render: function () {
      var that = this;
      // console.log(this.collection);
      // console.log(this.collection.models.slice(0,5));
      this.$el.html(this.template({
        photos: this.paginate()
        }));
      return this;
    },
});