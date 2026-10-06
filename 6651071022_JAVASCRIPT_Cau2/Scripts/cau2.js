$(function () {
  $('#form1').on('submit', function (e) {
    e.preventDefault();
    var fname = $('input[name="fname"]').val();
    var lname = $('input[name="lname"]').val();
    $('#result').text('Họ và tên: ' + fname + ' ' + lname);
    alert(fname + ' ' + lname);
  });
});
