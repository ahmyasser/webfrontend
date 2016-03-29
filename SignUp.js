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

$(document).ready(function() {
  $("input[name=email-signup]").change(function(event) {
    if ($("input[name=email-signup]").val().match(/[a-zA-Z0-9._%-]+@[a-zA-Z0-9._%-]+\.[a-zA-Z]{2,4}/)) {
      $("#signup-email").removeClass("has-error");
      return $("#signup-email").addClass("has-success");
    } else {
      $("#signup-email").removeClass("has-success");
      return $("#signup-email").addClass("has-error");
    }
  });
  $("input[name=username-login]").change(function(event) {
    if ($("input[name=username-login]").val().match(/\w+/)) {
      $("#login-username").removeClass("has-error");
      return $("#login-username").addClass("has-success");
    } else {
      $("#login-username").removeClass("has-success");
      return $("#login-username").addClass("has-error");
    }
  });
  $("input[name=username-signup]").change(function(event) {
    if ($("input[name=username-signup]").val().match(/\w+/)) {
      $("#signup-username").removeClass("has-error");
      return $("#signup-username").addClass("has-success");
    } else {
      $("#signup-username").removeClass("has-success");
      return $("#signup-username").addClass("has-error");
    }
  });
  return $("input[name=name-signup]").change(function(event) {
    if ($("input[name=name-signup]").val().match(/\w+/)) {
      $("#signup-name").removeClass("has-error");
      return $("#signup-name").addClass("has-success");
    } else {
      $("#signup-name").removeClass("has-success");
      return $("#signup-name").addClass("has-error");
    }
  });
});
