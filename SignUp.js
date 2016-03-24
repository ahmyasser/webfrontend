$(document).ready(function() {
  return $("#signup").click(function(event) {
    var check, details;
    event.preventDefault();
    details = {
      queue: "USER",
      method: "register",
      username: $("input[name=username-signup]").val(),
      password: $("input[name=password-signup]").val(),
      email: $("input[name=email-signup]").val(),
      name: $("input[name=name-signup]").val()
    };
    check = true;
    $.each(details, function(key, value) {
      if ((value === null) || (value === "")) {
        alert(key + " cannot be empty");
        check = false;
        return false;
      }
    });
    if (check) {
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: function(result) {
          var login_details;
          login_details = {
            queue: "USER",
            method: "login",
            username: $("input[name=username-signup]").val(),
            password: $("input[name=password-signup]").val()
          };
          return $.ajax({
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(login_details),
            success: function(result) {
              return window.location.href = "LandingPage.html?=" + result.user_id;
            },
            error: function(xhr, status, error) {
              alert("Error");
              console.log("Error: " + error);
              console.log("Status: " + status);
              console.dir(xhr.status);
              return console.log(details);
            }
          });
        },
        error: function(xhr, status, error) {
          alert("Error");
          console.log("Error: " + error);
          console.log("Status: " + status);
          console.dir(xhr.status);
          return console.log(details);
        }
      });
    }
  });
});

$(document).ready(function() {
  return $("#login").click(function(event) {
    var check, details;
    event.preventDefault();
    details = {
      queue: "USER",
      method: "login",
      username: $("input[name=username-login]").val(),
      password: $("input[name=password-login]").val()
    };
    check = true;
    $.each(details, function(key, value) {
      if ((value === null) || (value === "")) {
        alert(key + " cannot be empty");
        check = false;
        return false;
      }
    });
    if (check) {
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: function(result) {
          sessionStorage.user_id = result.user_id;
          return window.location.href = "LandingPage.html?=" + result.user_id;
        },
        error: function(xhr, status, error) {
          alert("Error");
          console.log("Error: " + error);
          console.log("Status: " + status);
          console.dir(xhr.status);
          return console.log(details);
        }
      });
    }
  });
});

$(document).ready(function() {});
