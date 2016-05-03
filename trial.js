$('.edit-list').click()(function() {
  var details, list_id;
  event.preventDefault();
  list_id = $(this).attr('id').substring(10);
  details = {
    list_id: list_id,
    method: "get_list",
    queue: "LIST"
  };
  return $.ajax({
    url: "http://localhost:8080",
    type: "POST",
    datatype: "json",
    data: JSON.stringify(details),
    success: function(result) {
      var i, _i, _len, _ref;
      $('search-box').hide();
      $('user-header').empty();
      $('user-body').empty();
      _ref = result.tweets;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        console.log(i);
      }
      $('input[name=list-name]').val(result.user.website);
      return $('textarea[name=list-description]').val(result.user.overlay);
    },
    error: function(xhr, status, error) {
      return noty({
        text: 'An error occured, please try again',
        timeout: 2000,
        type: "error",
        theme: 'bootstrapTheme'
      });
    }
  });
});
