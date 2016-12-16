<div id="container-wrap">
    <div id="banner-wrap" class="aninode">
        <div id="banner" class="content">
            <div class="weather">
                <img src="/images/v3/cmlk-time.png" class="time" />
                <img src="/images/v3/cmlk-slide.png" class="slide" />
            </div>
            <div class="deskinfo aninode">
                <div class="title cmlk-title clear" data-animate="flyTop">
                    <div class="icon"></div><h2><?php echo $deskInfoTitle ?></h2>
                </div>
                <div class="download cmlk-dl clear" data-animate="flyBottom">
                    <a class="gp gp-dl" title="<?php echo $gpTitle ?>" href="<?php echo $gpHrefUrl ?>" target="_blank" onclick="ga('send', 'event', 'V3.cmlk.down.android', 'click', 'google play',1);"><?php echo $gpText ?></a>
                    <p class="no-android" data-animate="flyBottom"><?php echo $pleaseUsePhone ?></p>
                </div>
                <div class="social cmlk-social delay1 clear" data-animate="flyRight">
                    <a href="<?php echo $facebookUrl ?>" target="_blank" class="fb"><span>facebook</span></a>
                    <a href="<?php echo $googlePlusUrl ?>" target="_blank" class="gp"><span>goole plus</span></a>
                </div>
            </div>
        </div>
        <div class="round round-left-top"></div><div class="round round-right-top"></div><div class="round round-left-bottom"></div>
    </div><!-- end #banner-wrap -->

    <div class="page" id="cmlk-ci">
        <div class="content clear">
            <div class="item alignright aninode" data-animation="flyRight">
                <h2 class="title"><?php echo $ciTitle ?></h2>
                <h3 class="desc"><?php echo $ciDesc ?></h3>
                <div class="entry"><?php echo $ciEntry ?></div>
            </div>
            <div class="item alignleft aninode" data-animation="fadeIn">
                <div class="ani-locker">
                    <img src="/images/v3/cmlk-ci-phone.png" class="phone" />
                    <canvas id="cmlk-unlock" class="locker"><img src="/images/v3/cmlk-locker.png" class="locker" /></canvas>
                    <p class="err"><?php echo $failedTxt ?></p>
                    <img src="/images/v3/cmlk-ci-take.png" class="tip scaleIn" />
                </div>
            </div>
        </div>
    </div><!-- end #cmlk-ci -->

    <div class="page" id="cmlk-inr">
        <div class="content clear">
            <h2 class="title aninode" data-animation="flyTop"><?php echo $inrTitle ?></h2>
            <ul class="ani-notice clear">
                <li class="n1">
                    <div class="anibox">
                        <img src="/images/v3/cmlk-inr-phone.png" class="phone" />
                        <img src="/images/v3/cmlk-inr-n1.png" class="notice aninode" />
                    </div>
                    <div class="text"><?php echo $inrText1 ?></div>
                </li>
                <li class="n2">
                    <div class="anibox">
                        <img src="/images/v3/cmlk-inr-phone.png" class="phone" />
                        <img src="/images/v3/cmlk-inr-n2.png" class="notice aninode" />
                    </div>
                    <div class="text"><?php echo $inrText2 ?></div>
                </li>
                <li class="n3">
                    <div class="anibox">
                        <img src="/images/v3/cmlk-inr-phone1.png" class="phone" />
                        <img src="/images/v3/cmlk-inr-finger.png" class="finger" />
                    </div>
                    <div class="text"><?php echo $inrText3 ?></div>
                </li>
            </ul>
        </div>
    </div><!-- end #cmlk-inr -->

    <div class="page" id="cmlk-mc">
        <div class="content clear">
            <div class="item alignleft aninode" data-animation="flyLeft">
                <h2 class="title"><?php echo $mcTitle ?></h2>
                <h3 class="desc"><?php echo $mcDesc ?></h3>
                <div class="entry"><?php echo $mcEntry ?></div>
            </div>
            <div class="item alignright aninode" data-animation="fadeIn">
                <div class="ani-music">
                    <img src="/images/v3/cmlk-mc.png" class="recorder" />
                    <img src="/images/v3/cmlk-mc-5.png" class="note n5" />
                    <img src="/images/v3/cmlk-mc-3.png" class="note n3" />
                    <img src="/images/v3/cmlk-mc-1.png" class="note n1" />
                    <img src="/images/v3/cmlk-mc-4.png" class="note n4" />
                    <img src="/images/v3/cmlk-mc-2.png" class="note n2" />
                </div>
            </div>
        </div>
    </div><!-- end #cmlk-mc -->

    <div class="page" id="cmlk-csp">
        <div class="content clear">
            <div class="item alignright aninode" data-animation="flyRight">
                <h2 class="title"><?php echo $cspTitle ?></h2>
                <h3 class="desc"><?php echo $cspDesc ?></h3>
                <div class="entry">
                    <ul>
                        <li><?php echo $cspEntry1 ?></li>
                        <li><?php echo $cspEntry2 ?></li>
                        <li><?php echo $cspEntry3 ?></li>
                        <li><?php echo $cspEntry4 ?></li>
                    </ul>
                </div>
                <div class="entry dl">
                    <a class="gp gp-dl" title="<?php echo $cspGpTitle ?>" href="<?php echo $cspGpHref ?>" onclick="ga('send', 'event', 'V3.cmlk.down.android', 'click', 'google play',1);" target="_blank"><?php echo $cspGpBtnText ?></a>
                </div>
            </div>
            <div class="item alignleft aninode" data-animation="fadeIn">
                <div class="ani-tools">
                    <img src="/images/v3/cmlk-csp-phone.png" class="phone" />
                    <div class="slide">
                        <img src="/images/v3/cmlk-csp-tool.png" class="tool" />
                    </div>
                </div>
            </div>
        </div>
    </div><!-- end #cmlk-csp -->
</div><!-- end #container-wrap -->
<div class="bg"></div>
