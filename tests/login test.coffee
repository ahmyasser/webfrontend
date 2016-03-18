details = {
    queue: "USER",
    method: "login",
    username: "sara",
    password: "1"
}

$.ajax
    url: "http://localhost:8080",
    type: "POST",
    datatype: "json",
    data: JSON.stringify(details),
    success: (result) ->
        console.log "Successful login"

    error: (xhr,status,error) ->
        alert("Error")
        console.log "Error: " + error
        console.log "Status: " + status
        console.dir xhr.status
        console.log details
