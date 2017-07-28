$(document).ready(function () {
   getRandomColor();
   RandomMouseMoveColor();
});

function getRandomColor() {
 document.body.style.background = "#"+((1<<24)*Math.random()|0).toString(16);
}

function RandomMouseMoveColor() {
var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {

    rgb = [
        Math.round(e.pageX/w * 255),
        Math.round(e.pageY/h * 255),
        150
    ];

    $(document.body).css('background','rgb('+rgb.join(',')+')');

}).resize();
}
