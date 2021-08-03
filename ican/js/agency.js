/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Closes the Responsive Menu on Click outside Menu
$('body > *').not('nav').click(function() {
    if(!$('button.navbar-toggle').hasClass('collapsed')) {
        $('.navbar-toggle:visible').click();
    }
});

/*!
// positon:relative  height:100%
$(document).ready(function() {
var hgt = $(window).height();
$("header").css({"height" : hgt });
});
 */
 
// FAQ 
$('.panel-heading').click(function(){ 
var css=$(this).find('.fa-angle-right').attr('class'); 
//點了會先清掉附加的CSS 
$(".fa-angle-right").removeClass("turn"); 
//如果點的對象的class包含turn這個class 
if(css.indexOf('turn')>-1){ console.log(css); }else{ 
//展開三角形icon會旋轉 
$(this).find('.fa-angle-right').toggleClass('turn'); } 
})

$('.panel-heading').click(function(){ 
var css=$(this).find('.panel-title').attr('class'); 
//點了會先清掉附加的CSS 
$(".panel-title").removeClass("focus-color"); 
//如果點的對象的class包含focus-color這個class 
if(css.indexOf('focus-color')>-1){ console.log(css); }else{ 
//展開三角形icon會旋轉 
$(this).find('.panel-title').toggleClass('focus-color'); } 
})

