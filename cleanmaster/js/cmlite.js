/*
 * @author liujiaqi@cmcm.com
 * @date 2014-10-15
 * @latest 2017-05-10
 * Added skinShare case for apk downloading
 */
var UA = window.navigator.userAgent,
    IsAndroid = (/Android|HTC/i.test(UA)),
    IsIPad = !IsAndroid && /iPad/i.test(UA),
    IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA),
    IsIOS = IsIPad || IsIPhone,
    IsphoneIE = !IsAndroid && !IsIOS && (/Windows Phone|IEMobile/i.test(UA));;
(function($, undefined) {
    var win = $(window),
        doc = $(document),
        func = [],
        pages = [];

    + function() {
        if (K.isMobile) {
            LazyLoad = function(page, cfg) {
                pages.push(page[0]);
                func.push(cfg.callback);
            };
        }
    }() + function() {
        var pages = $('.cmltpage');
        LazyLoad($('#cmlt1'), {
            range: -300,
            callback: function() {
                $(this).addClass('animated');
                var el = $(this).find('.title, .dl, #iosTips, #playVideo, .cm-2dcode');
                setTimeout(function() {
                    el.css('display', 'block');
                }, 1000);
                setTimeout(function() {
                    /* var banner=$('#cmlt1 .banner').css(K.transition,'right 500ms ease'),*/
                    var banner = $('#cmlt1 .banner').css({
                            display: 'none'
                        }),
                        w = banner.width(),
                        isShow;
                    win.on('resize scroll', function() {
                        var top = win.scrollTop();
                        if (isShow && top > 10) {
                            banner[K.transition ? 'css' : 'animate']({
                                'right': '-' + w + 'px'
                            });
                            isShow = false;
                        } else if (!isShow && top < 10) {
                            banner[K.transition ? 'css' : 'animate']({
                                'right': 0
                            });
                            isShow = true;
                        }
                    }).resize();
                }, 1500);
            }
        });

        LazyLoad($('#cmlt2'), {
            range: -300,
            callback: function() {
                var $_this = $(this),
                    isWeixin = "micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i),
                    lastTime = 0,
                    nextFrame = window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(callback) {
                        var currTime = +new Date,
                            delay = Math.max(1000 / 60, 1000 / 60 - (currTime - lastTime));
                        lastTime = currTime + delay;
                        return setTimeout(callback, delay);
                    },
                    cancelFrame = window.cancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.webkitCancelRequestAnimationFrame ||
                    window.mozCancelRequestAnimationFrame ||
                    window.msCancelRequestAnimationFrame ||
                    clearTimeout,
                    EASE = {
                        linear: function(t, b, c, d) {
                            return c * t / d + b;
                        },
                        ease: function(t, b, c, d) {
                            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
                        },
                        'ease-in': function(t, b, c, d) {
                            return c * (t /= d) * t * t + b;
                        },
                        'ease-out': function(t, b, c, d) {
                            return c * ((t = t / d - 1) * t * t + 1) + b;
                        },
                        'ease-in-out': function(t, b, c, d) {
                            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                            return c / 2 * ((t -= 2) * t * t + 2) + b;
                        },
                        bounce: function(t, b, c, d) {
                            if ((t /= d) < (1 / 2.75)) {
                                return c * (7.5625 * t * t) + b;
                            } else if (t < (2 / 2.75)) {
                                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                            } else if (t < (2.5 / 2.75)) {
                                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                            } else {
                                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                            }
                        }
                    };

                // 线
                var drawArc = {
                    canvas: null,
                    ctx: null,
                    startPoint: 1.5,
                    center: [208, 208, 163],
                    num: 2,
                    // color: '#4f77cb',
                    color: '#749ce1',
                    timer: null,
                    duration: 2500,
                    lineWidth: 5,
                    init: function() {
                        this.canvas = document.getElementById("br");
                        this.ctx = this.canvas.getContext("2d");
                        this.ctx.lineCap = 'round';
                        this.ctx.lineWidth = this.lineWidth;
                        this.draw();
                    },
                    draw: function() {
                        var self = this;
                        self.startTime = +new Date;

                        function anim() {
                            var offset = Math.min(self.duration, +new Date - self.startTime),
                                s = self.duration ? EASE['linear'](offset, 0, 1, self.duration) : 1,
                                to = 0,
                                now = (new Date()).getTime();

                            self.clear();

                            self.ctx.strokeStyle = self.color;
                            self.ctx.beginPath();
                            to = self.num * s + self.startPoint;

                            to = to > 2 ? to : (to <= 0 ? to + 2 : to);

                            self.ctx.arc(self.center[0], self.center[1], self.center[2] - self.lineWidth / 2, self.startPoint * Math.PI, to * Math.PI, false);
                            self.ctx.stroke();

                            if (offset == self.duration) {
                                delete self.timer;
                                $_this.addClass('anim2');
                            } else {
                                self.timer = nextFrame(anim);
                            }
                        }
                        anim();
                    },
                    clear: function() {
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    }
                };

                // window.drawArc=  drawArc;
                
                $_this.addClass('animated');
                // drawArc.init();

                var dl = $_this.find('dl'),
                    pgy = $_this.find('.pgylite');
                setTimeout(function() {
                    dl.eq(0).show();
                }, 300);
                setTimeout(function() {
                    dl.eq(1).show();
                }, 600);
                if (K.animation) {
                    pgy.css('opacity', 0);
                }
                pgy.each(function(i, p) {
                    i += 2;
                    $(p).css(K.animation, 'pgyAni 5s linear infinite ' + i + 's');
                }).show();
            }
        });

        LazyLoad($('#cmlt3'), {
            range: -300,
            callback: function() {
                $(this).addClass('animated');
                var lis = $(this).find('li'),
                    functionBars = $('#function-bar');

                    functionBars.find('.code-dwrap').hide();
                    functionBars.find('.fb-dcode').removeClass('away');


                if (K.isMobile) {
                    lis.css(K.transform, 'perspective(0) rotateY(0)').css(K.transition, K.uncamelCase(K.transform) + ' 600ms ease').each(function(i, p) {
                        setTimeout(function() {
                            $(p).fadeIn().css(K.transform, 'perspective(0) rotateY(0)');
                        }, i * 300);
                    });
                } else {
                    lis.css(K.transform, 'perspective(900px) rotateY(-70deg)').css(K.transition, K.uncamelCase(K.transform) + ' 600ms ease').each(function(i, p) {
                        setTimeout(function() {
                            $(p).fadeIn().css(K.transform, 'perspective(900px) rotateY(0)');
                        }, i * 300);
                    });
                }
                if (K.supports.touch) {
                    lis.tap(function() {
                        $(this).toggleClass('hover');
                    });
                } else {
                    lis.hover(function() {
                        $(this).addClass('hover');
                    }, function() {
                        $(this).removeClass('hover');
                    });
                }
                console.log(1)
                lis.find('.box div')
                    .css(K.transition, '400ms ease')
                    .css(K.transition + 'Property', K.uncamelCase(K.transform) + ',opacity, border, left, top');


                if (win.width() < 800) {
                    var nav = $('<div class="nav"><i class="active"></i><i></i><i></i></div>').appendTo($(this).find('.main')).find('i').click(function() {
                            active = $(this).index();
                            ul.css(K.transform, 'translateX(-' + active + '00%)');
                            nav.removeClass('active').eq(active).addClass('active');
                        }),
                        ul = lis.parent().css(K.transition, K.uncamelCase(K.transform) + ' 400ms ease'),
                        active = 0,
                        x, y, move;
                    ul.on({
                        touchstart: function(ev) {
                            var touches = ev.originalEvent.changedTouches;
                            x = touches.item(0).pageX;
                            y = touches.item(0).pageY;
                        },
                        touchmove: function(ev) {
                            var touches = ev.originalEvent.changedTouches,
                                _x = touches.item(0).pageX,
                                _y = touches.item(0).pageY;
                            if (move == null && (x != _x || y != _y)) {
                                move = Math.abs(_x - x) > Math.abs(_y - y);
                            }
                            if (move) {
                                return false;
                            }
                        },
                        'touchend touchcancel': function(ev) {
                            var touches = ev.originalEvent.changedTouches;
                            if (move) {
                                var dir = touches.item(0).pageX - x;
                                if (dir > 0) {
                                    active -= 1;
                                } else {
                                    active += 1;
                                }
                                active = Math.max(0, Math.min(2, active));
                                ul.css(K.transform, 'translateX(-' + active + '00%)');
                                nav.removeClass('active').eq(active).addClass('active');
                            }
                            move = null;
                        }
                    });

                }
            }
        });

        LazyLoad($('#cmlt4'), {
            range: -300,
            callback: function() {
                $(this).addClass('animated');
                var dl = $(this).find('dl');
                setTimeout(function() {
                    dl.eq(0).show();
                }, 800);
                setTimeout(function() {
                    dl.eq(1).show();
                }, 1000);
                setTimeout(function() {
                    dl.eq(2).show();
                }, 1200);
            }
        });

    }() + function() {
        if (K.isMobile && $('.CMLITE').length > 0) {
            var current,
                sliding,
                slides = $('.cmltpage'),
                length = pages.length,
                getPrevIndex = function(index) {
                    return Math.max(0, index);
                },
                getNextIndex = function(index) {
                    return Math.min(length - 1, index);
                },
                slide = function(index) {
                    var page, _page,
                        cb = function() {
                            if (!slides[index].inted) {
                                func[index].call(slides[index]);
                                slides[index].inted = true;
                            }
                            sliding = false;
                        }
                    index = Math.min(length - 1, Math.max(0, index));
                    if (index < current) {
                        page = slides.eq(index);
                        _page = slides.eq(current);
                        if (page.is(':hidden')) {
                            page.css(K.transform, 'translate(0,-100%)').css('z-index', 5).show();
                        }
                        setTimeout(function() {
                            page.one(K.transitionend, function() {
                                page.css(K.transition, K.cssVendor + 'transform 0').css('z-index', 'auto');
                                _page.css(K.transition, K.cssVendor + 'transform 0').hide();
                                cb();
                            }).css(K.transform, 'translate(0,0)');
                            _page.css(K.transform, 'perspective(500px) rotateX(-20deg)');
                        }, 10);
                    } else {
                        page = slides.eq(current).css('z-index', 5);
                        _page = slides.eq(index);
                        if (_page.is(':hidden')) {
                            _page.show();
                        }
                        var _c = current;
                        setTimeout(function() {
                            page.one(K.transitionend, function() {
                                page.css(K.transition, K.cssVendor + 'transform 0').css(K.transform, 'translate(0,0)').css('z-index', 'auto');
                                _page.css(K.transition, K.cssVendor + 'transform 0');
                                if (index != _c) {
                                    page.hide();
                                }
                                cb();
                            }).css(K.transform, 'translate(0,-100%)');
                            _page.css(K.transform, 'perspective(500px) rotateX(0)');
                        }, 10);
                    }
                    sliding = true;
                    if (current == null) cb();
                    else if (page.length && page.position().top == 0) {
                        sliding = false;
                    } else {
                        page.css(K.transition, K.cssVendor + 'transform 600ms');
                        _page.css(K.transition, K.cssVendor + 'transform 600ms');
                    }

                    nav.removeClass('active').eq(index).addClass('active');

                    current = index;
                },
                fixEv = function(ev) {
                    if (ev.originalEvent.touches && ev.originalEvent.touches.length) {
                        ev.pos = {
                            x: ev.originalEvent.touches.item(0).pageX,
                            y: ev.originalEvent.touches.item(0).pageY
                        };
                    }
                },
                stime, sPos, mPos, moved, elem, height = win.height() - 91,
                offset;

            var nav = $('<div class="pageNav">' + $(pages).on('touchstart', function(e) {
                if (!sliding) {
                    fixEv(e);
                    elem = this;
                    sPos = e.pos;
                    stime = new Date();
                }
            }).map(function() {
                return '<i></i>';
            }).get().join('') + '</div>').appendTo('body').children();


            $(document).on({
                'touchmove': function(e) {
                    fixEv(e);
                    mPos = e.pos;
                    if (elem && (mPos.y != sPos.y || moved)) {
                        offset = mPos.y - sPos.y;
                        if (offset > 0) {
                            if (current > 0) {
                                moved = true;
                                slides[current - 1].style[K.transform] = 'translate(0,-' + (height - offset) + 'px)';
                                slides[current - 1].style.zIndex = 5;
                                slides[current - 1].style.display = 'block';
                                if (slides[current + 1]) {
                                    slides[current + 1].style.display = 'none';
                                    slides[current + 1].style[K.transform] = 'translate(0,0)';
                                }
                                elem.style.zIndex = 'auto';
                                elem.style[K.transform] = 'translate(0,0) perspective(500px) rotateX(' + (1 - Math.max(1, offset * 2 / height)) * 20 + 'deg)';
                            }
                        } else {
                            if (current < length - 1) {
                                moved = true;
                                elem.style[K.transform] = 'translate(0,' + offset + 'px)';
                                elem.style.zIndex = 5;
                                if (slides[current - 1]) {
                                    slides[current - 1].style[K.transform] = 'translate(0,0)';
                                    slides[current - 1].style.zIndex = 'auto';
                                    slides[current - 1].style.display = 'none';
                                }
                                slides[current + 1].style.display = 'block';
                                slides[current + 1].style[K.transform] = 'perspective(500px) rotateX(' + (-1 + Math.min(1, -offset * 2 / height)) * 20 + 'deg)';
                            }
                        }

                        return false;
                    }
                },
                'touchend touchcancel': function(e) {
                    if (moved) {
                        if (offset == 0) {
                            sliding = false;
                        } else if (new Date - stime > 500 && Math.abs(offset) < height / 3) {
                            var c = current;
                            if (offset > 0) {
                                current--;
                            } else {
                                current++;
                            }
                            slide(c);
                        } else if (offset > 0) {
                            slide(current - 1);
                        } else {
                            slide(current + 1);
                        }
                        elem = offset = moved = null;
                        return false;
                    }
                }
            });
            slide(0);

        }
    }();

})(jQuery);

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};
(function($, undefined) {
    var downCode = '<a class="log-down" stat="log-down-btn" href="http://bj.download.ijinshan.com/clean_master/cleanmaster-release-cn.apk">下载</a>',
        logContent = $('.log_content'),
        rFunctionBar = $('#function-bar'),
        homeDowna = $('.homeDown'),
        wxOpenb = $('#wxTispb'),
        languageMenu = $('.language-menu'),
        fbBtn = rFunctionBar.find('a'),
        gCode = rFunctionBar.find('.code-gwrap'),
        dCode = rFunctionBar.find('.code-dwrap'),
        qCode = rFunctionBar.find('.code-qwrap'),
        f = getQueryString('f'),
        link = '';

    switch(f){
        case '100031':
            link = 'http://bj.download.ijinshan.com/clean_master/cleanmaster100031.apk';
        break;
        case '2010002301':
            link = 'http://dl.cm.ksmobile.com/static/res/6b/a6/CleanMaster_2010002301_0_1418373505.apk';
        break;
        case '2010006196':
            link = 'http://dl.cm.ksmobile.com/static/res/7b/b5/CleanMaster_2010006196_0_1463645484.apk';
        break;
        case '2010006219':
            link = 'http://dl.cm.ksmobile.com/static/res/8a/69/CleanMaster_2010006219_0_1465812670.apk';
        break;
        case '2010006225 ':
        case '2010006225Â ':
        case '2010006225Â':
        case '2010006225':
            link = 'http://dl.cm.ksmobile.com/static/res/fixed/f9/CleanMaster_2010006225_0_20160715.apk';
        break;
        case '2010006231':
            link = 'http://dl.cm.ksmobile.com/static/res/50/a6/CleanMaster_2010006231_0_1466073358.apk';
        break;
        case '2010006232':
            link = 'http://dl.cm.ksmobile.com/static/res/38/99/CleanMaster_2010006232_0_1466073956.apk';
        break;
        case '2016112201':
            link = 'http://dl.cm.ksmobile.com/static/res/b7/b8/CleanMaster51421076.apk';
        break;
        case '2016112202':
            link = 'http://dl.cm.ksmobile.com/static/res/d4/9a/CleanMaster51421078.apk';
        break;
        case 'skinShare':
            link = 'http://dl.cm.ksmobile.com/static/res/fixed/cb/CleanMaster_skin_2010006900.apk';
        break;
    }

    if (link !== '') {
        downCode = '<a class="log-down" stat="log-down-btn" href="'+link+'">下载</a>'
        $('.homeDown').attr('href', ''+link);
    }
    // if (getQueryString('f') == '100031') {
    //     downCode = '<a class="log-down" stat="log-down-btn" href="http://bj.download.ijinshan.com/clean_master/cleanmaster100031.apk">下载</a>'
    //     $('.homeDown').attr('href', 'http://bj.download.ijinshan.com/clean_master/cleanmaster100031.apk');
    // }
    // if (getQueryString('f') == '2010002301') {
    //     downCode = '<a class="log-down" stat="log-down-btn" href="http://dl.cm.ksmobile.com/static/res/6b/a6/CleanMaster_2010002301_0_1418373505.apk">下载</a>'
    //     $('.homeDown').attr('href', 'http://dl.cm.ksmobile.com/static/res/6b/a6/CleanMaster_2010002301_0_1418373505.apk');
    // }
    // if (getQueryString('f') == '2010006196') {
    //     downCode = '<a class="log-down" stat="log-down-btn" href="http://dl.cm.ksmobile.com/static/res/7b/b5/CleanMaster_2010006196_0_1463645484.apk">下载</a>'
    //     $('.homeDown').attr('href', 'http://dl.cm.ksmobile.com/static/res/7b/b5/CleanMaster_2010006196_0_1463645484.apk');
    // }
    // if (getQueryString('f') == '2010006219') {
    //     downCode = '<a class="log-down" stat="log-down-btn" href="http://dl.cm.ksmobile.com/static/res/8a/69/CleanMaster_2010006219_0_1465812670.apk">下载</a>'
    //     $('.homeDown').attr('href', 'http://dl.cm.ksmobile.com/static/res/8a/69/CleanMaster_2010006219_0_1465812670.apk');
    // }

    if (K.isMobile) {
        rFunctionBar.hide();
        $('#pgyy').attr('src', 'images/cmlite/t3_white.png');
    }
    if (IsIOS || IsphoneIE) {
        homeDowna.attr('href', 'javascript:;');
        homeDowna.addClass('isIoss');
        $('#iosTips').html('*请在 Android 手机或在电脑上下载');
    }
    if (IsIOS || IsAndroid || IsphoneIE) {
        $('#wxCleanbtn').attr('href', 'http://cn.cmcm.com/activity/cm-wxclear/?from=guanwang');
    }
    if (logContent || typeof(logContent) != 'undefined') {
        logContent.eq(0).append(downCode);
        var logDown = $('.log-down');
        var logContentHeight = logContent.outerHeight();
        logDown.css({
            height: logContentHeight
        });
        logDown.hover(function() {
            $(this).addClass('logdhover');
        }, function() {
            $(this).removeClass('logdhover');
        });
        logDown.click(function() {
            var f = (getQueryString('f') ? '-' + getQueryString('f') : '');
            try {
                _hmt.push(['_trackEvent', 'log-down-btn', 'click', 'log-btn-down' + f]);
            } catch (e) {}
        });
    }
    homeDowna.click(function() {
        var ua = navigator.userAgent.toLowerCase(),
            statData = $(this).attr('stat'),
            f = (getQueryString('f') ? '-' + getQueryString('f') : '');
        if (IsAndroid) {
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                wxOpenb.show();
            }
        }
        try {
            _hmt.push(['_trackEvent', 'home-down', 'click', 'home-btn-down' + f]);
        } catch (e) {}
    });
    wxOpenb.click(function(event) {
        $(this).hide();
    });
    fbBtn.hover(function() {
        var _this = $(this);
        if (!_this.hasClass('fb-dcode')) {
            dCode.hide();
            rFunctionBar.find('.fb-dcode').removeClass('away');
        }
        if (_this.hasClass('fb-wx')) {
            gCode.show();
        }
        if (_this.hasClass('fb-dcode')) {
            dCode.show();
        }
        if (_this.hasClass('fb-qq')) {
            qCode.show();
        }
    }, function() {
        var _this = $(this);
        if (_this.hasClass('fb-wx')) {
            gCode.hide();
        }
        if (_this.hasClass('fb-dcode')) {
            dCode.hide();
        }
        if (_this.hasClass('fb-qq')) {
            qCode.hide();
        }
    });
    languageMenu.hover(function() {
        $(this).addClass('languageAnition');
    }, function() {
        $(this).removeClass('languageAnition');
    });
    /* 视频 */
    var VideoYouKuURL1 = 'http://player.youku.com/embed/XODQxMzc4MDgw';
    var VideoYouKuURL2 = 'http://player.youku.com/embed/XMjc3OTE1MzgxMg';
    var iframeUrl = '<iframe height="100%" width="100%" src="'+ VideoYouKuURL2 +'" frameborder="0" allowfullscreen></iframe>',
        videoMain = $('.video-main'),
        videoWrap = $('.video-wrap'),
        playVideo = $('#playVideo'),
        closeVideo = $('.close-btn');
    playVideo.click(function() {
        $('body,html').css({
            overflow: 'hidden'
        });
        videoWrap.show().css({
            height: $(window).height() + 'px'
        });
        videoMain.html(iframeUrl);
        _hmt.push(['_trackEvent', 'home-down', 'click', 'home-btn-play']);

    });
    closeVideo.click(function() {
        $('body,html').css({
            overflow: 'visible'
        });
        videoWrap.hide().css({
            height: '0px'
        });
        videoMain.html('');
    });
    /* 导航统计 */
    $('#menu a').on('click',function(){
        _hmt.push(['_trackEvent', 'home-nav', 'click', 'home-nav-'+$(this).text()]);
    });
})(jQuery);
/* slide */
SlideClass = {
        hasPrototype: false,
        newClass: function(ele) {
            var ele = ele || {};
            if (!this.hasPrototype) {
                this.init.prototype = SlideClass;
                this.hasPrototype = true;
            }
            return new this.init(ele);
        },
        init: function(ele) {
            var _this = this;
            _this.clearAnimation = null;
            _this.item = 0;
            _this.speed = ele.speed;
            _this.interval = ele.interval;
            _this.prev = ele.prve;
            _this.next = ele.next;
            _this.length = ele.slideMain.length;
            _this.slideMain = ele.slideMain;
            _this.aCur = ele.aCur;
            _this.curName = ele.curName;
            _this.addclassName = ele.addclassName;
            _this.hoveMain = ele.hoverMain;
            _this.touchId = ele.touchId;
            clearTimeout(_this.clearAnimation);
            _this.clearAnimation = setTimeout(function() {
                _this.autoPlay();
            }, _this.interval);
            ele.prev.click(function() {
                _this.prvePage();
            });
            ele.next.click(function() {
                _this.nextPage();
            });
            ele.aCur.click(function() {
                _this.clickCur(this);
            });
            _this.hoverWrap();
        },
        autoPlay: function() {
            var _this = this;
            _this.item == _this.length - 1 ? _this.item = 0 : _this.item++;
            _this.animationObj(_this.item);
            _this.curAnimation(_this.item);
            _this.clearAnimation = setTimeout(function() {
                _this.autoPlay();
            }, _this.interval);
        },
        prvePage: function() {
            var _this = this;
            if (!_this.slideMain.is(':animated')) {
                _this.item == 0 ? _this.item = this.length - 1 : _this.item--;
                _this.animationObj(_this.item);
                _this.curAnimation(_this.item);
            }
        },
        nextPage: function() {
            var _this = this;
            if (!_this.slideMain.is(':animated')) {
                _this.item == _this.length - 1 ? _this.item = 0 : this.item++;
                _this.animationObj(_this.item);
                _this.curAnimation(_this.item);
            }
        },
        clickCur: function(ele) {
            var _this = this;
            clearTimeout(_this.clearAnimation);
            var getItem = $(ele).index();
            _this.aCur.removeClass(_this.curName);
            _this.aCur.eq(getItem).addClass(_this.curName);
            _this.animationObj(getItem);
            _this.item = getItem;
        },
        animationObj: function(getNum) {
            var _this = this;
            _this.slideMain.css({
                opacity: 0,
                zIndex: 0
            });
            _this.slideMain.eq(getNum).addClass(_this.addclassName).stop(true, false).animate({
                opacity: 1,
                zIndex: 8
            }, _this.speed);
        },
        curAnimation: function(eqNum) {
            var aCur = this.aCur,
                _this = this;
            aCur.removeClass(_this.curName);
            aCur.eq(eqNum).addClass(_this.curName);
        },
        hoverWrap: function(ele) {
            var _this = this;
            _this.hoveMain.hover(function() {
                clearTimeout(_this.clearAnimation);
            }, function() {
                _this.clearAnimation = setTimeout(function() {
                    _this.autoPlay();
                }, _this.interval);
            });
        }
    }
    /*配置参数对象*/
var eleObject = {
    speed: 300,
    interval: 5000,
    slideMain: $('#slideMain').find('.slide'),
    curName: 'cur',
    addclassName: 'sldieAnimate',
    prev: $('#slideMain').find('.prev'),
    next: $('#slideMain').find('.next'),
    aCur: $('#slideMain').find('.item a'),
    hoverMain: $('#slideMain'),
    touchId: document.getElementById('slideMain')
};
(function($, undefined) {
    SlideClass.newClass(eleObject);
    var objWindow = $(window),
        functionBars = $('#function-bar'),
        wxcleanPhone = $('.wxclean-phone'),
        eleHtml = $('html');
    if (!K.isMobile) {
        objWindow.on('scroll', function() {
            if ($(document).scrollTop() > 10) {
                functionBars.show();
            } else {
                functionBars.hide();
            }

        });
        if (eleHtml.hasClass('ie ie6') || eleHtml.hasClass('ie ie7') || eleHtml.hasClass('ie ie8')) {
            wxcleanPhone.css({
                width: '473px',
                height: '600px',
                marginLeft: '-450px'
            });
        }
    }
})(jQuery);
