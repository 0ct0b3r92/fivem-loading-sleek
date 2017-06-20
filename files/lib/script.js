/*
Author: @NicolasStr_
If you have any issue, please consider opening a issue on Github
*/
$(document).ready(function() {
    $('#welcome').text(welcome);
    $('#servername').text(servername);
    document.title = servername;
    function textupdate()
    {
        var bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        $('.bg').fadeOut('slow', function () {
            $('.bg').css({ 'background-image': 'url('+bg+')' });
            $('.bg').fadeIn('slow');
        });
        setTimeout(textupdate,10000);
    }
    function backgroundimageslider()
    {
        var text_rdm = texts[Math.floor(Math.random() * texts.length)];
        $('#text').fadeOut('slow', function () {
            $('#text').text(text_rdm);
            $('#text').fadeIn('slow');
        });
        setTimeout(backgroundimageslider,15000);
    }
    textupdate();
    backgroundimageslider();

    /* FIVEM LOADING BAR SCRIPT */
    var count = 0;
    var thisCount = 0;
    const handlers = {
        performMapLoadFunction(data)
        {
            ++thisCount;
            $( "#progress" ).animate({width: ((thisCount / count) * 100) + '%'}, 5000);
        },
        onLogLine(data)
        {
            $( "#infos" ).text(data+"...");
        }
    };
    window.addEventListener('message', function(e)
    {
        (handlers[e.data.eventName] || function() {})(e.data);
    });
});