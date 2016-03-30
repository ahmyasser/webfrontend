(function() {
  var data, info;

  info = ["name", "username"];

  data = {
    "queue": "USER",
    "method": "update_user",
    "user_id": "1",
    "details": JSON.stringify(info)
  };

  console.log(JSON.stringify(data));

  console.log(JSON.parse(data));

}).call(this);
