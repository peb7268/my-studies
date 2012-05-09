function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

function switchBookmarkOn() {
  $('#bookmark').addClass('active')
                .css({ backgroundPosition: '-69px 0'})
                .animate({ top: -45, }, 100);
}
function switchBookmarkOff() {
  $('#bookmark').removeClass('active')
                .css({ backgroundPosition: '-38px 0'})
                .animate({ top: -75, }, 100);
}


$(function() {
  // Bookmark
  var currentLabID = $('body').data('lab-id');
  if(readCookie(currentLabID)) { switchBookmarkOn(); }

  $('#index li').each(function(i, item){
    var item = $(item);
    if(readCookie(item.data('lab-id'))) { item.addClass('bookmark'); }
  });

  $('#bookmark').click(function() {
    var bookmark = $(this);
    if(bookmark.hasClass('active')) {
      switchBookmarkOff();
      eraseCookie(currentLabID);
      $('#index li[data-lab-id=' + currentLabID +']').removeClass('bookmark');
    } else {
      switchBookmarkOn();
      createCookie(currentLabID, '1', 365);
      $('#index li[data-lab-id=' + currentLabID +']').addClass('bookmark');
    }
  });

  $('#show_bookmarks').click(function() {
    var bookmark = $(this);
    if(bookmark.hasClass('active')) {
      bookmark.removeClass('active')
              .css({ backgroundPosition: '0 0'})
              .animate({ top: -20, }, 100);

      $('#no_bookmarks').fadeOut(100);
      $('#index li').fadeIn(100);
    } else {
      bookmark.addClass('active')
              .css({ backgroundPosition: '-19px 0'})
              .animate({ top: 0, }, 100);

      $('#index li:not(.bookmark)').fadeOut(100);
      if(!$('#index .bookmark').length) {
        $('#no_bookmarks').fadeIn(200);
      }
    }
  });


  // Lab Index
  $('.index_button a').click(function(e) {
    e.preventDefault();
    $('#index').fadeToggle(200);
  });

  $('#index ul').hover(
    function() { $(this).addClass('hover'); },
    function() { $(this).removeClass('hover'); }
  );


  $(document).click(function(e) {
    if (!$(e.target).closest('#index, .index_button').length) {
      $('#index').fadeOut(100);
    }
  }).keyup(function(e) {
    if(e.keyCode == 27) { $('#index').fadeOut(100); }
  });

  $('pre.instructions').each(function(i, pre) { 
    var lines = pre.innerHTML.split("\n")
        container = $('<div class="instructions">');

    $.each(lines, function(i, line) {
      $('<pre>').html(line).appendTo(container);
    });

    $(pre).replaceWith(container);
  });
});
