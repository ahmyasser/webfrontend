# $(document).ready () ->
#     details = {
#         # user_id: sessionStorage.user_id,
#         user_id: "1",
#         method: "timeline",
#         queue: "USER"
#     }
#
#     $.ajax
#         url: "http://localhost:8080",
#         type: "POST",
#         datatype: "json",
#         data: JSON.stringify(details),
#         success: (result) ->
#             $("#timeline-pane").append("<div class='container'>")
#             for i in result.feeds
#                 output += "<div class=\"row-fluid\">
#                       <div class=\"col-sm-6 col-sm-offset-3\">
#                         <div class=\"row\">
#                           <div class=\"col-sm-2\"><img class='center-block' src='#{i.creator.avatar_url}' height='50' width='50'></div>
#                           <div class=\"col-sm-10\">
#                             <div class=\"panel panel-default\">
#                               <div class=\"panel-heading\"> #{capitalize(i.creator.username)} (@#{i.creator.username}) </div>
#                               <div class=\"panel-body\">#{i.tweet_text}</div>
#                             </div>
#                           </div>
#                         </div>
#                       </div>
#                     </div>"
#                 $("#timeline-pane").append(output)
#             $("#timeline-pane").append("</div>")
#
#
#         error: (xhr,status,error) ->
#             alert("Error")
#             console.log "Error: " + error
#             console.log "Status: " + status
#             console.dir xhr.status
#             console.log details

$(document).ready () ->
    $("#confirm-signout").click (event) ->
        event.preventDefault()
        details = {
            user_id: sessionStorage.user_id,
            method: "logout",
            queue: "USER"
        }

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                sessionStorage.user_id = null
                window.location.href = "SignUp.html"

            error: (xhr,status,error) ->
                alert("Error")
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

$(document).ready () ->
    $("#create-tweet").click (event) ->
        event.preventDefault()
        details = {
            # creator_id: sessionStorage.user_id,
            creator_id: "1",
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


            error: (xhr,status,error) ->
                alert("Error")
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

# $(document).ready () ->
#     $("#notifications").click (event) ->
#         event.preventDefault()
#         details = {
#             # creator_id: sessionStorage.user_id,
#             creator_id: "1",
#             tweet_text: $("#tweet-text").val(),
#             method: "tweet",
#             queue: "TWEET"
#         }
#
#         switch_pill("#notifications")
#
#         # $.ajax
#         #     url: "http://localhost:8080",
#         #     type: "POST",
#         #     datatype: "json",
#         #     data: JSON.stringify(details),
#         #     success: (result) ->
#         #
#         #
#         #     error: (xhr,status,error) ->
#         #         alert("Error")
#         #         console.log "Error: " + error
#         #         console.log "Status: " + status
#         #         console.dir xhr.status
#         #         console.log details
#
# $(document).ready () ->
#     $("#timeline").click (event) ->
#         event.preventDefault()
#         details = {
#             # creator_id: sessionStorage.user_id,
#             creator_id: "1",
#             tweet_text: $("#tweet-text").val(),
#             method: "tweet",
#             queue: "TWEET"
#         }
#
#         switch_pill("#timeline")
#
#         # $.ajax
#         #     url: "http://localhost:8080",
#         #     type: "POST",
#         #     datatype: "json",
#         #     data: JSON.stringify(details),
#         #     success: (result) ->
#         #
#         #
#         #     error: (xhr,status,error) ->
#         #         alert("Error")
#         #         console.log "Error: " + error
#         #         console.log "Status: " + status
#         #         console.dir xhr.status
#         #         console.log details
#
# $(document).ready () ->
#     $("#messages").click (event) ->
#         event.preventDefault()
#         details = {
#             # creator_id: sessionStorage.user_id,
#             creator_id: "1",
#             tweet_text: $("#tweet-text").val(),
#             method: "tweet",
#             queue: "TWEET"
#         }
#
#         switch_pill("#messages")
#
#         # $.ajax
#         #     url: "http://localhost:8080",
#         #     type: "POST",
#         #     datatype: "json",
#         #     data: JSON.stringify(details),
#         #     success: (result) ->
#         #
#         #
#         #     error: (xhr,status,error) ->
#         #         alert("Error")
#         #         console.log "Error: " + error
#         #         console.log "Status: " + status
#         #         console.dir xhr.status
#         #         console.log details
#
#
# $(document).ready () ->
#     $("#lists").click (event) ->
#         event.preventDefault()
#         details = {
#             # creator_id: sessionStorage.user_id,
#             creator_id: "1",
#             tweet_text: $("#tweet-text").val(),
#             method: "tweet",
#             queue: "TWEET"
#         }
#
#         switch_pill("#lists")
#
#         # $.ajax
#         #     url: "http://localhost:8080",
#         #     type: "POST",
#         #     datatype: "json",
#         #     data: JSON.stringify(details),
#         #     success: (result) ->
#         #
#         #
#         #     error: (xhr,status,error) ->
#         #         alert("Error")
#         #         console.log "Error: " + error
#         #         console.log "Status: " + status
#         #         console.dir xhr.status
#         #         console.log details

$(document).ready () ->
    $("#profile").click (event) ->
        event.preventDefault()
        details = {
            # creator_id: sessionStorage.user_id,
            user_id: "3",
            method: "get_user",
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
                $('input[name=background_color]').val(result.user.background_color)
                $('input[name=protected_tweets]').val(result.user.protected_tweets)

            error: (xhr,status,error) ->
                alert("Error")
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

$(document).ready () ->
    $("#save-profile").click (event) ->
        event.preventDefault()
        details = {
            user_id:1,
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
                console.log "success"

            error: (xhr,status,error) ->
                alert("Error")
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

capitalize = (string) ->
    return string.charAt(0).toUpperCase() + string.slice(1)
