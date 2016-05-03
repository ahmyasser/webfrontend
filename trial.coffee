 $('.edit-list').click() ->
    event.preventDefault()
    list_id = $(this).attr('id').substring(10);
    details = {
        list_id: list_id
        method: "get_list",
        queue: "LIST"
    }

    $.ajax
        url: "http://localhost:8080",
        type: "POST",
        datatype: "json",
        data: JSON.stringify(details),
        success: (result) ->
            $('search-box').hide()
            $('user-header').empty()
            $('user-body').empty()

            for i in result.tweets
                console.log i

            $('input[name=list-name]').val(result.user.website)
            $('textarea[name=list-description]').val(result.user.overlay)

        error: (xhr,status,error) ->
            noty({text: 'An error occured, please try again', timeout: 2000, type:"error", theme: 'bootstrapTheme'})
