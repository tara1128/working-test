<div id="container-wrap">
    <div class="section">
        <div id="banner-wrap">
            <div class="video">
                <video loop="loop" autoplay="autoplay">
                    <source src="/images/v3/cml3d-bg.ogv" type='video/ogg; codecs="theora, vorbis"'/>
                    <source src="/images/v3/cml3d-bg.webm" type='video/webm' />
                    <source src="/images/v3/cml3d-bg.mp4" type='video/mp4' />
                </video>
            </div>
            <div id="banner" class="content fadeIn">
                <h2 class="title cml3d-title clear" data-animate="flyTop"><?php echo $cmlTitle ?></h2>
                <div class="cml3d-social" data-animate="flyBottom"><?php echo $socialTitle ?><a href="https://www.facebook.com/cmlauncher" target="_blank" class="fb">facebook</a><a href="https://plus.google.com/112359105591183785121" target="_blank" class="gp">goole plus</a><a href="https://twitter.com/CheetahGlobal" target="_blank" class="tw">twitter</a></div>
                <div class="download cml-dl flyBottom delay2 clear" data-animate="flyBottom">
                    <a class="gp" title="<?php echo $gpTitle ?>" href="https://goo.gl/6wfcwJ" target="_blank" onclick="ga('send', 'event', 'V3.cml3d.down.android.1', 'click', 'google play',1);"><?php echo $gpText ?></a>
                </div>
                <div class="cma3d-banner-link delay1" data-animate="flyBottom"><a href="javascript:;" id="cml3d-video-button"><?php echo $vdBtnTxt ?></a><a href="http://club.cmcm.com/forum.php?mod=viewthread&tid=101" onclick="ga('send', 'event', 'V3.cml3d', 'click', 'Artist Wanted',1);"><?php echo $wantedTxt ?></a></div>
            </div>
        </div><!-- end #banner-wrap -->

        <div class="cml-page" id="cml-anim">
            <div class="content clear">
                <div class="anibox alignleft">
                    <img src="/images/v3/cml3d-animation.png" data-animate="flyLeft" />
                </div>
                <div class="textbox alignright" data-animate="flyRight">
                    <h3 class="title"><?php echo $animTitle ?></h3>
                    <h4 class="desc"><?php echo $animDesc ?></h4>
                    <div class="entry"><?php echo $animEntry ?></div>
                </div>
            </div>
        </div><!-- end #cml-anim -->

        <div class="cml-page" id="cml-boost">
            <div class="content clear">
                <div class="anibox alignright">
                    <img src="/images/v3/cml3d-boost.png" data-animate="fadeIn" />
                    <img src="/images/v3/cml3d-boost2.png" class="boost" data-animate="flyBottom" />
                </div>
                <div class="textbox alignleft" data-animate="flyLeft">
                    <h3 class="title"><?php echo $boostTitle ?></h3>
                    <h4 class="desc"><?php echo $boostDesc ?></h4>
                    <div class="entry"><?php echo $boostEntry ?></div>
                </div>
            </div>
        </div><!-- end #cml-boost -->
        
        <div class="cml-page" id="cml-person">
            <div class="content clear">
                <div class="anibox alignleft">
                    <img src="/images/v3/cml3d-person2.png" class="person2" />
                    <img src="/images/v3/cml3d-person.png" class="person" data-animate="flyLeft" />
                    <img src="/images/v3/cml3d-person3.png" class="person3" data-animate="fadeIn" />
                </div>
                <div class="textbox alignright" data-animate="flyRight">
                    <h3 class="title"><?php echo $personTitle ?></h3>
                    <h4 class="desc"><?php echo $personDesc ?></h4>
                    <div class="entry"><?php echo $personEntry ?></div>
                </div>
            </div>
        </div><!-- end #cml-person -->

        <div class="cml-page" id="cml-smart">
            <div class="content clear">
                <div class="anibox alignright">
                    <img src="/images/v3/cml3d-fold.png" class="fold" />
                    <img src="/images/v3/cml3d-fold1.png" class="fold1" />
                    <img src="/images/v3/cml3d-fold2.png" class="fold2" />
                </div>
                <div class="textbox alignleft" data-animate="flyLeft">
                    <h3 class="title"><?php echo $smartTitle ?></h3>
                    <h4 class="desc"><?php echo $smartDesc ?></h4>
                    <div class="entry"><?php echo $smartEntry ?></div>
                </div>
            </div>
        </div><!-- end #cml-smart -->

        <div class="cml-page" id="cml-secure">
            <div class="content clear">
                <div class="anibox alignleft">
                    <img src="/images/v3/cml3d_r1.png" class="r1" />
                    <img src="/images/v3/cml3d_r2.png" class="r2" />
                    <img src="/images/v3/cml3d_r3.png" class="r3" />
                    <img src="/images/v3/cml3d_r4.png" class="r3" />
                </div>
                <div class="textbox alignright" data-animate="flyRight">
                    <h3 class="title"><?php echo $secureTitle ?></h3>
                    <h4 class="desc"><?php echo $secureDesc ?></h4>
                    <div class="entry"><?php echo $secureEntry ?></div>
                    <div class="powered"><i></i><?php echo $poweredBy ?></div>
                </div>
            </div>
        </div><!-- end #cml-secure -->

        <div class="cml-page" id="cml-footer">
            <div class="content clear">
                <div class="textbox alignleft" data-animate="flyLeft">
                    <div class="cml-title clear"></div>
                    <div class="cml-dl clear">
                        <a class="gp gp-dl" title="<?php echo $footerGpTitle ?>" href="https://goo.gl/6wfcwJ" target="_blank" onclick="ga('send', 'event', 'V3.cml.down.android.2', 'click', 'google play',1);"><?php echo $downloadOn ?></a>
                        <img src="/images/v3/cml_qrcode.png" class="qrcode" />
                        <p class="no-android flyLeft delay1"><?php echo $noAndroidTxt ?></p>
                    </div>
                    <div class="cml-social clear">
                        <a href="https://www.facebook.com/cmlauncher" target="_blank" class="fb">facebook</a>
                        <a href="https://plus.google.com/112359105591183785121" target="_blank" class="gp">goole plus</a>
                        <a href="https://twitter.com/CheetahGlobal" target="_blank" class="tw">twitter</a>
                    </div>
                </div>
                <img src="/images/v3/cml3d-phone.png" class="phone alignright" data-animate="flyRight"/>
            </div>
        </div><!-- end #cml-footer -->

    </div><!-- end .section -->
</div><!-- end #container-wrap -->
