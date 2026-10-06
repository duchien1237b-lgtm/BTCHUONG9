$(function () {
  $('#linkForm').on('submit', function (e) {
    e.preventDefault();
    var url = $.trim($('#linkInput').val());
    if (url === '') { alert('Vui lòng nhập đường link!'); return; }
    if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
    if (confirm('Bạn có muốn chuyển đến:\n' + url + ' ?')) {
      window.location.href = url;
    }
    // Cancel: không làm gì cả
  });
});
