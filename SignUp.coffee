$(document).ready () ->
    $("#signup").click (event) ->
        event.preventDefault()
        details = {
            queue: "USER",
            method: "register",
            username: $("input[name=username-signup]").val(),
            password: $("input[name=password-signup]").val(),
            email: $("input[name=email-signup]").val(),
            name: capitalize($("input[name=name-signup]").val())
        }

        check = true
        $.each details, (key,value) ->
            if((value == null) || (value == ""))
                alert(key+" cannot be empty")
                check = false
                return false

        if(check)
            $.ajax
                url: "http://localhost:8080",
                type: "POST",
                datatype: "json",
                data: JSON.stringify(details),
                success: (result) ->
                    login_details = {
                        queue: "USER",
                        method: "login",
                        username: $("input[name=username-signup]").val(),
                        password: $("input[name=password-signup]").val()
                    }


                    $.ajax
                        url: "http://localhost:8080",
                        type: "POST",
                        datatype: "json",
                        data: JSON.stringify(login_details),
                        success: (result) ->
                            localStorage.user_id = result.user_id
                            localStorage.username = result.user.username
                            localStorage.session = result.user.session_id
                            localStorage.name = result.user.name
                            localStorage.avatar = result.user.avatar_url
                            window.location.href = "LandingPage.html"

                        error: (xhr,status,error) ->
                            alert("Error")
                            console.log "Error: " + error
                            console.log "Status: " + status
                            console.dir xhr.status
                            console.log details

                error: (xhr,status,error) ->
                    alert("Error")
                    console.log "Error: " + error
                    console.log "Status: " + status
                    console.dir xhr.status
                    console.log details


$(document).ready () ->
    $("#login").click (event) ->
        event.preventDefault()
        details = {
            queue: "USER",
            method: "login",
            username: $("input[name=username-login]").val(),
            password: $("input[name=password-login]").val()
        }

        check = true
        $.each details, (key,value) ->
            if((value == null) || (value == ""))
                alert(key+" cannot be empty")
                check = false
                return false

        if(check)
            $.ajax
                url: "http://localhost:8080",
                type: "POST",
                datatype: "json",
                data: JSON.stringify(details),
                success: (result) ->
                    localStorage.user_id = result.user_id
                    localStorage.username = result.user.username
                    localStorage.name = result.user.name
                    localStorage.session = result.user.session_id
                    localStorage.avatar = result.user.avatar_url
                    window.location.href = "LandingPage.html"

                error: (xhr,status,error) ->
                    alert("Error")
                    console.log "Error: " + error
                    console.log "Status: " + status
                    console.dir xhr.status
                    console.log details

$(document).ready () ->
    $("input[name=email-signup]").change (event) ->
        if($("input[name=email-signup]").val().match(///[a-zA-Z0-9._%-]+@[a-zA-Z0-9._%-]+\.[a-zA-Z]{2,4}///))
            $("#signup-email").removeClass("has-error")
            $("#signup-email").addClass("has-success")
        else
            $("#signup-email").removeClass("has-success")
            $("#signup-email").addClass("has-error")

    $("input[name=username-login]").change (event) ->
        if($("input[name=username-login]").val().match(///\w+///))
            $("#login-username").removeClass("has-error")
            $("#login-username").addClass("has-success")
        else
            $("#login-username").removeClass("has-success")
            $("#login-username").addClass("has-error")

    $("input[name=username-signup]").change (event) ->
        if($("input[name=username-signup]").val().match(///\w+///))
            $("#signup-username").removeClass("has-error")
            $("#signup-username").addClass("has-success")
        else
            $("#signup-username").removeClass("has-success")
            $("#signup-username").addClass("has-error")

    $("input[name=name-signup]").change (event) ->
        if($("input[name=name-signup]").val().match(///\w+///))
            $("#signup-name").removeClass("has-error")
            $("#signup-name").addClass("has-success")
        else
            $("#signup-name").removeClass("has-success")
            $("#signup-name").addClass("has-error")


capitalize = (string) ->
    return string.charAt(0).toUpperCase() + string.slice(1)
