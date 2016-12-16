<div id="container-wrap">

    <div id="banner-wrap" class="aninode">
        <div id="banner" class="content">
            <img class="logo aninode" data-animation="flyTop" src="/images/v3/cms-logo-new.png" />
            <h2 class="title cms-title aninode" data-animation="flyTop"><?php echo $bigTitle ?></h2>
            <h3 class="sub-title aninode" data-animation="flyBottom"><?php echo $subTitle ?></h3>
            <div class="download cms-dl aninode clear" data-animation="flyBottom">
                <a class="gp gp-dl" title="Android app on Google Play" href="https://play.google.com/store/apps/details?id=com.cleanmaster.security" target="_blank" onclick="ga('send', 'event', 'V3.cms.download', 'click', 'google play',1);"><?php echo $downloadOn ?></a>
                <p class="no-android" data-animation="flyBottom"><?php echo $downloadTxt ?></p>
            </div>
            <div class="social cms-social aninode delay1 clear" data-animation="flyRight">
                <a href="<?php echo $facebookUrl ?>" target="_blank" class="fb"><span>facebook</span></a>
                <a href="<?php echo $googlePlusUrl ?>" target="_blank" class="gp"><span>goole plus</span></a>
                <a href="<?php echo $twitterUrl ?>" target="_blank" class="tw"><span>twitter</span></a>
            </div>
            <img class="arrow" src="/images/v3/cms-arrow-down.png" />
        </div>
    </div><!-- end #banner-wrap -->

    <div class="page" id="cms-app-lock">
        <div class="content clear">
            <div class="item alignleft aninode" data-animation="flyRight">
                <h2 class="title"><?php echo $appLockTitle ?></h2>
                <h3 class="desc"><?php echo $appLockDesc ?></h3>
                <div class="entry"><?php echo $appLockEntry ?></div>
            </div>
            <div class="item alignright aninode">
                <div class="applock-ani">
                    <img src="/images/v3/cms-al-5.png" class="i5" />
                    <img src="/images/v3/cms-al-phone.png" class="phone" />
                    <div class="thief">
                        <img src="/images/v3/cms-al-1.png" class="i1" />
                        <img src="/images/v3/cms-al-3.png" class="i2" />
                    </div>
                    <img src="/images/v3/cms-al-2.png" class="i4" />
                </div>
            </div>
        </div>
    </div><!-- end .page -->

    <div class="page" id="cms-anti-virus">
        <div class="content clear">
            <div class="item alignright aninode" data-animation="flyLeft">
                <h2 class="title"><?php echo $antiVirusTitle ?></h2>
                <h3 class="desc"><?php echo $antiVirusDesc ?></h3>
                <div class="entry"><?php echo $antiVirusEntry ?></div>
            </div>
            <div class="item alignleft aninode" data-animation="fadeIn">
                <div class="anti-virus-ani">
                    <img src="/images/v3/cms-av-4.png" class="i4" />
                    <img src="/images/v3/cms-av-1.png" class="i1" />
                    <img src="/images/v3/cms-av-2.png" class="i2" />
                    <img src="/images/v3/cms-av-3.png" class="i3" />
                </div>
            </div>
        </div>
    </div><!-- end .page -->

    <div class="page" id="cms-privacy">
        <div class="content clear">
            <div class="item alignleft aninode" data-animation="flyLeft">
                <h2 class="title"><?php echo $privacyTitle ?></h2>
                <h3 class="desc"><?php echo $privacyDesc ?></h3>
                <div class="entry"><?php echo $privacyEntry ?></div>
            </div>
            <div class="item alignright aninode" data-animation="fadeIn">
                <div class="privacy-ani">
                    <img src="/images/v3/cms-pc-4.png" class="i4" />
                    <div class="i2"><img src="/images/v3/cms-pc-2.png" /></div>
                    <img src="/images/v3/cms-pc-3.png" class="i3" />
                    <div class="i1"><img src="/images/v3/cms-pc-1.png" /></div>
                </div>
            </div>
        </div>
    </div><!-- end .page -->

    <div class="page" id="cms-wifi-scanner">
        <div class="content clear">
            <div class="item alignright aninode" data-animation="flyRight">
                <h2 class="title"><?php echo $wifiScannerTitle ?></h2>
                <h3 class="desc"><?php echo $wifiScannerDesc ?></h3>
                <div class="entry"><?php echo $wifiScannerEntry ?></div>
            </div>
            <div class="item alignleft aninode">
                <div class="wifi-scanner-ani">
                    <img src="/images/v3/cms-ws-5.png" class="i5" />
                    <img src="/images/v3/cms-ws-1.png" class="i1" />
                    <img src="/images/v3/cms-ws-2.png" class="i2" />
                    <img src="/images/v3/cms-ws-6.png" class="i6" />
                    <div class="finger">
                        <img src="/images/v3/cms-ws-3.png" class="i3" />
                        <img src="/images/v3/cms-ws-4.png" class="i4" />
                    </div>
                </div>
            </div>
        </div>
    </div><!-- end .page -->

</div><!-- end #container-wrap -->
