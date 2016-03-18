(function() {
  var windows;

  windows = true;

  $(document).ready(function() {
    return $("#logout-button").click(function(event) {
      var details;
      event.preventDefault();
      console.log("entered login");
      details = {
        user_id: sessionStorage.user_id,
        method: "logout"
      };
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: function(result) {
          sessionStorage.user_id = null;
          if (windows) {
            return window.location.href = "C:/Users/Ahmed/Documents/TwitterFrontEnd/SignUp.html";
          } else {
            return window.location.href = "/home/ahmed/Documents/Bachelor/TwitterFrontEnd/SignUp.html";
          }
        },
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

}).call(this);
