var vm = require('vm')
var fs = require('fs');
var Path = require('path');
var _ = require('underscore');
var file = fs.readFileSync(Path.join(__dirname, '../public/js/main.js')).toString();
var exec = require('child_process').exec;

var window = {ff: {}};
var noop = function(){};
vm.runInNewContext(file, { window: window, ff: window.ff, $: noop , Backbone: {View: {extend: noop } } });

var images = window.ff.images;
var imagePath = Path.join(__dirname, '../public/img');
_(images).forEach(function(obj, dir){
  _(obj).forEach(function(size, name){
    var dimension = "173x229^";
    if(size == 2) dimension = "361x229^";
    if(size == 3) dimension = "548x472^";
    var cmd = 'convert ' +  ' "' + Path.join(imagePath, 'zoom-720', name)+'"' + ' -resize ' + dimension + ' -gravity center -extent ' + dimension + ' "' + Path.join(imagePath, dir, name)+'"';
    console.log(cmd);
    var child = exec(cmd,
      function (error, stdout, stderr) {
        if (error !== null) {
          console.error(error);
        }
        console.log(stdout);
        console.error(stderr);
    });
  });
});

//var everything = _.extend({},images.deces, images.mariage, images.offrir, images.entreprise);
//everything = _.keys(everything);

//var dir = fs.readdirSync(Path.join(__dirname, '../public/img/zoom-720'));
//var toBeDeleted = _.difference(dir, everything);


//toBeDeleted.forEach(function(name){
  //fs.unlink(Path.join(__dirname, '../public/img/zoom-720', name));
//});
