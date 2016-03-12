$(document).ready(function() {
  return $("#signup").click(function(event) {
    var details;
    event.preventDefault();
    details = {
      queue: "USER",
      method: "register",
      username: $("input[name=username-signup]").val(),
      password: $("input[name=password-signup]").val(),
      email: $("input[name=email-signup]").val(),
      name: $("input[name=name-signup]").val()
    };
    $.each;
    return $.ajax({
      url: "http://localhost:8080",
      type: "POST",
      datatype: "jsonp",
      data: JSON.stringify(details),
      success: function(result) {},
      error: function(xhr, status, error) {
        alert("Error");
        console.log("Error: " + error);
        console.log("Status: " + status);
        console.dir(xhr.status);
        return console.log(details);
      }
    });
  });
});
