details = {
    queue: "USER",
    method: "signup",
    username: "demo",
    password: "1",
    name: "demo",
    email: "d@d.com"
}

$.ajax
    url: "http://localhost:8080",
    type: "POST",
    datatype: "json",
    data: JSON.stringify(details),
    success: (result) ->
        console.log "Successful SignUp"

    error: (xhr,status,error) ->
        alert("Error")
        console.log "Error: " + error
        console.log "Status: " + status
        console.dir xhr.status
        console.log details
