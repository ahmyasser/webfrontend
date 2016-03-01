$(document).ready(() ->
    $("#signup").click((event)->
        event.preventDefault()

        details = {
            Username: $("input[name=username-signup]")
            Password: $("input[name=password-signup]")
            Email: $("input[name=email-signup]")
        }

        $.ajax({
            url: "localhost:",
            type: "post",
            queue: "user",
            datatype: "json",
            success: (result) ->
                    if(result)
                        alert("Sent!")
                    else
                        alert("Error")

            data: details

            }))
