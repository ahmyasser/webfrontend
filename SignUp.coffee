$(document).ready () ->
    $("#signup").click (event) ->
        event.preventDefault()
        console.log("entered sign")

        details = {
            queue: "USER",
            method: "register",
            username: $("input[name=username-signup]").val(),w 
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
                            alert("SUCCESS")
                            window.location.href = "/home/ahmed/Documents/Bachelor/TwitterFrontEnd/LandingPage.html"

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
        console.log("entered login")
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
                    window.location.href = "/home/ahmed/Documents/Bachelor/TwitterFrontEnd/LandingPage.html"

                error: (xhr,status,error) ->
                    alert("Error")
                    console.log "Error: " + error
                    console.log "Status: " + status
                    console.dir xhr.status
                    console.log details
