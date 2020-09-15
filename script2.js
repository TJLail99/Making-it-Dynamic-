$( document ).ready(function() {
    $("#top").hover( 
          function() {
      $( this ).css("color", "#FD6A02").text("Halloween Edition");
    },
       function(){
      $( this ).css("color", "White").text("T.J.'s first GitHub website.")
       }
    );
});
$( document ).ready(function() {    
    $('.w').click( function(){
        $(".text").css("color", "white");
    });
        
    $('.g').click( function(){
        $(".text").css("color", "green");
    });
        
    $('.b').click( function(){
        $(".text").css("color", "black");
    });
    
  });

  $( document ).ready(function() {    
    const rollSound = new Audio("Thanos.mp3");
    $('.Thanos').click(e => rollSound.play()); 
  });


  
  $( document ).ready(function() { 
     $('.pumpkin').hover(function(){
         $(".text").css("background-color", "#FD6A02");
     });
    });


$( document ).ready(function() { 

     $('.pumpkin').click( function(){
         $(".halloween").css("visibility", "visible");
    });
});

     
 


