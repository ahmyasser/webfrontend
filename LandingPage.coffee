$(document).ready () ->
    details = {
        # user_id: sessionStorage.user_id,
        user_id: "1",
        method: "timeline",
        queue: "USER"
    }

    $.ajax
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: (result) ->
            $("#timeline-pane").append("<div class='container'>")
            for i in result.feeds
                output += "<div class=\"row-fluid\">
                      <div class=\"col-sm-6 col-sm-offset-3\">
                        <div class=\"row\">
                          <div class=\"col-sm-2\"><img class='center-block' src='#{i.creator.avatar_url}' height='50' width='50'></div>
                          <div class=\"col-sm-10\">
                            <div class=\"panel panel-default\">
                              <div class=\"panel-heading\"> #{capitalize(i.creator.username)} (@#{i.creator.username}) </div>
                              <div class=\"panel-body\">#{i.tweet_text}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>"
                $("#timeline-pane").append(output)
            $("#timeline-pane").append("</div>")


        error: (xhr,status,error) ->
            alert("Error")
            console.log "Error: " + error
            console.log "Status: " + status
            console.dir xhr.status
            console.log details

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
            user_id: "1",
            method: "get_user",
            queue: "USER"
        }

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                $("#profile-pane").empty()
                details_form = "<div class='row-fluid'>
                    <div class='col-sm-2 col-sm-offset-2'>
                    <img src='#{result.user.avatar_url}' width='150' height='150'>
                    </div>
                    <div class='col-sm-4'>
                        <form id='profile-form'>
                            <label>Name</label>
                            <input type='text' name='name' value='#{result.user.name}' size='30' class='form-control'>
                            <br>
                            <label>Username</label>
                            <input type='text' name='username' value='#{result.user.username}' size='30' class='form-control'>
                            <br>
                            <label>Email</label>
                            <input type='text' name='username' value='#{result.user.email}' size='30' class='form-control'>
                            <br>
                            <label>Language</label>
                            <input type='text' name='language' value='#{result.user.language}' size='30' class='form-control'>
                            <br>
                            <label>Country</label>
                            <input type='text' name='country' value='#{result.user.country}' size='30' class='form-control'>
                            <br>
                            <label>Description</label>
                            <input type='text' name='bio' value='#{result.user.bio}' size='30' class='form-control'>
                            <br>
                            <label>Website</label>
                            <input type='text' name='website' value='#{result.user.website}' size='30' class='form-control'>
                            <br>
                            <label>Picture link</label>
                            <input type='text' name='avatar_url' value='#{result.user.avatar_url}' size='30' class='form-control'>
                            <br>
                            <label>Overlay</label>
                            <input type='text' name='overlay' value='#{result.user.overlay}' size='30' class='form-control'>
                            <br>
                            <label>Link_color</label>
                            <input type='text' name='link_color' value='#{result.user.link_color}' size='30' class='form-control'>
                            <br>
                            <label>Background_color</label>
                            <input type='text' name='background_color' value='#{result.user.background_color}' size='30' class='form-control'>
                            <br>
                            <label>Private Account?</label>
                            <input type='text' name='protected_tweets' value='#{result.user.protected_tweets}' size='30' class='form-control'>
                            <br>
                            <button type='submit' name='Submit'id='save-profile' class='btn btn-default pull-right'>Save Changes</button>
                        </form>
                    </div>
                    </div>"
                $("#profile-pane").append(details_form)

            error: (xhr,status,error) ->
                alert("Error")
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details

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



capitalize = (string) ->
    return string.charAt(0).toUpperCase() + string.slice(1)
