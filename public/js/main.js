window.ff = {};
window.ff.images = {
  mariage : {
     "P1000006.jpg" : 1 ,
     "P1000022.jpg" : 2 ,
     "P1000013.jpg" : 1 ,
     "P1000025.jpg" : 2 ,
     "P1000057.jpg" : 1 ,
     "P1000061.jpg" : 2 ,
     "P1000147.jpg" : 1 ,
     "P1000183.jpg" : 1 ,
     "bouquet mariage.jpg": 3 ,
     "P1000163.jpg" : 2 ,
     "P1000162.jpg" : 2 ,
     "P1000172.jpg" : 1 ,
     "P1000007.jpg" : 2 ,
     "P1000199.jpg" : 1 ,
     "P1000015.jpg" : 1 ,
     "P1000026.jpg" : 2 ,
     "P1000058.jpg" : 2 ,
     "P1000010.jpg" : 1 ,
     "P1000184.jpg" : 3 ,
     "P1000060.jpg" : 1 ,
     "P1000024.jpg" : 1 ,
     "DSC_0051.jpg" : 2 ,
     "P1000062.jpg" : 2 ,
     "P1000156.jpg" : 2 ,
     "P1000157.jpg" : 1 ,
     "P1000164.jpg" : 1 ,
     "P1000219.jpg" : 2 ,
     "P1000019.jpg" : 2 ,
     "P1000063.jpg" : 2 ,
     "P1000248.jpg" : 2 ,
      "296.JPG": 1,
      "233.JPG": 2,
      "246.JPG": 1,
      "250.JPG": 1,
      "297.JPG": 1,
      "039.JPG": 2,
      "319.JPG": 1,
      "320.JPG": 1,
      "322.JPG": 1,
      "312.JPG": 2,
      "331.JPG": 1,
      "332.JPG": 1,
      "333.JPG": 1,
      "335.JPG": 1,
      "337.JPG": 1,
      "338.JPG": 1,
      "315.JPG": 2,
      "317.JPG": 1,
      "323.JPG": 1,
      "324.JPG": 1,
      "325.JPG": 1,
      "326.JPG": 1,
      "328.JPG": 1,
      "329.JPG": 1,
      "330.JPG": 1,
      "339.JPG": 1,
      "342.JPG": 1,
      "343.JPG": 1,
      "344.JPG": 1,
      "357.JPG": 1,
      "370.JPG": 1,
      "371.JPG": 1,
      "372.JPG": 2,
      "374.JPG": 1,
      "375.JPG": 1,
      "376.JPG": 1,
  },
  deces : {
     "P1000264.jpg" : 1 ,
     "P1000235.jpg" : 2 ,
     "P1000239.jpg" : 3 ,
     "P1000241.jpg" : 2 ,
     "P1000247.jpg" : 2,
     "P1000259.jpg" : 2 ,
     "P1000267.jpg" : 2 ,
     "P1000279.jpg" : 2 ,
     "P1000211.jpg" : 2 ,
     "P1000275.jpg" : 3 ,
     "P1000274.jpg" : 2 ,
     "P1000277.jpg" : 2 ,
     "P1000244.jpg" : 2 ,
     "P1000255.jpg" : 2 ,
     "P1000271.jpg" : 2 ,
     "P1000278.jpg" : 2 ,
     "P1000176.jpg" : 2 ,
     "P1000180.jpg" : 2 ,
  },
  entreprise : {
    "P1000300.jpg" : 1 ,
    "P1000216.jpg" : 2 ,
    "P1000155.jpg" : 1 ,
    "P1000313.jpg" : 2 ,
    "P1000191.jpg" : 1 ,
    "P1000317.jpg" : 1 ,
    "P1000192.jpg" : 2 ,
    "P1000151.jpg" : 1 ,
    "P1000301.jpg" : 1 ,
    "P1000316.jpg" : 1 ,
  },
  offrir : {
    "P1000310.jpg" : 2 ,
    "P1000318.jpg" : 1 ,
    "P1000153.jpg" : 3 ,
    "P1000190.jpg" : 2 ,
    "P1000308.jpg" : 2 ,
    "P1000302.jpg" : 1 ,
    "P1000152.jpg" : 1 ,
    "P1000175.jpg" : 2 ,
    "P1000305.jpg" : 1 ,
    "P1000148.jpg" : 3 ,
    "P1000309.jpg" : 1 ,
    "P1000311.jpg" : 1 ,
    "P1000319.jpg" : 1,
    "P1000198.jpg" : 2
  }
}


$(function(){
  var $html = $('html');
  $html.removeClass('no-js');
  var Router = Backbone.Router.extend({

    routes: {
      "":       "showPage",
      ":page":  "showPage",
      ":page/": "showPage",
    },

    showPage: function(page) {
      page = page || 'accueil';
      if ($html.hasClass(page + '_page')) return;
      $html.setMode(page, 'page');
      var $content = $('#content').html(new ff.View({page: page}).render().el);
    }

  });
  ff.router = new Router();
  Backbone.history.start({pushState: true});
});


ff.View = Backbone.View.extend({
  initialize: function(options){
    this.page = options.page;
    this.template = JST[this.page];
  },

  render: function(){
    this.$el.html(this.template({
      images: ff.images[this.page],
      page: this.page,
    }));

    var self = this;
    setTimeout(function(){
      self.fixGridFirstColumn();
      self.zoombox();
    }, 60);

    return this;
  },

  fixGridFirstColumn: function(){
    this.$('.col').each(function(){
      var $this = $(this);
      if ( Math.abs($this.position().left) < 1){
        $this.addClass('firstChild');
      }
    });
  },

  zoombox: function(){
    this.$('a.zoombox').zoombox({
      gallery: false
    });
  }
});
