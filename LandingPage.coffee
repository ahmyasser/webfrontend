# $(document).ready () ->
#     details = {
#         session_id: localStorage.session,
#         method: "timeline",
#         queue: "USER"
#     }
#
#     noty({text: 'Loading Timeline', timeout: 1500, type:"success", theme: 'bootstrapTheme'})
#
#     $.ajax
#         url: "http://localhost:8080",
#         type: "POST",
#         datatype: "json",
#         data: JSON.stringify(details),
#         success: (result) ->
#             $("#timeline-container").empty()
#             for i in result.feeds
#                 output = "<div class=\"row-fluid\">
#                       <div class=\"col-sm-6 col-sm-offset-4\">
#                         <div class=\"media timeline\">
#                           <div class=\"media-left\">
#                           <img class='media-object' src='#{i.creator.avatar_url}' height='64' width='64'></div>
#                           <div class=\"media-body\">
#                             <h4 class='media-heading'>
#                             #{capitalize(i.creator.username)} (@#{i.creator.username})</h4>
#                             #{i.tweet_text}
#
#                           </div>
#                         </div>
#                       </div>
#                     </div>"
#                 $("#timeline-container").append(output)
#
#
#         error: (xhr,status,error) ->
#             noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})
#             console.log "Error: " + error
#             console.log "Status: " + status
#             console.dir xhr.status
#             console.log details

$(document).ready () ->
    $("#timeline").click (event) ->
        event.preventDefault()

        details = {
            session_id: localStorage.session,
            method: "timeline",
            queue: "USER"
        }
        console.log details
        console.log localStorage.session
        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                for i in result.feeds
                    output = "<div class=\"row-fluid\">
                          <div class=\"col-sm-6 col-sm-offset-4\">
                            <div class=\"media timeline\">
                              <div class=\"media-left\">
                              <img class='media-object' src='#{i.creator.avatar_url}' height='64' width='64'></div>
                              <div class=\"media-body\">
                                <h4 class='media-heading'>
                                #{capitalize(i.creator.username)} (@#{i.creator.username})</h4>
                                #{i.tweet_text}
                              </div>
                            </div>
                          </div>
                        </div>"
                    $("#timeline-container").append(output)


            error: (xhr,status,error) ->
                noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

$(document).ready () ->
    $("#confirm-signout").click (event) ->
        event.preventDefault()
        details = {
            session_id: localStorage.session,
            method: "logout",
            queue: "USER"
        }

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                localStorage.session = null
                window.location.href = "SignUp.html"

            error: (xhr,status,error) ->
                noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

$(document).ready () ->
    $("#create-tweet").click (event) ->
        event.preventDefault()
        details = {
            session_id: localStorage.session,
            tweet_text: $("#tweet-text").val(),
            method: "tweet",
            queue: "TWEET"
        }

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                $("#tweet-text").val("")
                noty({text: 'Tweet Sent!', timeout: 1500, type:"success", theme: 'bootstrapTheme'})

            error: (xhr,status,error) ->
                noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

$(document).ready () ->
    $("#profile").click (event) ->
        event.preventDefault()
        details = {
            session_id: localStorage.session,
            method: "my_profile",
            queue: "USER"
        }


        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                $('img[name=profile-image]').prop("src",result.user.avatar_url)
                $('input[name=name]').val(result.user.name)
                $('input[name=username]').val(result.user.username)
                $('input[name=email]').val(result.user.email)
                $('input[name=language]').val(result.user.language)
                $('input[name=country]').val(result.user.country)
                $('input[name=bio]').val(result.user.bio)
                $('input[name=website]').val(result.user.website)
                $('input[name=overlay]').val(result.user.overlay)
                $('input[name=link_color]').val(result.user.link_color)
                $('input[name=avatar_url]').val(result.user.avatar_url)
                $('input[name=background_color]').val(result.user.background_color)
                $('input[name=protected_tweets]').val(result.user.protected_tweets)

            error: (xhr,status,error) ->
                noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

$(document).ready () ->
    $("#save-profile").click (event) ->
        event.preventDefault()
        details = {
            session_id: localStorage.session,
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
        }

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                noty({text: 'Profile Saved!', timeout: 2000, type:"success", theme: 'bootstrapTheme'})
                localStorage.username = $('input[name=username]').val()

            error: (xhr,status,error) ->
                noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

