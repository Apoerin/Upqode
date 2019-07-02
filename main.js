$(document).ready(function () {

    //function to fill progress bar once page is scrolled to block
    $(function () {
        var $progress = $(".progress > div");
        var $section = $('#about');
        var $queue = $({});

        function loadDaBars() {
            $(".progress > div").each(function () {
                $(this)
                    .data("origWidth", $(this).width())
                    .width(0)
                    .animate({
                        width: $(this).data("origWidth")
                    }, 1300);
            });
        }

        $(document).bind('scroll', function (ev) {
            var scrollOffset = $(document).scrollTop();
            var containerOffset = $section.offset().top - window.innerHeight;
            if (scrollOffset > containerOffset) {
                loadDaBars();
                // unbind event not to load scrolls again
                $(document).unbind('scroll');
            }
        });
    });


    // scroll animation function
    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)

    })

    //scrollspy to highlight active block
    $('body').scrollspy({ target: '.navbar' })



    $(".products, .dropdown").hover(
        function () {
            $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).addClass('open');
        },
        function () {
            $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).removeClass('open');
        });
});
