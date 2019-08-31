$(document).ready(function() {
// Initializes search overlay plugin.
// Replace onSearchSubmit() and onKeyEnter() with 
// your logic to perform a search and display results
$('[data-pages="search"]').search({
    searchField: '#overlay-search',
    closeButton: '.overlay-close',
    suggestions: '#overlay-suggestions',
    brand: '.brand',
    onSearchSubmit: function(searchString) {
        console.log("Search for: " + searchString);
    },
    onKeyEnter: function(searchString) {
        console.log("Live search for: " + searchString);
        var searchField = $('#overlay-search');
        var searchResults = $('.search-results');
        clearTimeout($.data(this, 'timer'));
        searchResults.fadeOut("fast");
        var wait = setTimeout(function() {
            searchResults.find('.result-name').each(function() {
                if (searchField.val().length != 0) {
                    $(this).html(searchField.val());
                    searchResults.fadeIn("fast");
                }
            });
        }, 500);    
        $(this).data('timer', wait);
    }
});
})

// 互動頁開關(互動頁按鈕)
$(function () {
$(".chat-icon, #chat-close").click(function() {
   $(".page-container").toggleClass("p-r-0");
   $(".header2").toggleClass("p-r-0");
   $(".card-upload").toggleClass("fix-r-0");
});
});

// 互動頁&側選單針對螢幕大小顯示
function windowSize() {
if ($(window).width() < 1183) {
    $("#quickview").removeClass("open");
    $(".card-upload").addClass("fix-r-0");
} else {
    $("#quickview").addClass("open");
    $(".page-container").removeClass("p-r-0");
    $(".header2").removeClass("p-r-0");
    $(".card-upload").removeClass("fix-r-0");
}
if ($(window).width() < 992) {
    $("body").removeClass("sidebar-open");
    $(".page-sidebar").removeClass("visible");
} else {
    $("body").addClass("sidebar-open");
    $(".page-sidebar").addClass("visible");
}
};
$(window).resize(function() {
windowSize();
});
windowSize();

// RWD的漢堡開關
$(function () {
$(".btn-sidebar").click(function() {
   $("body").toggleClass("sidebar-open");
   $(".page-sidebar").toggleClass("visible");
});
});


// 全選or全不選
function check_all(obj,cName) { 
var checkboxs = document.getElementsByName(cName); 
for(var i=0;i<checkboxs.length;i++){checkboxs[i].checked = obj.checked;} 
} 



// 日曆套件解決lightbox層級問題
$(function () {
$(".modal-body pg-datepicker").click(function() {
   $(".cdk-overlay-container").addClass("modal-zindex");
   $(".cdk-overlay-backdrop").addClass("backdrop-transparent");
});
});



// 多個modal 解決scroll的問題
$('.modal').on("hidden.bs.modal", function (e) { 
    if ($('.modal:visible').length) { 
        $('body').addClass('modal-open');
    }
});


