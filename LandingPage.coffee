windows = true

$(document).ready () ->
    $("#logout-button").click (event) ->
        event.preventDefault()
        console.log("entered login")
        details = {
            user_id: sessionStorage.user_id,
            method: "logout"
        }

        $.ajax
            url: "http://localhost:8080",
            type: "POST",
            datatype: "json",
            data: JSON.stringify(details),
            success: (result) ->
                sessionStorage.user_id = null
                if windows
                    window.location.href = "C:/Users/Ahmed/Documents/TwitterFrontEnd/SignUp.html"
                else
                    window.location.href = "/home/ahmed/Documents/Bachelor/TwitterFrontEnd/SignUp.html"

            error: (xhr,status,error) ->
                alert("Error")
                console.log "Error: " + error
                console.log "Status: " + status
                console.dir xhr.status
                console.log details
