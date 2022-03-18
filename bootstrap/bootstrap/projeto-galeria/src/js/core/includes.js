import $ from 'jquery'


function loadIncludes(parent) {
    if(!parent) {parent = 'body'}

    $(parent).find('[wm-include]').each(function(i, e) {

        console.log(e)
    )
        const url = $(e).attr('wm-include')
        const url2 = $('body').get(0)
        // const url2 = $('body').attr('dasdsa').get(0)
        
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')
                console.log('aqui', url, url2)

                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()