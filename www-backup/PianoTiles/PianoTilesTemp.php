<div id="ptWrap">

    <div class="pt-content" id="switchDo">
      <div class="pt-do-tile"><img src="/images/pt/pt-big-tile.png" /></div>
      <div class="pt-do-text"><img src="/images/pt/pt-big-text.png" /></div>
      <div class="pt-do-crumb">
        <img class="pt-crm-pc" src="/images/pt/pt-crumb.png" />
        <img class="pt-crm-mob" src="/images/pt/pt-crumb-on-mobile.png" />
      </div>
      <a class="pt-do-download-btn pt-triple-layer-btn" id="ptDownLoadBtna" title="<?php echo $Download ?>">
        <s class="btn-shadow"></s>
        <s class="btn-body"></s>
        <s class="btn-face  <?php echo $downloadBtnFace ?>"></s>
      </a>
    </div><!-- pt content #switchDo -->

    <div class="pt-content" id="switchRe">
      <div class="pt-pulr-title">
        <h2 class="section-title"><?php echo $ReTitle ?></h2>
      </div>
      <div class="pt-pulr-intro">
        <p><?php echo $ReIntro1 ?></p>
        <p class="pt-pulr-hide-in-mobile"><?php echo $ReIntro2 ?></p>
      </div>
      <div class="pt-pulr-video">
        <div class="pt-vd-box">
          <img class="pt-video-bg-img" id="vdBgImg" src="/images/pt/pt-video-bg.png" />
          <div class="pt-video-wrap" id="vdWrap">
            <a href="javascript:;" class="pt-video-btn play" id="vdPlayBtn"></a>
            <video id="Video" preload="load" width="406" height="720">
              <source src="/images/pt/pt-video.mp4" type="video/mp4"></source>
              <source src="/mages/pt/pt-video.ogv" type="video/ogg"></source>
              <source src="/images/pt/pt-video.webm" type="video/webm"></source>
            </video>
          </div><!-- video wrap -->
        </div><!-- vd box -->
        <span class="pt-vd-normal-guy"><img src="/images/pt/pt-normal-guy.png" /></span>
        <span class="pt-vd-tall-guy"><img src="/images/pt/pt-tall-guy.png" /></span>
        <span class="pt-vd-fat-guy"><img src="/images/pt/pt-fat-guy.png" /></span>
      </div><!-- pulr video -->
      <a class="pt-pulr-fake-video" href="https://youtu.be/r-KncLOiCC4" target="_blank"></a>
      <div class="pt-pulr-coins clearfix" id="ptGameScore">
        <i class="csa"><img src="<?php echo $ReCoin1 ?>" /></i>
        <i class="csb"><img src="<?php echo $ReCoin2 ?>" /></i>
        <i class="csc"><img src="<?php echo $ReCoin3 ?>" /></i>
      </div>
      <span class="pt-pulr-honor"><img src="/images/pt/pt-best-of-2015.png" /></span>
    </div><!-- pt content #switchRe -->

    <div class="pt-content" id="switchMe">
      <div class="pt-music-title">
        <h2 class="section-title"><?php echo $MeTitle ?></h2>
      </div>
      <div class="pt-music-intro">
        <span class="pt-pusic-hide-in-mobile"><?php echo $MeIntro1 ?></span>
        <span><?php echo $MeIntro2 ?></span>
      </div>
      <div class="pt-music-bmg">
        <em><?php echo $MeCoopTxt ?></em>
        <i><img src="/images/pt/pt-wind-music-bmg.png" /></i>
      </div>
      <div class="pt-music-playfield">
        <div class="pt-music-main" id="ptMusicMain">
          <div class="pt-music-obja pt-cdobj clearfix">
            <img class="pt-cdpic pt-cd-rotate cdRotate" src="/images/pt/pt-cdpic-freeloop-zip.png" />
            <div class="pt-cdbtn pt-cd-rotate cdRotate"></div>
            <div class="pt-cd-trigger cdTrigger" data="0"></div>
            <audio class="CDAudio_0" src="/images/pt/pt-music-freeloop.mp3" loop="loop"></audio>
            <s class="accessary frlp"></s>
            <s class="accessary yelmark"></s>
            <s class="accessary rightmark"></s>
          </div>
          <div class="pt-music-objb pt-cdobj clearfix">
            <img class="pt-cdpic pt-cd-rotate cdRotate" src="/images/pt/pt-cdpic-littlestar-zip.png" />
            <div class="pt-cdbtn pt-cd-rotate cdRotate"></div>
            <div class="pt-cd-trigger cdTrigger" data="1"></div>
            <audio class="CDAudio_1" src="/images/pt/pt-music-littlestar.mp3" loop="loop"></audio>
            <s class="accessary litstr"></s>
            <s class="accessary leftstr"></s>
            <s class="accessary topstr"></s>
          </div>
          <div class="pt-music-objc pt-cdobj clearfix">
            <img class="pt-cdpic pt-cd-rotate cdRotate" src="/images/pt/pt-cdpic-forest-zip.png" />
            <div class="pt-cdbtn pt-cd-rotate cdRotate"></div>
            <div class="pt-cd-trigger cdTrigger" data="2"></div>
            <audio class="CDAudio_2" src="/images/pt/pt-music-forest.mp3" loop="loop"></audio>
            <s class="accessary elves"></s>
            <s class="accessary oneleaf"></s>
            <s class="accessary leftleaf"></s>
            <s class="accessary topleaf"></s>
          </div>
          <div class="pt-music-bars-in-mobile">
            <div class="pt-music-bar cdBars bar-a active" data="0"></div>
            <div class="pt-music-bar cdBars bar-b" data="1"></div>
            <div class="pt-music-bar cdBars bar-c" data="2"></div>
          </div><!-- bars in mobile -->
        </div><!-- music main -->
      </div><!-- play field -->
    </div><!-- pt content #switchMe -->

    <div class="pt-content" id="switchFa">
      <div class="pt-comp-title">
          <h2 class="section-title"><?php echo $FaTitle ?></h2>
        </div>
      <p class="pt-comp-intro"><?php echo $FaIntro ?></p>
      <a class="pt-fb-icon"><img src="/images/pt/pt-facebook-icon.png" /></a>
      <ul class="pt-comp-list clearfix" id="ptbList">
        <li class="comp-1"><img class="chart-img-1" src="/images/pt/pt-charts-1s.png" /></li>
        <li class="comp-2"><img class="chart-img-2" src="/images/pt/pt-charts-2s.png" /></li>
        <li class="comp-3"><img class="chart-img-3" src="/images/pt/pt-charts-3s.png" /></li>
        <li class="comp-4"><img class="chart-img-4" src="/images/pt/pt-charts-4s.png" /></li>
        <li class="comp-5"><img class="chart-img-5" src="/images/pt/pt-charts-5s.png" /></li>
      </ul>
    </div><!-- pt content #switchFa -->

    <div class="pt-content" id="switchSo">
      <div class="pt-stories-title">
          <h2 class="section-title"><?php echo $SoTitle ?></h2>
        </div>
      <p class="pt-stories-intro"><?php echo $SoIntro ?></p>
      <a class="pt-prev" href="javascript:;"></a>
      <div class="pt-players-wrap clearfix">
          <div class="pt-players-main clearfix" id="playersMains">
            <ul class="pt-players-list" id="ptPlayersList">
        <li class="pt-dialog-li-1">
            <div class="pt-players-story">
                        <p class="pt-players-text"><?php echo $SoPlayerStory1 ?></p>
                    </div>
                    <div class="pt-musical-note"></div>
                    <s class="pt-dialog-arrow"></s>
        </li>
        <li class="pt-dialog-li-2">
            <div class="pt-players-videostory">
                        <img src="/images/pt/pt-cat-master.png" />
                        <a class="pt-story-ply-btn" href="https://www.youtube.com/watch?v=icXN5-DJloc" target="_blank"></a>
                    </div>
                    <p class="pt-players-vdtitle">This cat can be master of Piano Tiles 2</p>
                    <s class="pt-dialog-arrow"></s>
        </li>
        <li class="pt-dialog-li-3">
            <div class="pt-players-story">
                        <p class="pt-players-text"><?php echo $SoPlayerStory2 ?></p>
                    </div>
            <div class="pt-players-icon"><i></i><i></i><i></i></div>
                    <s class="pt-dialog-arrow"></s>
        </li>
        <li class="pt-dialog-li-4">
                    <s class="pt-dialog-arrow"></s>
            <div class="pt-players-story">
                        <p class="pt-players-text"><?php echo $SoPlayerStory3 ?></p>
                    </div>
                    <div class="pt-plus-tones"></div>
        </li>
        <li class="pt-dialog-li-5">
                    <s class="pt-dialog-arrow"></s>
            <div class="pt-players-story">
                      <p class="pt-players-text"><?php echo $SoPlayerStory4 ?></p>
                    </div>
                    <div class="pt-plus-star"></div>
        </li>
          </ul>
      </div><!-- players main -->
    </div><!-- players wrap -->

    <a class="pt-next" href="javascript:;"></a>
      <div class="players-bg-img">
        <div class="pt-stage-elements pt-player-left-tall-guy">
          <s class="shadow"></s>
          <img src="/images/pt/pt-left-tall-guy.png" />
        </div>
        <div class="pt-stage-elements pt-player-left-purple-guy">
          <s class="shadow"></s>
          <img src="/images/pt/pt-left-purple-guy.png" />
        </div>
        <div class="pt-stage-elements pt-player-red-guy">
          <s class="shadow"></s>
          <img src="/images/pt/pt-red-guy.png" />
        </div>
        <div class="pt-stage-elements pt-player-middle-guy">
          <s class="shadow"></s>
          <img src="/images/pt/pt-middle-guy.png" />
        </div>
        <div class="pt-stage-elements pt-player-giant-guy">
          <s class="shadow"></s>
          <img src="/images/pt/pt-giant-guy.png" />
        </div>
        <div class="pt-stage-elements pt-player-yellow-guy">
          <s class="shadow"></s>
          <img src="/images/pt/pt-yellow-guy.png" />
        </div>
        <div class="pt-stage-elements pt-player-right-purple-guy">
          <s class="shadow"></s>
          <img src="/images/pt/pt-right-purple-guy.png" />
        </div>
        <div class="pt-stage-elements pt-stage-left-light"><img src="/images/pt/pt-floor-left-light.png" /></div>
        <div class="pt-stage-elements pt-stage-right-light"><img src="/images/pt/pt-floor-right-light.png" /></div>
      </div>
    </div><!-- pt content # switchSo -->

    <!-- Right down -->
    <div class="pt-right-down" id="ptRightDown">
      <span class="pt-rd-img"><img src="/images/pt/pt-rightdown-logo.png" /></span>
      <p>
        <a class="pt-rd-ios" href="https://itunes.apple.com/us/app/piano-tiles-2-dont-tap-white/id1027688889?mt=8" target="_blank" onclick="ga('send','event','piano-tiles','click','download-ios',1)"></a>
        <a class="pt-rd-android" href="https://play.google.com/store/apps/details?id=com.cmplay.tiles2" target="_blank" onclick="ga('send','event','piano-tiles','click','download-android',1)"></a>
      </p>
    </div>

    <canvas id="myCanvas"></canvas>
    
  </div><!-- End of #ptWrap -->
  
  <!-- PT footer -->
  <div class="pt-footer" id="ptVfooter">
    <span class="pt-foot-title">
      <h2 class="section-title"><?php echo $FooterTitle ?></h2>
    </span>
    <a class="pt-foot-download-btn pt-triple-layer-btn" title="<?php echo $Download ?>" id="ptDownLoadBtnb">
      <s class="btn-shadow"></s>
      <s class="btn-body"></s>
      <s class="btn-face  <?php echo $downloadBtnFace ?>"></s>
    </a>
    <span class="pt-foot-pianist"></span>
  </div><!-- pt footer -->

  <!-- Buttons on the right side -->
  <div id="pt-cur">
    <a data="switch-do" class="cur-pages">Do</a>
    <a data="switch-re">Re</a>
    <a data="switch-me">Me</a>
    <a data="switch-fa">Fa</a>
    <a data="switch-so">So</a>
  </div><!-- Btns on the right side -->
