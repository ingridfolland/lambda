$(document).ready(function() {
  $('#form-button').click(function() {
   $('#confirmation').addClass('show');
   $('#form-button').addClass('clicked');

  });

 /* This is intended to offset the nav menu at the top when you click the links and it takes you ta a new section. If this work - it doesn't - then it would push the view down by 500 pixels.*/
 /*
  function offsetAnchor () {
    if (location.hash.length !==0) {
      window.scrollTo(window.scrollX, window.scrollY - 500);
    }
  }

  $(document.on('click', 'a[href^="#"]'), function(event) {
    window.setTimeout(function() {
      offsetAnchor();

    },0);
  })

  window.setTimeout(offsetAnchor, 0); */

});
