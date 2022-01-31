$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});





$(document).ready(function(){  
  //show more option
    var size_item = $('.col-md-4').length;
    var v=6;
    $('.col-md-4').hide(); // hide all divs with class `listing`
    $('.col-md-4:lt('+v+')').show();
    $('#load_more').click(function () {
        v= (v+3<= size_item) ? v+3 : size_item;
        $('.col-md-4:lt('+v+')').show();
        // hide load more button if all items are visible
        if($(".col-md-4:visible").length >= size_item ){ $("#load_more").hide(); }
    });
});
  