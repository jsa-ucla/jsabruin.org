var kkeys = [], zoi = "90,79,73";
$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( zoi ) >= 0 ) {
    $(document).unbind('keydown',arguments.callee);
    // do something awesome
    console.log("今日も一日頑張るぞい")
    $("top").addClass("ganbaruzoi");
  }
});