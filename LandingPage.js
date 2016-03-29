(function() {
  var capitalize;

  $(document).ready(function() {
    var details;
    details = {
      user_id: "1",
      method: "timeline",
      queue: "USER"
    };
    return $.ajax({
      url: "http://localhost:8080",
      type: "POST",
      datatype: "json",
      data: JSON.stringify(details),
      success: function(result) {
        var i, output, _i, _len, _ref, _results;
        _ref = result.feeds;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          output = "<div class=\"row-fluid\"> <div class=\"col-sm-6 col-sm-offset-3\"> <div class=\"row\"> <div class=\"col-sm-2\"><img class='center-block' src='" + i.creator.avatar_url + "' height='50' width='50'></div> <div class=\"col-sm-10\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\"> " + (capitalize(i.creator.username)) + " (@" + i.creator.username + ") </div> <div class=\"panel-body\">" + i.tweet_text + "</div> </div> </div> </div> </div> </div>";
          _results.push($("#timeline-pane").append(output));
        }
        return _results;
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

  $(document).ready(function() {
    return $("#confirm-signout").click(function(event) {
      var details;
      event.preventDefault();
      details = {
        user_id: sessionStorage.user_id,
        method: "logout",
        queue: "USER"
      };
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: function(result) {
          sessionStorage.user_id = null;
          return window.location.href = "SignUp.html";
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

  $(document).ready(function() {
    return $("#create-tweet").click(function(event) {
      var details;
      event.preventDefault();
      details = {
        creator_id: "1",
        tweet_text: $("#tweet-text").val(),
        method: "tweet",
        queue: "TWEET"
      };
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
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

  capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

}).call(this);
