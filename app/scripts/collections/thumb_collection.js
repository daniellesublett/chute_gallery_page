var ThumbsCollection = Backbone.Collection.extend({
  model: Thumb,
  url: "https://api.getchute.com/v2/albums/aus6kwrg/assets?type=image&tags=surfing&per_page=50",
   parse: function (response) {
      return response.data;
    },
});