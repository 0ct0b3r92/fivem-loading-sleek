/*
Author: @NicolasStr_
If you have any issue, please consider opening an issue on Github
https://github.com/NicolasStr/fivem-loading-sleek/
*/
function sleekLoader(){
    this.bgAnimationTime   = 7000;
    this.textAnimationTime = 7000;
    this.volume            = volume;
    this.soundfile         = soundFile;
    this.backgrounds       = backgrounds;
    this.texts             = texts;
    this.welcomeText       = welcomeText;
    this.serverName        = serverName;

    this.playSound = function(){
        var src = this.soundfile;
        var vol = this.volume;
        if (vol && src) {
            $("<audio></audio>").attr({
                'src': src,
                'volume': vol,
                'autoplay':'autoplay'
            }).appendTo("body");
        }
    }

    this.loadTexts = function(){
        $('#welcome').text(this.welcomeText);
        $('#servername').text(this.serverName);
        document.title = this.serverName;
    }

    this.changeBackground = function(){
        var bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        $('.bg').fadeOut('slow', function () {
            $('.bg').css({ 'background-image': 'url('+bg+')' });
            $('.bg').fadeIn('slow');
        });
    }

    this.changeText = function (isFirst) {
        var randomText = this.texts[Math.floor(Math.random() * this.texts.length)];
        $('#text').fadeOut('slow', function () {
            $('#text').text(randomText);
            $('#text').fadeIn('slow');
        });
    }

    this.init = function () {
        this.loadTexts();
        this.playSound();
        this.changeBackground();
        this.changeText();
        var _this = this;
        window.setInterval(function () {
            _this.changeBackground();
        }, this.bgAnimationTime);
        window.setInterval(function () {
            _this.changeText();
        }, this.textAnimationTime);
    }

};
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