$(document).ready () ->
    $("#signup").click (event) ->
        event.preventDefault()
        details = {
            queue: "USER",
            method: "register",
            username: $("input[name=username-signup]").val(),
            password: $("input[name=password-signup]").val(),
            email: $("input[name=email-signup]").val(),
            name: $("input[name=name-signup]").val()
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
                            window.location.href = "LandingPage.html?="+result.user_id

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
                    sessionStorage.user_id = result.user_id
                    window.location.href = "LandingPage.html?="+result.user_id

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
