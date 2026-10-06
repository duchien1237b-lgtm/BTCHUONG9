$(function () {
  $('.op').on('click', function () {
    var a = parseFloat($('#num1').val());
    var b = parseFloat($('#num2').val());
    var op = $(this).data('op'), r;
    if (isNaN(a) || isNaN(b)) { $('#result').val('Lỗi: nhập số!'); return; }
    switch (op) {
      case '+': r = a + b; break;
      case '-': r = a - b; break;
      case '*': r = a * b; break;
      case '/': r = (b === 0) ? 'Lỗi: chia cho 0' : a / b; break;
      case '^': r = Math.pow(a, b); break;
    }
    $('#result').val(r);
  });
});
