$(document).ready(function () {
    $('#main-menu-toggle').click(function () {
        $('#main-menu').toggle();
    });

    var updateHeaderPlaceholder = function () {
        var hdr_h = $('#main-header').outerHeight();
        $('#header-placeholder').height(hdr_h);

    };
    updateHeaderPlaceholder();
    var $window = $(window);
    $window.resize(function () {
        updateHeaderPlaceholder();
    });

    //isitope jquery plugin

    var $projects = $('.projects');
    $projects.isotope({
        itemSelector: '.project-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
    $('.projects-filter ul li a').click(function (e) {
        e.preventDefault();
        var filterType = $(this).data('filter');
        if (filterType === 'all') {
            $projects.isotope({
                filter: '*'
            });
            return false;
        }
        $projects.isotope({
            filter: '.' + filterType
        });

        //Slider

    });
    $(".center").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        centerMode: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            
            


        ]

    });





});