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


// 側選單針對螢幕大小顯示
// function windowSize() {
// if ($(window).width() < 992) {
//     $("body").removeClass("sidebar-open");
//     $(".page-sidebar").removeClass("visible");
// } else {
//     $("body").addClass("sidebar-open");
//     $(".page-sidebar").addClass("visible");
// }
// };
// $(window).resize(function() {
// windowSize();
// });
// windowSize();


// 互動頁針對螢幕大小顯示
function windowSize() {
if ($(window).width() > 1200) {
    $(".chat-icon, #chat-close").on("click touchstart", function() {
        $(".page-container").toggleClass("p-r-0");
        $(".header2").toggleClass("p-r-0");
        $(".card-upload").toggleClass("fix-r-0");
    });
    $(".quickview-wrapper").addClass("open");
    $(".page-container").addClass("p-r-285");
    $(".header2").addClass("p-r-285");
    $(".card-upload").addClass("fix-r-285");
} 
};
windowSize();


// RWD的漢堡開關
// $(function () {
// $(".btn-sidebar").click(function() {
//    $("body").toggleClass("sidebar-open");
//    $(".page-sidebar").toggleClass("visible");
// });
// });

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

// select解決lightbox層級問題
$(function () {
    $(".modal-body .select2").click(function() {
       $(".select2-container--open").addClass("modal-zindex");
});
});

// 多個modal 解決scroll的問題
$('.modal').on("hidden.bs.modal", function (e) { 
    if ($('.modal:visible').length) { 
        $('body').addClass('modal-open');
    }
});

// 按讚效果模擬
const like = document.getElementById('like-icon')
      like.addEventListener('click', (event) => {
      like.classList.toggle('like-select');
})



