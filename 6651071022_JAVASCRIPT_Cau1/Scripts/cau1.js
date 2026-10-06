$(function () {
  $('#jsstyle').on('click', function () {
    $('#text').css({
      fontSize: $('#size').val() + 'px',
      fontFamily: $('#family').val(),
      color: $('#color').val()
    });
  });
});
