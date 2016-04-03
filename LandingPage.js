(function() {
  var capitalize;

  $(document).ready(function() {
    return $("a").click(function(e) {
      return console.log($(this));
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
        user_id: "3",
        method: "get_user",
        queue: "USER"
      };
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: function(result) {
          $('img[name=profile-image]').prop("src", result.user.avatar_url);
          $('input[name=name]').val(result.user.name);
          $('input[name=username]').val(result.user.username);
          $('input[name=email]').val(result.user.email);
          $('input[name=language]').val(result.user.language);
          $('input[name=country]').val(result.user.country);
          $('input[name=bio]').val(result.user.bio);
          $('input[name=website]').val(result.user.website);
          $('input[name=overlay]').val(result.user.overlay);
          $('input[name=link_color]').val(result.user.link_color);
          $('input[name=avatar_url]').val(result.user.avatar_url);
          $('input[name=background_color]').val(result.user.background_color);
          return $('input[name=protected_tweets]').val(result.user.protected_tweets);
        },
        error: function(xhr, status, error) {
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
          console.log("Error: " + error);
          console.log("Status: " + status);
          console.dir(xhr.status);
          return console.log(details);
        }
      });
    });
  });

  $(document).ready(function() {
    return $("#my-tweets").click(function(event) {
      var details;
      event.preventDefault();
      details = {
        user_id: "1",
        method: "user_tweets",
        queue: "USER"
      };
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: function(result) {
          var i, output, _i, _len, _ref, _results;
          _ref = result.tweets;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            i = _ref[_i];
            output = "<div class=\"row-fluid\"> <div class=\"col-sm-6 col-sm-offset-3\"> <div class=\"row\"> <div class=\"col-sm-2\"><img class='center-block' src='" + i.creator.avatar_url + "' height='50' width='50'></div> <div class=\"col-sm-10\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\"> " + (capitalize(i.creator.username)) + " (@" + i.creator.username + ") </div> <div class=\"panel-body\">" + i.tweet_text + "</div> </div> </div> </div> </div> </div>";
            _results.push($("#my-tweets-container").append(output));
          }
          return _results;
        }
      });
    });
  });

  $(document).ready(function() {
    return $("#notifications").click(function(event) {
      var details;
      event.preventDefault();
      details = {
        username: "magda",
        method: "get_mentions",
        queue: "USER"
      };
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: function(result) {
          var i, output, _i, _len, _ref, _results;
          console.log(result);
          _ref = result.mentions;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            i = _ref[_i];
            output = "<div class=\"row-fluid\"> <div class=\"col-sm-6 col-sm-offset-3\"> <div class=\"row\"> <div class=\"col-sm-2\"><img class='center-block' src='" + i.creator.avatar_url + "' height='50' width='50'></div> <div class=\"col-sm-10\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\"> " + (capitalize(i.creator.username)) + " (@" + i.creator.username + ") </div> <div class=\"panel-body\">" + i.tweet_text + "</div> </div> </div> </div> </div> </div>";
            _results.push($("#notifications-container").append(output));
          }
          return _results;
        }
      });
    });
  });

  $(document).ready(function() {
    return $("#messages").click(function(event) {
      var details;
      event.preventDefault();
      details = {
        user_id: "1",
        method: "get_convs",
        queue: "DM"
      };
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: function(result) {
          var i, output, _i, _len, _ref, _results;
          console.log(result);
          _ref = result.convs;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            i = _ref[_i];
            output = "<div class=\"row-fluid\"> <div class=\"col-sm-6 col-sm-offset-3\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\"><a href='javascript:void(null)' data-toggle='modal' data-target='#thread-" + i.id + "' id='thread-link-" + i.id + "'>" + i.lastDM.dm_text + "</a></div> </div> </div> </div> <div role='dialog' tabindex='-1' class='modal' id='thread-" + i.id + "'> <div class='modal-dialog'> <div class='modal-content'> <div class='modal-header'> <h4 class='text-title'></h4> </div> <div class='modal-body'> <form> <div class='form-group'> <textarea id='tweet-text' class='form-control'></textarea> </div> </form> </div> <div class='modal-footer'> <button type='button' data-dismiss='modal' id='create-tweet' class='btn btn-default'><span style='font-size:2em;' class='glyphicon glyphicon-send text-center'></span></button> </div> </div> </div> </div> <script> $(document).ready(function() { return $('thread-link-" + i.id + "').click(function(event) { var details; event.preventDefault(); details = { conv_id: '" + i.id + "', method: 'get_conv', queue: 'DM' }; return $.ajax({ url: 'http://localhost:8080', type: 'POST', datatype: 'json', data: JSON.stringify(details), success: function(result) { console.log(result); } return _results; } }); }); }); </script>";
            _results.push($("#messages-container").append(output));
          }
          return _results;
        }
      });
    });
  });

  capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

}).call(this);
