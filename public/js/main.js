$(function(){
  var Router = Backbone.Router.extend({

    routes: {
      "":       "showPage",
      ":page":  "showPage",
      ":page/": "showPage",
    },

    showPage: function(page) {
      page = page || 'accueil';
      $('#content').html(JST[page]);
    }

  });
  new Router();
  Backbone.history.start({pushState: true});
});
