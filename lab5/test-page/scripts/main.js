
 jQuery(document).ready(function(){
      
   
   
   jQuery("#gallery").unitegallery({
      gallery_theme: "video",
      theme_skin: "right-thumb",	
   });
   jQuery("#slider").unitegallery({
      gallery_theme: "carousel",
 	   tile_width:317,
		tile_height:215,
   })
   $(function() {
      $( "#datepicker" ).datepicker();
    } );
    $(function(){
      $("#clock").analogclock({
         size: 350,
         x: 250,
         y: 250
      });
    });
    $('#shareBlock').cShare({
      showButtons: [
        'fb',
        'line',
        'plurk',
        'weibo',
        'twitter',
        'tumblr',
        'email'
      ]
    });
    $(document).ready(function($) {
	
      $('.weather1').weather({
         city: null,
         autocompleteMinLength: 3
      });
   
      $('.weather').weather({
         city: 'Kiev, UA',
         tempUnit: 'C',
         displayDescription: true,
         displayMinMaxTemp: true,
         displayWind: true,
         displayHumidity: true
      });
   
   });
  $('.demo').bngMoney({appId:'6f291bf53c1744cd98d9b233d7882797'});

});