(function () {
    var cbs = [],
        ready = false;
    window.n2jQuery = {
        ready: function (cb) {
            ready ? window.n2jQuery.fire(cb) : cbs.push(cb);
        },
        fire: function (cb) {
            cb.call(window.n2 || window.jQuery, window.n2 || window.jQuery);
        }
    };
// Poll to see if jQuery is ready
    var waitForJQuery = function () {

        if (window.jQuery || window.n2) {
            ready = true;
            for (var i = 0; i < cbs.length; i++) {
                window.n2jQuery.fire(cbs[i]);
            }
        } else {
            setTimeout(waitForJQuery, 20);
        }
    };

    waitForJQuery();
})();

window.n2jQuery.ready(function () {
    if (typeof window.n2 == "undefined") {
        window.n2 = typeof jQuery == "undefined" ? null : jQuery;
    }

    window.nextend.$ = window.n2('');

    window.N2Classes = {};
    (function ($, undefined) {
        "use strict";
        var a = {};

        window.N2Require = function (name, dependencies, injection, fn) {
            var deps = [];
            if (a[name] == undefined) {
                a[name] = $.Deferred();
            }
            for (var i = 0; i < dependencies.length; i++) {
                if (a[dependencies[i]] == undefined) {
                    a[dependencies[i]] = $.Deferred();
                }
                deps.push(a[dependencies[i]]);
            }
            $.when.apply($, deps).done(function () {
                var args = [$, window.N2Classes];
                if (injection.length) {
                    for (var i = 0; i < injection.length; i++) {
                        args.push(nextend[injection[i]]);
                    }
                }

                window.N2Classes[name] = fn.apply(window.N2Classes, args);
                a[name].resolve();
            });
        }
    })(n2);

    var readyDeferred = window.n2.Deferred();
    window.nextend.deferreds.push(readyDeferred);

    if (typeof window.n2CSS !== 'undefined') {
        var d = n2.Deferred();
        n2('<link rel="stylesheet" type="text/css" href="' + window.n2CSS + '" media="all"/>').load(function () {
            d.resolve();
        }).appendTo('head');
        window.nextend.deferreds.push(d);
    }

    window.n2(document).ready(function () {
        readyDeferred.resolve();
    });

    window.nextend.loadDeferred = window.n2.Deferred();
    window.n2(window).on('load', function () {
        window.nextend.loadDeferred.resolve();
    });
});

function NextendThrottle(func, wait) {
    wait || (wait = 250);
    var last,
        deferTimer;
    return function () {
        var context = this,
            now = +new Date,
            args = arguments;
        if (last && now < last + wait) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                func.apply(context, args);
            }, wait);
        } else {
            last = now;
            func.apply(context, args);
        }
    };
}

function NextendDeBounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

window.n2FilterProperty = false;
var element = document.createElement('div');
if (/Edge\/\d./i.test(navigator.userAgent)) {
    //Edge has buggy filter implementation
} else if (element.style.webkitFilter !== undefined) {
    window.n2FilterProperty = 'webkitFilter';
} else if (element.style.filter !== undefined) {
    window.n2FilterProperty = 'filter';
}