$(document).ready () ->
    $("#my-tweets").click (event)->
        event.preventDefault()
        details = {
            session_id: localStorage.session,
            method: "user_tweets",
            queue: "USER"
        }

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                for i in result.tweets
                    output = "<div class=\"row-fluid\">
                          <div class=\"col-sm-6 col-sm-offset-4\">
                            <div class=\"media\">
                              <div class=\"media-left\"><img class='media-object' src='#{i.creator.avatar_url}' height='64' width='64'></div>
                              <div class=\"media-body\">
                                  <h4 class=\"media-heading\"> #{capitalize(i.creator.username)} (@#{i.creator.username}) </h4>
                                  #{i.tweet_text}
                                </div>
                              </div>
                          </div>
                        </div>"
                    $("#my-tweets-container").append(output)

            error: (xhr, status, error) ->
            noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})


$(document).ready () ->
    $("#notifications").click (event)->
        event.preventDefault()
        details = {
            session_id: localStorage.session
            method: "get_mentions",
            queue: "USER"
        }

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                console.log result
                for i in result.mentions
                    output = "<div class=\"row-fluid\">
                          <div class=\"col-sm-6 col-sm-offset-4\">
                            <div class=\"media timeline\">
                              <div class=\"media-left\"><img class='media-object' src='#{i.creator.avatar_url}' height='64' width='64'></div>
                              <div class=\"media-body\">
                                  <h4 class=\"media-heading\"> #{capitalize(i.creator.username)} (@#{i.creator.username}) </h4>
                                  #{i.tweet_text}
                                </div>
                            </div>
                          </div>
                        </div>"
                    $("#notifications-container").append(output)

            error: (xhr,status,error) ->
                noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})

