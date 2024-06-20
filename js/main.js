$(document).ready(function() {
    $('#searchBtn').click(function() {
        const term = $('#term').val();
        if (term === '') {
            alert('Please enter a term');
            return;
        }

        // CODE SNIPPET
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + term,
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": '0b87b0206emsha94ecff03d9ace7p19b543jsn11334f82f1c6', 
                "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function(response) {
            $('#result').empty();
            if (response.list.length > 0) {
                const definition = response.list[0].definition;
                $('#result').append(`<div class="definition">${definition}</div>`);
            } else {
                $('#result').append(`<div class="definition">No definition found</div>`);
            }
        }).fail(function() {
            $('#result').append(`<div class="definition">Error retrieving definition</div>`);
        });
    });
});
