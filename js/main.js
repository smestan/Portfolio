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
        if(filterType === 'all'){
            $projects.isotope({ filter: '*'});
            return false;
        }
        $projects.isotope({ filter: '.' + filterType});


    });

});
