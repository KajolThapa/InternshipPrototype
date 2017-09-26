jQuery(document).ready(function($){

    var $jTweetsWrappers = $('.jtweets-feed');

    $.fn.jTweetsFader = function(timeOut) {
        var $elem = this;
        $elem.animate({'min-height': jTweetsMinHeight($elem)});
        this.children(':gt(0)').hide();
        setInterval(function() {
            $elem.children().eq(0)
                .fadeOut().next().fadeIn().end().appendTo($elem);
            $elem.animate({'min-height': jTweetsMinHeight($elem)});
        }, timeOut || 10000);
    };

    $.each($jTweetsWrappers, function() {
        if ( ! $(this).hasClass('no-fade') ) {
            $(this).children('ul').jTweetsFader( $(this).data('rotatetime') );
        }
    });

    function jTweetsMinHeight($elem) {
        var oldHeight = $elem.height(),
            newHeight = $elem.children().eq(0).height();
        if ( $elem.parent().hasClass( 'grow-only' ) ) {
            if ( newHeight > oldHeight ) {
                return newHeight + 'px';
            }
        } else if ( $elem.parent().hasClass( 'resize' ) ) {
            return newHeight + 'px';
        }
        return oldHeight + 'px';
    }

});
