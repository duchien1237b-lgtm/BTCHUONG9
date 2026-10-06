$(function () {
  $('#btnRemove').on('click', function () {
    if ($('#colorSelect option').length === 0) {
      alert('Danh sách đã trống!');
      return;
    }
    $('#colorSelect option:selected').remove();
  });
});
