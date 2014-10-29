var Big = Backbone.View.extend({
    initialize: function () {
        var that = this;
        this.collection = new BigCollection();
        // this.collection.bind("reset", this.render, this);
        // this.collection.bind("change", this.render, this);
        this.collection.fetch().done(function(){
          console.log(that.collection.models);
          return that.collection.models;
        });
    },
    render: function () {
        alert("test" + this.collection.toJSON());
    },
});
// var myBig = new Big();