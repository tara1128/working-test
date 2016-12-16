<div id="container-wrap">
    <div class="section">
        <div id="banner-wrap">
            <div id="banner" class="content fadeIn">
                <div class="title flyTop">
                    <h2><?php echo $bigTitle ?></h2>
                    <h4><?php echo $subTitle ?></h4>
                </div>
                <div class="download clear">
                    <a class="gp gp-dl flyRight" title="<?php echo $gpTitle ?>" href="<?php echo $gpHrefUrl ?>" target="_blank" onclick="ga('send', 'event', 'V3.bd.down.android', 'click', 'google play',1);"><?php echo $gpText ?></a>
                    <a style="display:none;" class="as ios-dl flyLeft" title="<?php echo $iosTitle ?>" href="<?php echo $iosHrefUrl ?>" target="_blank" onclick="ga('send', 'event', 'V3.bd.down.ios', 'click', 'app store',1);"><?php echo $iosText ?></a>
                    <p class="no-android-ios flyRight"><?php echo $pleaseUsePhone ?></p>
                </div>
                <div id="bdCharge"></div>
            </div>
        </div><!-- end #banner-wrap -->

        <div class="bd_article" id="bd_desc">
            <div class="content">
                <strong class="bold"><?php echo $descBold ?></strong><?php echo $descDesc ?>
                <div class="social clear">
                    <a href="https://www.facebook.com/ksbatterydoctor" target="_blank" class="fb"><span>facebook</span></a>
                    <a href="https://plus.google.com/106988660091969330839" target="_blank" class="gp"><span>goole plus</span></a>
                    <a href="https://twitter.com/ksbatterydoctor" target="_blank" class="tw"><span>twitter</span></a>
                </div>
            </div>
        </div><!-- end #bd_desc -->

        <div class="bd_article" id="battery_life">
            <div class="content clear">
                <div class="inner">
                    <h2 class="title"><?php echo $lifeTitle ?></h2>
                    <p><?php echo $lifePara ?></p>
                    <div class="animate fadeIn"></div>
                </div>
            </div>
        </div><!-- end #battery_life -->

        <div class="bd_article" id="stage_charging">
            <div class="content">
                <h2 class="title"><?php echo $stageTitle ?></h2>
                <p><?php echo $stagePara ?></p>
            </div>
            <div class="stages">
                <div class="line"></div>
                <div class="content">
                    <div class="column"><div class="stage bold scaleIn sg1"><span><i></i></span><?php echo $stageSg1 ?></div></div>
                    <div class="column"><div class="stage bold scaleIn sg2"><span><i></i></span><?php echo $stageSg2 ?></div></div>
                    <div class="column"><div class="stage bold scaleIn sg3"><span><i></i></span><?php echo $stageSg3 ?></div></div>
                </div>
            </div>
        </div><!-- end #stage_charging -->

        <div class="bd_article bd_regular">
            <div class="content clear">
                <img src="/images/bd/img_bo.png" class="alignright" />
                <h2 class="title"><?php echo $regularTitle ?></h2>
                <p><?php echo $regularPara ?></p>
            </div>
        </div><!-- end #bd_regular -->

        <div class="bd_article bd_regular bd_power">
            <div class="content clear">
                <img src="/images/bd/img_pmt.png" class="alignleft" />
                <h2 class="title"><?php echo $powerTitle ?></h2>
                <p><?php echo $powerPara ?></p>
            </div>
        </div><!-- end #bd_power -->
    </div><!-- end .section -->
</div><!-- end #container-wrap -->
