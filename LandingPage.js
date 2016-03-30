(function() {
  var capitalize;

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
          details_form = "<div class='container'> <div class='row-fluid'> <div class='col-sm-2 col-sm-offset-2'> <img src='" + result.user.avatar_url + "' width='150' height='150'> </div> <div class='col-sm-4'> <form id='profile-form'> <label>Name</label> <input type='text' name='name' value='" + result.user.name + "' size='30' class='form-control'> <br> <label>Username</label> <input type='text' name='username' value='" + result.user.username + "' size='30' class='form-control'> <br> <label>Email</label> <input type='text' name='email' value='" + result.user.email + "' size='30' class='form-control'> <br> <label>Language</label> <input type='text' name='language' value='" + result.user.language + "' size='30' class='form-control'> <br> <label>Country</label> <input type='text' name='country' value='" + result.user.country + "' size='30' class='form-control'> <br> <label>Description</label> <input type='text' name='bio' value='" + result.user.bio + "' size='30' class='form-control'> <br> <label>Website</label> <input type='text' name='website' value='" + result.user.website + "' size='30' class='form-control'> <br> <label>Picture link</label> <input type='text' name='avatar_url' value='" + result.user.avatar_url + "' size='30' class='form-control'> <br> <label>Overlay</label> <input type='text' name='overlay' value='" + result.user.overlay + "' size='30' class='form-control'> <br> <label>Link_color</label> <input type='text' name='link_color' value='" + result.user.link_color + "' size='30' class='form-control'> <br> <label>Background_color</label> <input type='text' name='background_color' value='" + result.user.background_color + "' size='30' class='form-control'> <br> <label>Private Account?</label> <input type='text' name='protected_tweets' value='" + result.user.protected_tweets + "' size='30' class='form-control'> <br> <button type='submit' name='Submit'id='save-profile' class='btn btn-default pull-right'>Save Changes</button> </form> </div> </div> </div>";
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
    return $("#save-profile").click(function(event) {
      var details;
      event.preventDefault();
      details = {
        user_id: 1,
        method: "update_user",
        queue: "USER",
        username: $('input[name=username]').val(),
        email: $('input[name=email]').val(),
        name: $('input[name=name]').val(),
        language: $('input[name=language]').val(),
        country: $('input[name=country]').val(),
        bio: $('input[name=bio]').val(),
        website: $('input[name=website]').val(),
        created_at: $('input[name=created_at]').val(),
        avatar_url: $('input[name=avatar_url]').val(),
        overlay: $('input[name=overlay]').val(),
        link_color: $('input[name=link_color]').val(),
        background_color: $('input[name=background_color]').val(),
        protected_tweets: $('input[name=protected_tweets]').val()
      };
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: function(result) {
          return console.log("success");
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
