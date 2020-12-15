$(document).ready(function(){
    $('.gallery-wrapper').slick({
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    arrows: false,
                    dots: false   
                }
            }
        ]
    });
});