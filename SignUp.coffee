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

        $.each

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "jsonp",
            data: JSON.stringify(details),
            success: (result) ->
                # if(result)
                #     alert("Sent!")
                # else
                #     alert("Error")

            error: (xhr,status,error) ->
                alert("Error")
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details
