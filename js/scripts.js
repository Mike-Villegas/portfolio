$(function() {
    $(".carousel").carousel( {interval: 3000} );
  });

  $(function(){
    $("#contactUsButton").click(function() {
      $("#contactModal").modal("show");
    });
    });