var BigCollection = Backbone.Collection.extend({
  model: Big,
  url: "https://api.getchute.com/v2/albums/aus6kwrg/assets?type=image&tags=surfing&per_page=20",
   parse: function (response) {
      return response.data;
    },
});

