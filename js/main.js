/*
//------------------------------------------
Copyright 2017 Nguyễn Việt Hưng (ZeroX)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//------------------------------------------ 
*/



$("a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 1000, function(){
            window.location.hash = hash;
        });
    } // End if
});

$(document).ready(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
var isAnimated = false;
$(window).scroll(function(){
    if(isInView(".btitle")){
        $(".line").animate({
            height: $(".lastDot").position().top - $(".dot").position().top,
        });
    }
    if(isInView(".inner") && !isAnimated){
        var listBars = $(".inner");
        for(var i = 0; i < listBars.length; i++){
            var percentage = listBars[i].dataset.percentage;
            $(listBars[i]).text($(listBars[i]).text() + " " + percentage);
            $(listBars[i]).animate({
                width: percentage
            }, 2000);
        
        }
        isAnimated = true;
    }
});

function expand() {
    $(".third_section").animate({
        minHeight: "110vh"
    });
    /*$(".third_section a").animate({
        bottom: "-20%"
    });*/
    $("#open").fadeOut(function(){
        $("#open").css("display", "none");
        $("#close").fadeIn();
        $(".hide").fadeIn();
    });
}

function shrink(){
    
    $("#close").fadeOut(function(){
        $("#close").css("display", "none");
    });
    
    $(".hide").fadeOut(function(){
        $(".third_section").animate({
            minHeight: "80vh"
        });
        $("#open").fadeIn();
        //$(".hide").css("display", "none");
    });
}

function isInView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
var g;
function openWork(e){
    $(".black-background").fadeIn();
    $(".black-background").css("display", "flex");
    var text = e.attr("description");
    var img  = e.children()[0].src;
    $(".black-background .text").html(text);
    $(".black-background img").attr("src", img);
}

function closeWork(){
    $(".black-background").fadeOut(function(){
        $(".black-background .text").html(''); //clear for sure (dont have to but... you get the point)
    });
    
}

$("#works li").click(function(){
    openWork($(this));
});

