(function(){ window.JST || (window.JST = {}) 
window.JST["accueil"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='Fayolle Fleurs membre agrée <strong>INTERFLORA</strong> à la Talaudière.\n<iframe src="http://player.vimeo.com/video/50946017?title=0&amp;byline=0&amp;portrait=0&amp;color=C0D860" width="924" height="520" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>\n<p>Le dire avec des fleurs à chaque moment de la vie.</p>\n<p>Daniel Fayolle et ses collaboratrices vous accueillent dans un lieu fascinant de couleurs et de senteurs, et vous invitent à partager leur passion de la fleur.</p>\n<p>Un art de chaque jour; une fleur, un bouquet pour fêter une naissance, un anniversaire, un mariage, pour témoigner de sentiments d\'amour, d\'affection, jusqu\'à ceux des regrets.</p>\n<p>Un conseil, une livraison, contactez-nous au 04 77 53 60 62</p>\n';
}
return __p;
};

window.JST["deces"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="section group">\n  <div class="col span_2_of_5">\n    Pour le dernier geste, avant le départ d\'un être cher, Fayolle Fleurs vous accompagne pour le choix des fleurs qui exprimeront votre amour, votre amitié et vos regrets.\n    <p>Un conseil, une livraison, contactez-nous au 04 77 53 60 62</p>\n  </div>\n  '+
( JST.photos({images : images, page: page}) )+
'\n</div>\n';
}
return __p;
};

window.JST["entreprise"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="section group">\n  <div class="col span_2_of_5">\n    Fayolle Fleurs vous propose d\'embellir un peu plus votre entreprise, avec quelques belles plantes, ou un bouquet livré régulièrement pour agrémenter votre bureau ou celui de votre secrétaire.\n    <p>Un conseil, une livraison, contactez-nous au 04 77 53 60 62</p>\n  </div>\n  '+
( JST.photos({images : images, page: page}) )+
'\n</div>\n';
}
return __p;
};

window.JST["offrir"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="section group">\n  <div class="col span_2_of_5">\n    Vous êtes invité, un bouquet va ravir votre hotesse.\n    <p>Fayolle Fleurs vous propose une palette de bouquets ronds, ou élancés, de couleurs vives ou pastelles.</p>\n<p>Un conseil, une livraison, contactez-nous au 04 77 53 60 62</p>\n  </div>\n  '+
( JST.photos({images : images, page: page}) )+
'\n</div>\n';
}
return __p;
};

window.JST["photos"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
 _.each(images, function(size, url) { 
;__p+='\n<div class="col span_'+
( size )+
'_of_5 img-wrapper">\n  <a class="zoombox zgallery1" href="/img/zoom-720/'+
( url )+
'">\n    <img class="lazy" data-original="/img/'+
( page )+
'/'+
( url )+
'" >\n  </a>\n  <noscript><img src="/img/'+
( page )+
'/'+
( url )+
'"></noscript>\n</div>\n';
 }); 
;__p+='\n';
}
return __p;
};

window.JST["contact"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="section group">\n  <div class="col span_2_of_5">\n  Pour tout évenement de la vie, nous vous invitons à venir découvrir notre boutique de fleurs.\n  <address id="coordonnee" class="vcard">\n    <p>\n      <strong><span class="fn org">Fayolle Fleurs</span></strong> <br />\n        <a href="https://maps.google.fr/maps?ie=UTF8&amp;cid=13293086463677520266&amp;q=Fayolle+Fleurs&amp;gl=FR&amp;hl=fr&amp;t=m&amp;ll=45.479919,4.432726&amp;spn=0.004514,0.006437&amp;z=16&amp;source=embed" target="_blank">\n          <span class="adr"><span class="street-address">2 rue Vauban</span> <br />\n          <span class="postal-code">42350</span> <span class="locality">La Talaudière</span></span>\n        </a>\n    </p>\n    <p>Nous assurons également les livraisons sur simple appel téléphonique au <span class="tel"><a href="tel:+33477536062">04 77 53 60 62</a></span>.</p>\n  </address>\n  </div>\n  <div class="col span_3_of_5">\n    <iframe width="300" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.fr/maps?ie=UTF8&amp;cid=13293086463677520266&amp;q=Fayolle+Fleurs&amp;gl=FR&amp;hl=fr&amp;t=m&amp;ll=45.479919,4.432726&amp;spn=0.004514,0.006437&amp;z=16&amp;output=embed"></iframe>\n  </div>\n</div>\n';
}
return __p;
};

window.JST["mariage"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="section group">\n  <div class="col span_2_of_5">\n    C\'est décidé, vous allez dire oui, et se sera le plus beau jour de votre vie.\n    <p>Daniel Fayolle et ses collaboratrices vous accueillent 2 rue Vauban à La Talaudière pour fleurir cette journée. Ils mettront tout en oeuvre pour créer le décor que vous souhaitez pour la salle où vous allez accueillir votre famille et vos amis.</p>\n    <p>Ils vous guideront dans le choix de votre bouquet de mariée, coiffure et autres accessoires.</p>\n<p>Un conseil, une livraison, contactez-nous au 04 77 53 60 62</p>\n  </div>\n  '+
( JST.photos({images : images, page: page}) )+
'\n</div>\n';
}
return __p;
};

})();