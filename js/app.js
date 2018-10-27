$(function() {
  $(".content").hide();
  $(".home").show();
  
  $(".link-contact").click(function(){
    $(".content").hide();
    $(".contact").show();

    // remove from all navigation link highlight
    $("#nav li").each(function(i) { 
      $(this).removeClass("current");
    })
    // add to contact navigation link highlight
    $(".link-contact").addClass("current");
  })

  $(".link-home").click(function(){
    $(".content").hide();
    $(".home").show();

    // remove from all navigation link highlight
    $("#nav li").each(function(i) { 
      $(this).removeClass("current");
    })
    // add to home navigation link highlight
    $(".link-home").addClass("current");
  })
});