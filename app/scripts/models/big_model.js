var Big = Backbone.Model.extend({
  parse:function(response){
      return{
      url: response.url
    }
  }
});