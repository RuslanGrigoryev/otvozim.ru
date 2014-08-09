var sliderModule = function ( _parent ) {
    var parent        = $(_parent),
        slideItem     = parent.find('li'),
        slideCount    = slideItem.length,
        slideWidth    = slideItem.width(),
        slideHeight   = slideItem.height(),
        sliderUlWidth = slideCount * slideWidth,
        init          = function () {
            $('.row-right').css({ width: slideWidth, height: slideHeight });
            $('.slider-list').css({ width: sliderUlWidth, marginLeft: - slideWidth });
            $('.slider ul li:last-child').prependTo('.slider-list');
        },
        action        = function () {
            init();
            $('a.control_prev').click(function (e) {
                e.preventDefault();
                moveLeft();
            });

            $('a.control_next').click(function (e) {
                e.preventDefault();
                moveRight();
            });
        },
        moveLeft      = function () {
            $('.slider-list').animate({
                left: + slideWidth
            }, 200, function () {
                $('.slider-list li:last-child').prependTo('.slider-list');
                $('.slider-list').css('left', '');
            });
        },
        moveRight     = function () {
            $('.slider-list').animate({
                left: - slideWidth
            }, 200, function () {
                $('.slider-list li:first-child').appendTo('.slider-list');
                $('.slider-list').css('left', '');
            });
        };
        return {
            action      : action
        }
}('.row-right').action();