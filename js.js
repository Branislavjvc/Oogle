'use strict';

$("#srchbtn").on('click', function() {
  var value = "https://www.google.ca/#q=" + $('#srchtxt').val();
  $("#srchbtn").attr("href", value);
});

$(document).keydown(function(e) {
  if (e.which == 13) {
    var value = "https://www.google.ca/#q=" + $('#srchtxt').val();
    window.open(value);
  }
});