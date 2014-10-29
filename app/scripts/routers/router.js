 var Router = Backbone.Router.extend({
  routes:{
    "": "galleryWall"
    "": "bigGalleryWall"
  },
  galleryWall: function(){
    var thumbsCollection = new ThumbsCollection();
    var myThumbView = new ThumbView({
      collection:thumbsCollection
    });
    $('#thumbnails').html(myThumbView.render().$el)
    myThumbView.collection.fetch({
      reset: true
    });
  },

});

var router = new Router();
Backbone.history.start();
