var BigCollection = Backbone.Collection.extend({
  model: Big,
  url: "https://api.getchute.com/v2/albums/aus6kwrg/assets?type=image&tags=surfing&per_page=50",
  parse: function (response) {
    var dataHash = response.data;
    return _.map(dataHash, function(photoInfo){
      return {
        url: photoInfo.url
      }
    });
  },
});