$(document).ready () ->
    $("#messages").click (event)->
        event.preventDefault()
        details = {
            session_id: localStorage.session,
            method: "get_convs",
            queue: "DM"
        }
        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                console.log result
                other = ''
                for i in result.convs
                    if (i.lastDM.sender.name == localStorage.name)
                       other = i.lastDM.reciever.name
                    else
                       other = i.lastDM.sender.name

                    output = "<div class=\"row-fluid\">
                          <div class=\"col-sm-6 col-sm-offset-3\">
                                <div class=\"media thread\" data-toggle='modal' data-target='.message' id='thread-#{i.id}'>
                                    <div class=\"media-left\">
                                    <img class=\"media-object\" src='#{i.lastDM.sender.avatar_url}' alt='DM Image' width='64' height='64'>
                                    </div>
                                    <div class=\"media-body\">
                                    <h4 class=\"media-heading\">#{other}</h4>
                                    #{i.lastDM.dm_text}
                                    </div>
                                        </div>
                        </div>"

                    $("#messages-container").append(output)
                $("#messages-container").append("<script>
                 $('.thread').click(function(event) {
                   var details, thread_id;
                   event.preventDefault();
                   thread_id = $(this).attr('id').substring(7);
                   details = {
                     conv_id: thread_id,
                     method: 'get_conv',
                     queue: 'DM'
                   };
                   return $.ajax({
                     url: 'http://localhost:8080',
                     type: 'POST',
                     datatype: 'json',
                     data: JSON.stringify(details),
                     success: function(result) {
                       var i, j, len, other, ref, results;
                       console.log(result);
                       other = '';
                       if (result.conv.dms[0].sender.name === localStorage.name) {
                         $('#message-header').empty();
                         $('#message-header').append(\"<h3>\" + result.conv.dms[0].reciever.name + \"</h3>\");
                         other = result.conv.dms[0].reciever.name;
                       } else {
                         $('#message-header').empty();
                         $('#message-header').append(\"<h3>\" + result.conv.dms[0].sender.name + \"</h3>\");
                         other = result.conv.dms[0].sender.name;
                       }
                       ref = result.conv.dms;
                       results = [];
                       $('#message-body').empty();
                       for (j = 0, len = ref.length; j < len; j++) {
                         i = ref[j];
                         results.push($('#message-body').append(\"<div class='media'> <div class='media-left'> <a href='#'> <img class='media-object' src='\" + i.sender.avatar_url +\"' alt='Profile' width='42' height='42'> </a> </div> <div class='media-body'> <h4 class='media-heading'>\" + i.sender.name + \"</h4> \" + i.dm_text + \" </div> </div>\"));
                       }
                       return results;
                     },
                     error: function(xhr,status,result) {
                         noty({text: 'An error occured, please try again', timeout: 2000, type:'error'});
                     }
                   });
                 });
                    </script>")

            error: (xhr,status,error) ->
                noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})

$(document).ready () ->
    $("#lists").click (event)->
        event.preventDefault()
        details = {
            session_id: localStorage.session,
            method: "get_subscribed_lists",
            queue: "USER"
        }
        # console.log localStorage.user_id

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                console.log result
                $("#lists-container").empty()
                for i in result.subscribed_lists
                    output = "<div class=\"row-fluid\">
                          <div class=\"col-sm-6 col-sm-offset-4\">
                                <div class=\"media list-entry\" data-toggle='modal' data-target='.list' id='list-#{i.id}'>
                                    <div class=\"media-left\">
                                    <img class=\"media-object\" src='#{i.creator.avatar_url}' alt='Image' width='64' height='64'>
                                    </div>
                                    <div class=\"media-body\">
                                    <h4 class=\"media-heading\">#{capitalize(i.name)} @#{i.creator.username}</h4>
                                    #{i.description}
                                    </div>
                                        </div>
                        </div>"

                    $("#lists-container").append(output)

                $("#lists-container").append("<script>
                 $('.list-entry').click(function(event) {
                   var details, thread_id;
                   event.preventDefault();
                   list_id = $(this).attr('id').substring(5);
                   console.log(list_id);
                   details = {
                     list_id: list_id,
                     method: 'get_list_feeds',
                     queue: 'LIST'
                   };
                   return $.ajax({
                     url: 'http://localhost:8080',
                     type: 'POST',
                     datatype: 'json',
                     data: JSON.stringify(details),
                     success: function(result) {
                       var i, j, len, other, ref, results;
                       console.log(result);
                       ref = result.list_feeds;
                       results = [];
                       $('#list-header').empty();
                       $('#list-body').empty();

                       $('#list-header').append();
                       for (j = 0, len = ref.length; j < len; j++) {
                         i = ref[j];
                         results.push($('#list-body').append(\"<div class='media'>
                          <div class='media-left'>
                           <a href='#'> <img class='media-object' src='\" + i.creator.avatar_url +\"' alt='Profile' width='64' height='64'> </a>
                           </div>
                           <div class='media-body'>
                            <h4 class='media-heading'>\" + i.creator.name + \"</h4> \" + i.tweet_text + \" </div> </div>\"));
                       }
                       return results;
                     },
                     error: function(xhr,status,error) {
                         noty({text: 'An error occured, please try again', timeout: 2000, type:'error', theme: 'bootstrapTheme'});
                     }
                   });
                 });
                    </script>")

            error: (xhr,status,error)->
                noty({text: 'An error occured, please try again', timeout: 2000, type:'error'}, theme: 'bootstrapTheme')


# $(document).ready () ->
#     details = {
#         session_id: localStorage.session,
#         dm_text: $('input[name=name]').val(),
#
#         method: "create_dm",
#         queue: "DM"
#     }
#
#     noty({text: 'Loading Timeline', timeout: 1500, type:"success", theme: 'bootstrapTheme'})
#
#     $.ajax
#         url: "http://localhost:8080",
#         type: "POST",
#         datatype: "json",
#         data: JSON.stringify(details),
#         success: (result) ->
#             $("#timeline-container").empty()
#             for i in result.feeds
#                 output = "<div class=\"row-fluid\">
#                       <div class=\"col-sm-6 col-sm-offset-4\">
#                         <div class=\"media timeline\">
#                           <div class=\"media-left\">
#                           <img class='media-object' src='#{i.creator.avatar_url}' height='64' width='64'></div>
#                           <div class=\"media-body\">
#                             <h4 class='media-heading'>
#                             #{capitalize(i.creator.username)} (@#{i.creator.username})</h4>
#                             #{i.tweet_text}
#
#                           </div>
#                         </div>
#                       </div>
#                     </div>"
#                 $("#timeline-container").append(output)
#
#
#         error: (xhr,status,error) ->
#             noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})
#             console.log "Error: " + error
#             console.log "Status: " + status
#             console.dir xhr.status
#             console.log details

$(document).ready () ->
    $("#followers").click (event) ->
        event.preventDefault()
        details = {
            session_id: localStorage.session,
            method: "followers",
            queue: "USER"
        }

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                for i in result.followers
                    $("#followers-pane").append("<div class=\"media\">
                          <div class=\"media-left\">
                          <img class='media-object' src='#{i.avatar_url}' height='64' width='64'></div>
                          <div class=\"media-body\">
                            <h4>
                            #{capitalize(i.username)} (@#{i.username})</h4>
                      </div>
                    </div>")

            error: (xhr,status,error) ->
                noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

$(document).ready () ->
    $("#searh").click (event) ->
        event.preventDefault()
        details = {
            user_substring: $('input[name=search]').val(),
            method: "followers",
            queue: "USER"
        }

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                for i in result.users
                    $("#search-pane").append("<div class=\"media\">
                          <div class=\"media-left\">
                          <img class='media-object' src='#{i.avatar_url}' height='64' width='64'></div>
                          <div class=\"media-body\">
                            <h4>
                            #{capitalize(i.username)} (@#{i.username})</h4>
                      </div>
                    </div>")

            error: (xhr,status,error) ->
                noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

capitalize = (string) ->
    return string.charAt(0).toUpperCase() + string.slice(1)
