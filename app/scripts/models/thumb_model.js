var Thumb = Backbone.Model.extend({
  parse:function(response){
      return{
      thumb: response.thumbnail
    }
  }
});