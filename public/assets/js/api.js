
$(document).on('click', '.accept-btn', function(){

    var url = "https://enerflo.io/api/v3/install-reports?api_key=137863bf2dc1633b19.89826577";

    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'jsonp',
        async:true,
        processData: false,
        headers: {
            'X-Access-Control-Allow-Origin': 'https://enerflo.io'
        },
        crossDomain:true,
        success: function(data, status, xhr){
            console.log(data);
        },
    });

});




