$(function () {
  function setErr($el, msg) {
    $el.siblings('.error').remove();
    $el.removeClass('invalid');
    if (msg) {
      $el.addClass('invalid');
      $el.after('<span class="error">' + msg + '</span>');
    }
    return !msg;
  }

  function validDate(s) {
    var m = /^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})$/.exec(s); // mm/dd/yyyy hoặc mm-dd-yyyy
    if (!m) return false;
    var mo = +m[1], d = +m[3], y = +m[4];
    if (mo < 1 || mo > 12) return false;
    if (y >= new Date().getFullYear()) return false;        // năm nhỏ hơn năm hiện tại
    var dt = new Date(y, mo - 1, d);
    return dt.getMonth() === mo - 1 && dt.getDate() === d;  // ngày hợp lệ
  }

  // đúng 1 dấu @; trước @ tối đa 1 dấu chấm; sau @ ít nhất 1 dấu chấm
  var emailRe = /^[^@\s.]+(\.[^@\s.]+)?@[^@\s.]+(\.[^@\s.]+)+$/;

  $('#frm').on('submit', function (e) {
    e.preventDefault();
    var ok = true;
    ['name', 'address', 'city'].forEach(function (id) {
      var $f = $('#' + id);
      ok = setErr($f, $.trim($f.val()) === '' ? 'Không được để trống' : '') && ok;
    });

    $('#sexErr').remove();
    if (!$('input[name="sex"]').is(':checked')) {
      $('input[name="sex"]').last().parent().after('<span class="error" id="sexErr">Phải chọn giới tính</span>');
      ok = false;
    }

    ok = setErr($('#region'), $('#region').val() === '' ? 'Phải chọn region' : '') && ok;

    var em = $.trim($('#email').val());
    ok = setErr($('#email'), em === '' ? 'Không được để trống'
         : !emailRe.test(em) ? 'Email không hợp lệ' : '') && ok;

    var bd = $.trim($('#birthday').val());
    ok = setErr($('#birthday'), bd === '' ? 'Không được để trống'
         : !validDate(bd) ? 'Ngày sinh không hợp lệ (mm/dd/yyyy hoặc mm-dd-yyyy)' : '') && ok;

    var zip = $.trim($('#zip').val());
    ok = setErr($('#zip'), zip === '' ? 'Không được để trống'
         : !/^\d{5}$/.test(zip) ? 'Zip code phải có đúng 5 số' : '') && ok;

    if (ok) alert('Đăng ký thành công!');
  });

  $('#btnClear').on('click', function () {
    $('#frm')[0].reset();
    $('#frm input[type=text], #frm select').val('');
    $('input[name="sex"]').prop('checked', false);
    $('.error').remove();
    $('.invalid').removeClass('invalid');
  });
});
