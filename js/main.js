$(document).ready(function (){
  var latlng = new google.maps.LatLng(41.3947901, 2.1487678);
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };

  var map = new google.maps.Map(document.getElementById('map'), options);

  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });

  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });

  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong></strong><br><br>Event address here<br> Orcid rules!</div>'
  });

  new WOW().init();

  var scrollIt = function(){
    var sections = $('.section').length;
    console.log(sections);

    //review
    $('.navbar-right a').click(function(e){
        e.preventDefault();
        var section =  $(this).attr('data-section');
        $('html, body').animate({
            scrollTop: $('#'+section).offset().top-50 + "px"
        }, 2000);

    });



  }

  scrollIt();

});