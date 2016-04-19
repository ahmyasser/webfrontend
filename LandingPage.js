var capitalize, dm_conversation;

dm_conversation = 0;

$(document).ready(function() {
  return $("#timeline").click(function(event) {
    var details;
    event.preventDefault();
    details = {
      session_id: localStorage.session,
      method: "timeline",
      queue: "USER"
    };
    console.log(details);
    console.log(localStorage.session);
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
          output = "<div class=\"row-fluid\"> <div class=\"col-sm-6 col-sm-offset-4\"> <div class=\"media timeline\"> <div class=\"media-left\"> <img class='media-object' src='" + i.creator.avatar_url + "' height='64' width='64'></div> <div class=\"media-body\"> <h4 class='media-heading'> " + (capitalize(i.creator.username)) + " (@" + i.creator.username + ")</h4> " + i.tweet_text + " </div> </div> </div> </div>";
          _results.push($("#timeline-container").append(output));
        }
        return _results;
      },
      error: function(xhr, status, error) {
        noty({
          text: 'An error occured, please try again',
          timeout: 2000,
          type: "error",
          theme: 'bootstrapTheme'
        });
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
      session_id: localStorage.session,
      method: "logout",
      queue: "USER"
    };
    return $.ajax({
      url: "http://localhost:8080",
      type: "POST",
      datatype: "json",
      data: JSON.stringify(details),
      success: function(result) {
        localStorage.session = null;
        return window.location.href = "SignUp.html";
      },
      error: function(xhr, status, error) {
        noty({
          text: 'An error occured, please try again',
          timeout: 2000,
          type: "error",
          theme: 'bootstrapTheme'
        });
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
      session_id: localStorage.session,
      tweet_text: $("#tweet-text").val(),
      method: "tweet",
      queue: "TWEET"
    };
    return $.ajax({
      url: "http://localhost:8080",
      type: "POST",
      datatype: "json",
      data: JSON.stringify(details),
      success: function(result) {
        $("#tweet-text").val("");
        return noty({
          text: 'Tweet Sent!',
          timeout: 1500,
          type: "success",
          theme: 'bootstrapTheme'
        });
      },
      error: function(xhr, status, error) {
        noty({
          text: 'An error occured, please try again',
          timeout: 2000,
          type: "error",
          theme: 'bootstrapTheme'
        });
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
      session_id: localStorage.session,
      method: "my_profile",
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
        $('input[name=email-1]').val(result.user.email.split("@")[0]);
        $('input[name=email-2]').val(result.user.email.split("@")[1]);
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
        noty({
          text: 'An error occured, please try again',
          timeout: 2000,
          type: "error",
          theme: 'bootstrapTheme'
        });
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
      session_id: localStorage.session,
      method: "update_user",
      queue: "USER",
      username: $('input[name=username]').val(),
      email: $('input[name=email-1]').val() + "@" + $('input[name=email-2]').val(),
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
        noty({
          text: 'Profile Saved!',
          timeout: 2000,
          type: "success",
          theme: 'bootstrapTheme'
        });
        return localStorage.username = $('input[name=username]').val();
      },
      error: function(xhr, status, error) {
        noty({
          text: 'An error occured, please try again',
          timeout: 2000,
          type: "error",
          theme: 'bootstrapTheme'
        });
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
      session_id: localStorage.session,
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
          output = "<div class=\"row-fluid\"> <div class=\"col-sm-6 col-sm-offset-4\"> <div class=\"media\"> <div class=\"media-left\"><img class='media-object' src='" + i.creator.avatar_url + "' height='64' width='64'></div> <div class=\"media-body\"> <h4 class=\"media-heading\"> " + (capitalize(i.creator.username)) + " (@" + i.creator.username + ") </h4> " + i.tweet_text + " </div> </div> </div> </div>";
          _results.push($("#my-tweets-container").append(output));
        }
        return _results;
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
});

$(document).ready(function() {
  return $("#notifications").click(function(event) {
    var details;
    event.preventDefault();
    details = {
      session_id: localStorage.session,
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
          output = "<div class=\"row-fluid\"> <div class=\"col-sm-6 col-sm-offset-4\"> <div class=\"media timeline\"> <div class=\"media-left\"><img class='media-object' src='" + i.creator.avatar_url + "' height='64' width='64'></div> <div class=\"media-body\"> <h4 class=\"media-heading\"> " + (capitalize(i.creator.username)) + " (@" + i.creator.username + ") </h4> " + i.tweet_text + " </div> </div> </div> </div>";
          _results.push($("#notifications-container").append(output));
        }
        return _results;
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
});

$(document).ready(function() {
  return $("#messages").click(function(event) {
    var details;
    event.preventDefault();
    details = {
      session_id: localStorage.session,
      method: "get_convs",
      queue: "DM"
    };
    return $.ajax({
      url: "http://localhost:8080",
      type: "POST",
      datatype: "json",
      data: JSON.stringify(details),
      success: function(result) {
        var i, other, output, _i, _len, _ref;
        console.log(result);
        other = '';
        _ref = result.convs;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          if (i.lastDM.sender.name === localStorage.name) {
            other = i.lastDM.reciever.name;
          } else {
            other = i.lastDM.sender.name;
          }
          output = "<div class=\"media thread\" data-toggle='modal' data-target='.message' id='thread-" + i.id + "'> <div class=\"media-left\"> <img class=\"media-object\" src='" + i.lastDM.sender.avatar_url + "' alt='DM Image' width='64' height='64'> </div> <div class=\"media-body\"> <h4 class=\"media-heading\">" + other + "</h4> " + i.lastDM.dm_text + " </div>";
          $("#messages-container").append(output);
        }
        return $("#messages-container").append("<script> $('.thread').click(function(event) { var details, thread_id; event.preventDefault(); thread_id = $(this).attr('id').substring(7); dm_conversation = thread_id; console.log('thread id ' + dm_conversation); details = { conv_id: thread_id, method: 'get_conv', queue: 'DM' }; return $.ajax({ url: 'http://localhost:8080', type: 'POST', datatype: 'json', data: JSON.stringify(details), success: function(result) { var i, j, len, other, ref, results; console.log(result); other = ''; if (result.conv.dms[0].sender.name === localStorage.name) { $('#message-header').empty(); $('#message-header').append(\"<h3>\" + result.conv.dms[0].reciever.name + \"</h3>\"); other = result.conv.dms[0].reciever.name; } else { $('#message-header').empty(); $('#message-header').append(\"<h3>\" + result.conv.dms[0].sender.name + \"</h3>\"); other = result.conv.dms[0].sender.name; } ref = result.conv.dms; results = []; $('#message-body').empty(); for (j = 0, len = ref.length; j < len; j++) { i = ref[j]; results.push($('#message-body').append(\"<div class='media'> <div class='media-left'> <a href='#'> <img class='media-object' src='\" + i.sender.avatar_url +\"' alt='Profile' width='42' height='42'> </a> </div> <div class='media-body'> <h4 class='media-heading'>\" + i.sender.name + \"</h4> \" + i.dm_text + \" </div> </div>\")); } return results; }, error: function(xhr,status,result) { noty({text: 'An error occured, please try again', timeout: 2000, type:'error'}); } }); }); </script>");
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
});

$(document).ready(function() {
  return $("#lists").click(function(event) {
    var details;
    event.preventDefault();
    details = {
      session_id: localStorage.session,
      method: "get_subscribed_lists",
      queue: "USER"
    };
    return $.ajax({
      url: "http://localhost:8080",
      type: "POST",
      datatype: "json",
      data: JSON.stringify(details),
      success: function(result) {
        var i, output, _i, _len, _ref;
        console.log(result);
        $("#lists-container").empty();
        _ref = result.subscribed_lists;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          output = "<div class=\"media list-entry\" data-toggle='modal' data-target='.list' id='list-" + i.id + "'> <div class=\"media-left\"> <img class=\"media-object\" src='" + i.creator.avatar_url + "' alt='Image' width='64' height='64'> </div> <div class=\"media-body\"> <h4 class=\"media-heading\">" + (capitalize(i.name)) + " @" + i.creator.username + "</h4> " + i.description + " </div>";
          $("#lists-container").append(output);
        }
        return $("#lists-container").append("<script> $('.list-entry').click(function(event) { var details, thread_id; event.preventDefault(); list_id = $(this).attr('id').substring(5); console.log(list_id); details = { list_id: list_id, method: 'get_list_feeds', queue: 'LIST' }; return $.ajax({ url: 'http://localhost:8080', type: 'POST', datatype: 'json', data: JSON.stringify(details), success: function(result) { var i, j, len, other, ref, results; console.log(result); ref = result.list_feeds; results = []; $('#list-header').empty(); $('#list-body').empty(); $('#list-header').append(); for (j = 0, len = ref.length; j < len; j++) { i = ref[j]; results.push($('#list-body').append(\"<div class='media'> <div class='media-left'> <a href='#'> <img class='media-object' src='\" + i.creator.avatar_url +\"' alt='Profile' width='64' height='64'> </a> </div> <div class='media-body'> <h4 class='media-heading'>\" + i.creator.name + \"</h4> \" + i.tweet_text + \" </div> </div>\")); } return results; }, error: function(xhr,status,error) { noty({text: 'An error occured, please try again', timeout: 2000, type:'error', theme: 'bootstrapTheme'}); } }); }); </script>");
      },
      error: function(xhr, status, error) {
        return noty({
          text: 'An error occured, please try again',
          timeout: 2000,
          type: 'error'
        }, {
          theme: 'bootstrapTheme'
        });
      }
    });
  });
});

$(document).ready(function() {
  return $("#send-dm").click(function(event) {
    var details;
    event.preventDefault();
    console.log(dm_conversation);
    details = {
      session_id: localStorage.session,
      dm_text: $('input[name=dm]').val(),
      conv_id: dm_conversation,
      method: "create_dm2",
      queue: "DM"
    };
    if ($('input[name=dm]').val() === null || $('input[name=dm]').val() === "") {
      return noty({
        text: 'Cannot send empty Message',
        timeout: 2000,
        type: "error",
        theme: 'bootstrapTheme'
      });
    } else {
      return $.ajax({
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: function(result) {
          var conv;
          $('input[name=dm]').val("");
          noty({
            text: 'Message Sent!',
            timeout: 1500,
            type: "success",
            theme: 'bootstrapTheme'
          });
          conv = {
            conv_id: dm_conversation,
            method: 'get_conv',
            queue: 'DM'
          };
          return $.ajax({
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(conv),
            success: function(result) {
              var i, _i, _len, _ref, _results;
              $('#message-body').empty();
              _ref = result.conv.dms;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                i = _ref[_i];
                _results.push($('#message-body').append("<div class='media'> <div class='media-left'> <a href='#'> <img class='media-object' src='" + i.sender.avatar_url + "' alt='Profile' width='42' height='42'> </a> </div> <div class='media-body'> <h4 class='media-heading'> " + i.sender.name + " </h4>  " + i.dm_text + "  </div> </div>"));
              }
              return _results;
            },
            error: function(xhr, status, result) {
              return noty({
                text: 'Please refresh browser',
                timeout: 2000,
                type: 'error',
                theme: 'bootstrapTheme'
              });
            }
          });
        },
        error: function(xhr, status, error) {
          noty({
            text: 'An error occured, please try again',
            timeout: 2000,
            type: "error",
            theme: 'bootstrapTheme'
          });
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
  return $("#followers").click(function(event) {
    var details;
    event.preventDefault();
    details = {
      session_id: localStorage.session,
      method: "followers",
      queue: "USER"
    };
    return $.ajax({
      url: "http://localhost:8080",
      type: "POST",
      datatype: "json",
      data: JSON.stringify(details),
      success: function(result) {
        var i, _i, _len, _ref, _results;
        _ref = result.followers;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          _results.push($("#followers-pane").append("<div class=\"media\"> <div class=\"media-left\"> <img class='media-object' src='" + i.avatar_url + "' height='64' width='64'></div> <div class=\"media-body\"> <h4> " + (capitalize(i.username)) + " (@" + i.username + ")</h4> </div> </div>"));
        }
        return _results;
      },
      error: function(xhr, status, error) {
        noty({
          text: 'An error occured, please try again',
          timeout: 2000,
          type: "error",
          theme: 'bootstrapTheme'
        });
        console.log("Error: " + error);
        console.log("Status: " + status);
        console.dir(xhr.status);
        return console.log(details);
      }
    });
  });
});

$(document).ready(function() {
  return $("#following").click(function(event) {
    var details;
    event.preventDefault();
    details = {
      session_id: localStorage.session,
      method: "following",
      queue: "USER"
    };
    return $.ajax({
      url: "http://localhost:8080",
      type: "POST",
      datatype: "json",
      data: JSON.stringify(details),
      success: function(result) {
        var i, _i, _len, _ref, _results;
        _ref = result.following;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          _results.push($("#followers-pane").append("<div class=\"media\"> <div class=\"media-left\"> <img class='media-object' src='" + i.avatar_url + "' height='64' width='64'></div> <div class=\"media-body\"> <h4> " + (capitalize(i.username)) + " (@" + i.username + ")</h4> </div> </div>"));
        }
        return _results;
      },
      error: function(xhr, status, error) {
        noty({
          text: 'An error occured, please try again',
          timeout: 2000,
          type: "error",
          theme: 'bootstrapTheme'
        });
        console.log("Error: " + error);
        console.log("Status: " + status);
        console.dir(xhr.status);
        return console.log(details);
      }
    });
  });
});

$(document).ready(function() {
  return $("#search").click(function(event) {
    var details;
    event.preventDefault();
    console.log("entered");
    details = {
      user_substring: $('input[name=search]').val(),
      method: "get_users",
      queue: "USER"
    };
    return $.ajax({
      url: "http://localhost:8080",
      type: "POST",
      datatype: "json",
      data: JSON.stringify(details),
      success: function(result) {
        var i, _i, _len, _ref, _results;
        _ref = result.users;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          _results.push($("#search-pane").append("<div class=\"media\"> <div class=\"media-left\"> <img class='media-object' src='" + i.avatar_url + "' height='64' width='64'></div> <div class=\"media-body\"> <h4> " + (capitalize(i.username)) + " (@" + i.username + ")</h4> </div> </div>"));
        }
        return _results;
      },
      error: function(xhr, status, error) {
        noty({
          text: 'An error occured, please try again',
          timeout: 2000,
          type: "error",
          theme: 'bootstrapTheme'
        });
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
