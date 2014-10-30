 var Router = Backbone.Router.extend({
  routes:{
    "": "galleryWall"
  },
  galleryWall: function(){
    var photoCollection = new BigCollection();
    var myView = new BigView({
      collection:photoCollection
    });
    $('#thumbnails').html(myView.render().$el)
    myView.collection.fetch({
      reset: true
    });
  },

});

var router = new Router();
Backbone.history.start();
