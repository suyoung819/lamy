// Get the modal
var modal = $('#modal_bg');

// Get the button that opens the modal
var btn = $(".pen_product_box");

// Get the <span> element that closes the modal
var span = $(".close_btn");

// When the user clicks on the button, open the modal 
btn.click(function() {
    modal.css("display", "block");
})

// When the user clicks on <span> (x), close the modal
span.click(function() {
    modal.css("display", "none");
})
