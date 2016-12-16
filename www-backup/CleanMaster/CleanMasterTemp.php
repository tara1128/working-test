<div id="container-wrap">
  <div class="section">

    <div id="banner-wrap">
      <div id="banner" class="content fadeIn">
        <div class="title flyTop">
          <h2><?php echo $bigTitle ?></h2>
          <h4><?php echo $subTitle ?></h4>
        </div>
        <div class="social">
          <a href="<?php echo $facebookUrl ?>" target="_blank" class="fb flyRight" onClick="ga('send', 'event', 'V3.cm.fb'+__FROM, 'click', 'fb',1);"><span>facebook</span></a>
          <a href="<?php echo $googlePlusUrl ?>" target="_blank" class="gp flyRight delay2" onClick="ga('send', 'event', 'V3.cm.gp'+__FROM, 'click', 'gp',1);"><span>goole plus</span></a>
          <a href="https://twitter.com/cleanmaster" target="_blank" class="tw flyRight delay1" onClick="ga('send', 'event', 'V3.cm.tw'+__FROM, 'click', 'tw',1);"><span>twitter</span></a>
        </div><!-- end .social --> 
        <div class="download clear">
          <a class="gp gp-dl flyLeft delay1" href="https://play.google.com/store/apps/details?id=com.cleanmaster.mguard&referrer=utm_source%3Dksmobile" target="_blank" onClick="ga('send', 'event', 'V3.cm.down.android'+__FROM, 'click', 'google play',1);"><?php echo $downloadDelay1 ?></a>
          <p class="no-android flyLeft delay1">Please download it with an Android device or on your computer</p>
          <a class="btg flyLeft delay2" href="https://plus.google.com/u/1/communities/106742377658392172082" target="_blank" onClick="ga('send', 'event', 'V3.cm.link.group'+__FROM, 'click', 'group',1);"><?php echo $downloadDelay2 ?></a>
          <a class="htu flyLeft" href="/product/features.html" onClick="ga('send', 'event', 'V3.cm.link.features'+__FROM, 'click', 'features',1);"><?php echo $seeAppFeatures ?></a>
        </div><!-- end .download .clear --> 
        <div class="app flyRight"></div>
        <div class="play scaleIn">
          <a href="<?php echo $youTubeUrl ?>" target="_blank" title="Play" id="play" onClick="ga('send', 'event', 'V3.cm.link.video', 'click', 'video',1);">Play</a>
        </div>
      </div><!-- end #banner -->
    </div><!-- end #banner-wrap -->

    <div class="content">
      <div class="article" id="info">
        <h4><?php echo $articleInfo ?></h4>
      </div><!-- end .article -->
      <div class="article" id="cm_state">
        <img src="/images/v3/state_icon.png" alt="" title="" class="icon" />
        <ul>
          <li class="rate">
            <p class="star">4.7<br/><span></span><span></span><span></span><span></span><span class="last"></span></p>
            <p class="desc"><?php echo $rateDesc1 ?><br/><strong><?php echo $rateDesc2 ?></strong></p>
          </li>
          <li><?php echo $over600Mln ?></li>
          <li><?php echo $cleanJunkFiles ?></li>
          <li class="last"><?php echo $freeUpRAM ?></li>
        </ul>
      </div><!-- end .article -->
      <div class="article" id="cm_thanks">
        <p class="p1"><?php echo $cmThanksP1 ?></p>
        <p class="p2"><?php echo $cmThanksP2 ?></p>
        <img src="/images/v3/rocket.png" alt="rocket" title="rocket" class="icon" />
      </div><!-- end .article -->
      <div class="article" id="cm_feature">
        <ul class="clear">
          <li class="remove-junk-files">
            <div class="icon"></div>
            <h4><?php echo $h4JunkFiles ?></h4>
            <p><?php echo $paraJunkFiles ?></p>
          </li>
          <li class="memory-boost">
            <div class="icon"></div>
            <h4><?php echo $h4MemoBoost ?></h4>
            <p><?php echo $paraMemoBoost ?></p>
          </li>
          <li class="protect-privacy">
            <div class="icon"></div>
            <h4><?php echo $h4ProtPriv ?></h4>
            <p><?php echo $paraProtPriv ?></p>
          </li>
          <li class="app-manager">
            <div class="icon"></div>
            <h4><?php echo $h4AppManager ?></h4>
            <p><?php echo $paraAppManager ?></p>
          </li>
        </ul>
      </div><!-- end .article -->
    </div><!-- end .content -->

  </div><!-- end .section -->
</div><!-- End #container-wrap -->
