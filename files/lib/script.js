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
});
var count = 0;
var thisCount = 0;
const handlers = {
    initFunctionInvoking(data)
    {
        document.querySelector('#progress').style.left = '0%';
        document.querySelector('#progress').style.width = ((data.idx / count) * 100) + '%';
    },
    performMapLoadFunction(data)
    {
        ++thisCount;
        document.querySelector('#progress').style.left = '0%';
        document.querySelector('#progress').style.width = ((thisCount / count) * 100) + '%';
    },
    onLogLine(data)
    {
        document.querySelector('#infos').innerHTML = data.message + "...";
    }
};
window.addEventListener('message', function(e)
{
    (handlers[e.data.eventName] || function() {})(e.data);
});