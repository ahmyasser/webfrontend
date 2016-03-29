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
        var i, _i, _len, _ref;
        $("#timeline-pane").append("<div class='container'>");
        _ref = result.feeds;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          output += "<div class=\"row-fluid\"> <div class=\"col-sm-6 col-sm-offset-3\"> <div class=\"row\"> <div class=\"col-sm-2\"><img class='center-block' src='" + i.creator.avatar_url + "' height='50' width='50'></div> <div class=\"col-sm-10\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\"> " + (capitalize(i.creator.username)) + " (@" + i.creator.username + ") </div> <div class=\"panel-body\">" + i.tweet_text + "</div> </div> </div> </div> </div> </div>";
          $("#timeline-pane").append(output);
        }
        return $("#timeline-pane").append("</div>");
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

  $(document).ready(function() {
    return $("#profile").click(function(event) {
      var details;
      event.preventDefault();
      details = {
        user_id: "1",
        method: "get_user",
        queue: "USER"
      };
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: function(result) {
          var details_form;
          $("#profile-pane").empty();
          details_form = "<div class='row-fluid'> <div class='col-sm-2 col-sm-offset-2'> <img src='" + result.user.avatar_url + "' width='150' height='150'> </div> <div class='col-sm-4'> <form id='profile-form'> <label>Name</label> <input type='text' name='name' value='" + result.user.name + "' size='30' class='form-control'> <br> <label>Username</label> <input type='text' name='username' value='" + result.user.username + "' size='30' class='form-control'> <br> <label>Email</label> <input type='text' name='username' value='" + result.user.email + "' size='30' class='form-control'> <br> <label>Language</label> <input type='text' name='language' value='" + result.user.language + "' size='30' class='form-control'> <br> <label>Country</label> <input type='text' name='country' value='" + result.user.country + "' size='30' class='form-control'> <br> <label>Description</label> <input type='text' name='bio' value='" + result.user.bio + "' size='30' class='form-control'> <br> <label>Website</label> <input type='text' name='website' value='" + result.user.website + "' size='30' class='form-control'> <br> <label>Picture link</label> <input type='text' name='avatar_url' value='" + result.user.avatar_url + "' size='30' class='form-control'> <br> <label>Overlay</label> <input type='text' name='overlay' value='" + result.user.overlay + "' size='30' class='form-control'> <br> <label>Link_color</label> <input type='text' name='link_color' value='" + result.user.link_color + "' size='30' class='form-control'> <br> <label>Background_color</label> <input type='text' name='background_color' value='" + result.user.background_color + "' size='30' class='form-control'> <br> <label>Private Account?</label> <input type='text' name='protected_tweets' value='" + result.user.protected_tweets + "' size='30' class='form-control'> <br> <button type='submit' name='Submit'id='save-profile' class='btn btn-default pull-right'>Save Changes</button> </form> </div> </div>";
          return $("#profile-pane").append(details_form);
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

  capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

}).call(this);
