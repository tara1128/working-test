var UA = window.navigator.userAgent,
	IsAndroid = (/Android|HTC/i.test(UA)),
	/* HTC Flyer平板的UA字符串中不包含Android关键词 */
	IsIPad = !IsAndroid && /iPad/i.test(UA),
	IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA),
	IsIOS = IsIPad || IsIPhone,
	IsWindowsPhone = /Windows Phone/i.test(UA),
	IsIEMobile = /IEMobile/i.test(UA),
	IsIE = !!document.all,
	IsIE6 = IsIE && !window.XMLHttpRequest,
	IsCM = false;
if (typeof android != 'undefined') {
	IsCM = true;
} else {
	var android = {};
}
if (IsIE6) {
	try {
		document.execCommand('BackgroundImageCache', false, true);
	} catch (e) {}
}
/**异步加载JS的方法*/
function loadJS(url, callback, el) {
	var script = document.createElement("script"),
		head = IsIE6 ? document.documentElement : document.getElementsByTagName("head")[0];
	script.type = "text/javascript";
	script.async = true;
	if (script.readyState) {
		script.onreadystatechange = function() {
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				if (callback) {
					callback();
				}
			}
		}
	} else {
		script.onload = function() {
			if (callback) {
				callback();
			}
		}
	}
	script.src = url;
	if (el) {
		document.getElementById(el).appendChild(script);
	} else {
		head.insertBefore(script, head.firstChild);
	}
};
/*
	获取url中的参数
*/
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

/*判断元素是否在可见窗口*/
function elementVisiable(el) {
	var el = el instanceof jQuery ? el.get(0) : el, //如果是jQuery对象就通过get方法转为dom对象
		pos = el.getBoundingClientRect(),
		winH = window.innerHeight || document.documentElement.clientHeight;
	return (pos['top'] > 0 && winH - pos['top'] > 0) || (pos['top'] <= 0 && pos['bottom'] >= 0)
};

/*
	cookie操作方法
*/
$cookie = function(name, value, options) {
	if (typeof value != 'undefined') {
		options = options || {};
		if (value === null) {
			value = '';
			options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date();
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString();
		}
		var path = options.path ? '; path=' + options.path : '';
		var domain = options.domain ? '; domain=' + options.domain : '';
		var secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else {
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = $.trim(cookies[i]);
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
};



/*支持的语言类型*/
var LangType = [
	'en-us',
	'es-es',
	'fr-fr',
	'ru-ru',
	'pt-pt',
	'ja-jp',
	'ko-kr',
	'zh-tw',
	'zh-cn'
];



/*语言切换*/
var Lang = {
	data: {
		'en-us': {
			'more': 'More',
			'products': 'Products',
			// 'media': ['Media','News','Press Kit','Blog','CEO talks','For business'],
			'media': ['Media','Cheetah Ad Platform', 'Blog', 'Security Topics', 'CEO Talks', 'Press Release'],
			'about': ['About', 'Company Information', 'Investor Relations', 'Promotion Policy', 'Global Talent', 'Contact Us'],
			'privacy': 'Privacy Policy',
			'curlang': 'English'
		},
		'es-es': {
			'more': 'Más',
			'products': 'Productos',
			'media': ['Multimedia', 'Blog', 'Noticias de Seguridad', 'Habla CEO', 'Para el negocio'],
			'about': ['Acerca de', 'Información de la compañía', 'Relaciones con los inversores', 'Política de promoción', 'Talento Global', 'Contacte con nosotros'],
			'privacy': 'Política de privacidad',
			'curlang': 'Español'
		},
		'fr-fr': {
			'more': 'Plus',
			'products': 'Produits',
			'media': ['Média', 'Actualités', 'Blog', 'Security Topics','CEO talks', 'Press Release'],
			// 'media': ['Média', 'Actualités', 'Dossier de presse', 'Blog', 'CEO talks', 'Press Release'],
			'about': ['À propos', 'Informations sur la société', 'Relations Investisseurs', 'Politique de promotion', 'Annonceurs', 'Nous contacter'],
			'privacy': 'Politique de confidentialité',
			'curlang': 'Français'
		},
		'ru-ru': {
			'more': 'Ещё',
			'products': 'Продукты',
			'media': ['Медиа', 'Новости', 'Пресс-кит', 'Блог', 'CEO talks', 'Форум'],
			'about': ['О приложении', 'О компании', 'Отношения с инвесторами', 'Политика продвижения', 'Рекламодатели', 'Связаться с нами'],
			'privacy': 'конфиденциальности',
			'curlang': 'Pусский'
		},
		'pt-pt': {
			'more': 'Mais',
			'products': 'Produtos',
			'media': ['Imprensa', 'Notícias', 'Informações para a Imprensa', 'Blog', 'CEO talks'],
			'about': ['Sobre', 'Informações da Empresa', 'Relações com Investidores', 'Política de Promoção', 'Anunciantes', 'Fale Conosco'],
			'privacy': 'Política de Privacidade',
			'curlang': 'Português'
		},
		'ja-jp': {
			'more': 'もっと見る',
			'products': '製品',
			'media': ['メディア', 'ニュース', 'プレスキット', 'ブログ', 'CEO talks'],
			'about': ['About', '会社情報', '株主・投資家の方', 'プロモーションポリシー', '広告主', 'お問い合わせ'],
			'privacy': 'プライバシーポリシー',
			'curlang': '日本語'
		},
		'ko-kr': {
			'more': '더 보기',
			'products': '제품소개',
			'media': ['미디어', '뉴스', '보도 자료', '블로그', 'CEO talks'],
			'about': ['정보', '회사 정보', '투자 정보', '진흥 정책', '연락 광고', '고객센터'],
			'privacy': '개인정보 보호 정책',
			'curlang': '한국어'
		},
		'zh-tw': {
			'more': '更多',
			'products': '產品',
			'media': ['媒體', '新聞', '宣傳資料', '部落格', 'CEO talks'],
			'about': ['關於', '公司資訊', '投資關係', '推廣策略', '廣告聯繫', '聯絡我們'],
			'privacy': '隱私協議',
			'curlang': '繁體中文'
		},
		'zh-cn': {
			'more': '更多',
			'products': '产品',
			'media': ['媒体', '新闻', '宣传资料', '博客', 'CEO talks', '商业产品'],
			'about': ['关于', '公司信息', '投资关系', '推广策略', '广告联系', '联系我们'],
			'privacy': '隐私协议',
			'curlang': '简体中文'
		}
	},
	init: function() {
		var parmLang = getQueryString('lang') || $cookie('lang'),
			url = location.href;
		/*产品页面会记cookie，但是其他页面如blog 不记cookie*/
		for (var i = 0; i < LangType.length; i++) {
			if (url.indexOf('/' + LangType[i] + '/') > -1) {
				$cookie('lang', LangType[i], {
					expires: 730,
					path: '/'
				});
				return;
			}
		}
		/*中文和繁体设置了独立的模版*/
		/*7.10更新：去掉这个逻辑*/
		if (parmLang && url.indexOf('/blog/cn') == -1 && url.indexOf('/blog/tw') == -1) {
			Lang.setMenu(parmLang);
		}
	},
	/*一些页面只有英文版，这个时候需要依靠js去改写页面menu*/
	setMenu: function(parm) {
		if (!parm || parm == '' || parm == 'null') return;
		var moreEl = $('#more span'),
			menuEl = $('#menuMore'),
			privacyEl = $('.foot-copy a'),
			curlangEl = $('.lang-current');
		$('#menus a,#menuMore a').each(function() {
			var link = $(this).attr('href');
			$(this).attr('href', link.replace('/en-us/', '/' + parm + '/'));
		});

		moreEl.text(Lang.data[parm]['more']);
		moreEl.text(Lang.data[parm]['more']);
		privacyEl.text(Lang.data[parm]['privacy']);
		curlangEl.text(Lang.data[parm]['curlang']);
		menuEl.find('h2').eq(0).text(Lang.data[parm]['products']);
		$('#menuMore h2').eq(1).text(Lang.data[parm]['media'][0]);
		$('#menuMore h2').eq(2).text(Lang.data[parm]['about'][0]);
		menuEl.find('li').eq(1).children('a').each(function(i) {
			$(this).html('<span></span>' + Lang.data[parm]['media'][i + 1]);
			/*暂时ceo talks 只有 en-us 版本*/
			if (parm != 'en-us' && i == 3) {
				$(this).hide();
				$(this).next().remove();
			}
		})
		menuEl.find('li').eq(2).children('a').each(function(i) {
			$(this).html('<span></span>' + Lang.data[parm]['about'][i + 1]);
		});
		$('body').removeClass('body-en-us').addClass('body-' + parm);
	}
};


/*详情页业务逻辑*/
var Detail = {
	init: function() {
		/**
			标记一些特殊来源
			f:值为cm 或 cms，主要用于判断blog详情底部推荐应用逻辑，如果从cm里面推送该blog，则不应该显示cm的推广按钮
			p:值暂时只有cm，判断是否需要隐藏blog页面的头尾，如cm调用的隐私协议页面
			se_rbtn_act: cm 时光墙在webview底部强制插入客户端的按钮，这时也不必显示down btns，目前取值100
		**/
		var parm = getQueryString('f'),
			query = getQueryString('p'),
			clientBtn = getQueryString('se_rbtn_act'),
			footEl = $('#fix-down'),
			downEls = $('#fix-down a'),
			marketLink;
		/*只在移动端显示赞的按钮*/
		if (IsAndroid || IsIOS) {
			$('.social_like').show();
		}
		/*cm 内置的浏览器暂时不支持market协议*/
		/*if (IsAndroid) {
			downEls.each(function() {
				marketLink = $(this).attr('market');
				if (marketLink) {
					$(this).attr('href',marketLink)
				}
			});
		}*/
		Detail.imageLoad();
		/*分享成功的回调，但是这个webview好像没有用*/
		window.sharesuccessed = function() {
			alert('Share Success')
		}
		$('#fix-down a,.social-share a').click(function(e) {
			var link = $(this).attr('href'),
				id = $(this).attr('data-id') || '',
				type = $(this).attr('class'),
				cate = 'V3.blog.down',
				source = '';
			if (parm) {
				source = '_' + parm;
			}
			if ($(this).parent().hasClass('social-share')) {
				cate = 'V3.blog.share'
			}
			try {
				ga('send', 'event', cate, 'click', '' + type + '_' + id + source, 1);
			} catch (e) {}
			/*调用客户端方法*/
			if (IsCM && 'share' in android) {
				var shareType = 1,
					shareLink = location.href,
					shareTitle = $(document).attr('title'),
					shareDescription = $('meta[name="description"]').attr('content'),
					shareImage = ($('.detail-text img').length > 0 ? $('.detail-text img').eq(0).attr('src') : ''),
					fbUrl = $('meta[property="og:url"]'),
					fbTitle = $('meta[property="og:title"]'),
					fbDescription = $('meta[property="og:description"]'),
					fbImage = $('meta[property="og:image"]');
				if (type == 'facebook') {
					shareType = 1;
				}
				if (type == 'twitter') {
					shareType = 2;
				}
				if (type == 'google') {
					shareType = 3;
				}
				if (type == 'weibo') {
					shareType = 4;
				}
				if (type == 'qzone') {
					shareType = 8;
				}
				if (fbUrl.length > 0 && fbUrl.attr('content') != '') {
					shareLink = fbUrl.attr('content');
				}
				if (fbTitle.length > 0 && fbTitle.attr('content') != '') {
					shareTitle = fbTitle.attr('content');
				}
				if (fbDescription.length > 0 && fbDescription.attr('content') != '') {
					shareDescription = fbDescription.attr('content');
				}
				if (fbImage.length > 0 && fbImage.attr('content') != '') {
					shareImage = 'http://www.cmcm.com' + fbImage.attr('content');
				}
				try {
					//alert('@shareType:'+ shareType + '\n@shareLink:' + shareLink + '\n@shareTitle:'+ shareTitle + '\n@shareDescription:' + shareDescription + '\n@shareImage:' + shareImage);
					android.share(shareType, shareLink, shareTitle, shareDescription, shareImage)
						//android.onShareToFriends(shareTitle,shareDescription);
				} catch (e) {}
			} else {
				setTimeout(function() {
					location.href = link;
				}, 200);
			}
			e.preventDefault();
		});
		/*CM 调起fb群组*/
		$('.social-group a').click(function(e) {
			var groupUrl = $(this).attr('href');
			if (IsCM && 'openFacebook' in android) {
				try {
					android.openFacebook(groupUrl);
				} catch (e) {}
				e.preventDefault();

			}
		});
		/*CM 调起分享模块*/
		$('.share-group a').click(function(e) {
			if (IsCM && 'webaction' in android) {
				try {
					window.android.webaction('{"actionType":"6","actionParam":{"functionID":"401","sortTypeID":"1","url":"http://www.baomi.com/","shareText":"ssaaaa","pkgName":"com.cleanmaster.mguard_cn","activityName":"","param":""}}');
				} catch (e) {}
				e.preventDefault();
			}
		});
		/*根据参数判断是否显示调起CM内部功能*/
		var clientpage = getQueryString('clientpage') || $('#clientpage').val();
		if (IsCM && 'webaction' in android && clientpage && clientpage != 0) {
			$('.fix-client').show();
			$('.client-btn').click(function() {
				if ($('#clientpage').length > 0) {
					clientpage = $('#clientpage').val();
				}
				try {
					window.android.webaction('{"actionType":"1","actionParam":{"functionID":"' + clientpage + '","sortTypeID":"1","url":"","shareText":"","pkgName":"","activityName":"","param":""}}');
				} catch (e) {}
			})
		} else {
			$('.fix-client').hide();
		}
		$(window).on('scroll', function() {
			Detail.readComplete();
		});
		if (location.href.indexOf('109.html') > -1) {
			if (parm && parm == 'cms_promotion') {
				footEl.css('display', 'block');
			} else {
				footEl.css('display', 'none');
			}
		} else {
			if (parm && parm == 'cms_isinstalled') {
				footEl.css('display', 'none');
			} else {
				footEl.css('display', 'block');
			}
		}
		if (parm == 'cm' || parm == 'cms') {
			footEl.find('.gp-' + parm).hide();
		}
		if (clientBtn && clientBtn == 100) {
			footEl.css('display', 'none');
		}
		if (query && query == 'cm') {
			$('#header-fixed').hide();
			$('.breadcrump').hide();
			$('#footer-wrap').hide();
		}
		if ($('.related li').length == 0) {
			$('.related').remove();
		}
	},
	/*图片加载*/
	imageLoad: function() {
		if ($('#detail-tpl').length > 0) {
			var detailText = $('#detail-tpl').html().replace(/\s|　|&nbsp(;)?/gi, " ").replace(/<img src/gi, '<img class="lazy" src="/images/v3/blank.png" data-src');
			$('.detail-text').html(detailText);
		}
		var imgs = $('.detail-text .lazy');
		imgs.each(function(i) {
			var This = $(this);
			var preLoader = new Image();
			preLoader['src'] = This.attr('data-src');
			preLoader.onload = function() {
				This.attr('src', preLoader['src']);
				This.removeClass('lazy');
				This.removeAttr('data-src');
			}
			preLoader.onerror = function() {
					try {
						ga('send', 'event', 'blog', 'onerror', 'image-' + preLoader['src'] + '', 1);
					} catch (e) {}
					//imageWrapEl.addClass('_loaderror');
				}
				//$(this).attr('src',$(this).attr('data-src'));
		})

		//imgs.attr('data-src',imgs.attr('src')).attr('src','/images/blank.gif');
	},
	/*判断是否看完内容*/
	readComplete: function() {
		var el = $('.share-btns').get(0) || $('.social-share').get(0),
			endTime = new Date().getTime();
		if (!el || $(el).hasClass('_stated')) return;
		if (typeof startTime == 'undefined') {
			startTime = endTime;
		};
		if (elementVisiable(el)) {
			try {
				ga('send', 'event', 'blog-' + window.location.href + '', 'read', 'read-' + (endTime - startTime) / 1000 + 's', 1);
			} catch (e) {}
			$(el).addClass('_stated');
		}
	},
	/*详情页定制不同来源规则*/
	custom: function() {

	}
};

/*blog侧边功能*/
var Side = {
	init: function() {
		Side.langFilter();
	},
	langFilter: function() {
		var langEl = $('.side-filter select'),
			langName = '';
		/*初始化时判断语言*/
		langEl.children().each(function() {
			if (window.location.href.indexOf('/' + $(this).val()) > -1) {
				$(this).attr('selected', 'selected');
			}
		});
		langEl.change(function(e) {
			langName = $(this).children('option:selected').val();
			try {
				ga('send', 'event', 'blog', 'click', 'side-lang-' + langName + '', 1);
			} catch (e) {}
			setTimeout(function() {
				if (langName == 'all') {
					location.href = '/blog/';
				} else {
					location.href = '/blog/' + langName + '/';
				}
			}, 100);
			e.preventDefault();
		});
	}
};

/*图片标签替换和加载*/
var ImageLazy = {
	init: function() {
		$('.post-list .lazy').each(function() {
			var imgUrl = $(this).attr('src');
			if (imgUrl == '/e/data/images/notimg.gif') {
				$(this).parents('.preview').remove();
				return;
			}
			$(this).after('<img src="' + imgUrl + '" alt="" class="_loaded" />');
			$(this).remove();
		});
	}
};

/*通用GA上报*/
var Stat = {
	init: function() {
		$('body').delegate('*[stat]', 'click', function(e) {
			var stat = $(this).attr('stat'),
				link = $(this).attr('href');
			if (stat) {
				try {
					ga('send', 'event', 'blog', 'click', '' + stat + '', 1);
				} catch (e) {}
				if (link && link != 'javascript:;' && link != '#') {
					setTimeout(function() {
						location.href = link;
					}, 100);
				}
			}
			e.preventDefault();
		});
		/*blog 页面额外统计菜单的点击情况*/
		if (window.location.href.indexOf('/blog') > -1) {
			$('#header-fixed a[onclick]').click(function(e) {
				var link = $(this).attr('href');
				try {
					ga('send', 'event', 'blog-menu-' + window.location.href + '', 'click', '' + $(this).text() + '', 1);
				} catch (e) {}
				if (link != '#' && link != 'javascript:;') {
					setTimeout(function() {
						window.location.href = link;
					}, 200)
					e.preventDefault();
				}

			});
		}
		$(window).on('load', function() {
			if (typeof startTime == 'undefined') return;
			var endTime = new Date().getTime(),
				roughTime = Math.ceil((endTime - startTime) / 1000);
			if (roughTime > 10 && roughTime <= 20) {
				roughTime = '10-20'
			} else if (roughTime > 20 && roughTime <= 30) {
				roughTime = '20-30'
			} else if (roughTime > 30 && roughTime <= 40) {
				roughTime = '20-30'
			} else if (roughTime > 40 && roughTime <= 50) {
				roughTime = '20-30'
			} else if (roughTime > 50) {
				roughTime = '50+'
			}
			try {
				ga('send', 'event', '' + window.location.href + '', 'onload', '' + roughTime + 's', 1);
			} catch (e) {}
		});

	}
};

/*根据blog页面的参数判断是否显示下载按钮*/
(function() {
	var parm = getQueryString('lang'),
		url = location.href.replace('http://', '').replace('https://', ''),
		normalLang = false,
		langTime;
	if (url == 'www.cmcm.com/' || url == 'cmcm.com/') {
		if ($cookie('lang') && $cookie('lang') != '') {
			location.href = '/' + $cookie('lang') + '/';
			return;
		}
	} else {
		Lang.init();
	}
	if (url.indexOf('product/clean-master.html') > -1) {
		if ($cookie('lang') && $cookie('lang') != '') {
			location.href = '/' + $cookie('lang') + '/clean-master/';
		} else {
			location.href = '/en-us/clean-master/';
		}
		return;
	}
	if (url.indexOf('product/cm-security.html') > -1) {
		if ($cookie('lang') && $cookie('lang') != '') {
			location.href = '/' + $cookie('lang') + '/cm-security/';
		} else {
			location.href = '/en-us/cm-security/';
		}
		return;
	}
	if (url.indexOf('product/battery-doctor.html') > -1) {
		if ($cookie('lang') && $cookie('lang') != '') {
			location.href = '/' + $cookie('lang') + '/battery-doctor/';
		} else {
			location.href = '/en-us/battery-doctor/';
		}
		return;
	}
	if (url.indexOf('product/cm-browser.html') > -1) {
		if ($cookie('lang') && $cookie('lang') != '') {
			location.href = '/' + $cookie('lang') + '/cm-browser/';
		} else {
			location.href = '/en-us/cm-browser/';
		}
		return;
	}
	if (url.indexOf('product/photo-grid.html') > -1) {
		if ($cookie('lang') && $cookie('lang') != '') {
			location.href = '/' + $cookie('lang') + '/photo-grid/';
		} else {
			location.href = '/en-us/photo-grid/';
		}
		return;
	}
	if (url.indexOf('product/cm-backup.html') > -1) {
		if ($cookie('lang') && $cookie('lang') != '') {
			location.href = '/' + $cookie('lang') + '/cm-backup/';
		} else {
			location.href = '/en-us/cm-backup/';
		}
		return;
	}
	if (url.indexOf('product/cm-behavior-cloud.html') > -1) {
		if ($cookie('lang') && $cookie('lang') != '') {
			location.href = '/' + $cookie('lang') + '/cm-behavior-cloud/';
		} else {
			location.href = '/en-us/cm-behavior-cloud/';
		}
		return;
	}
	if (url.indexOf('about/about.html') > -1) {
		if ($cookie('lang') && $cookie('lang') != '') {
			location.href = '/' + $cookie('lang') + '/about/';
		} else {
			location.href = '/en-us/about/';
		}
		return;
	}

	/*for (var i = 0; i < LangType.length; i++) {
		if (url.indexOf('/'+ LangType[i] +'/') > -1) {
			$cookie('lang',LangType[i],{expires: 730, path:'/'});
			normalLang = true;
			break;
		}
	}*/

	$('.lang-current').click(function() {
		var langMenu = $('.lang-list');
		if (!langMenu.is(':visible')) {
			langMenu.css({
				'height': '0px',
				'opacity': 0
			}).show().animate({
				'height': '243px',
				'opacity': 1
			});
		}
	});
	$('.foot-lang').hover(function() {
		var langMenu = $('.lang-list');
		if (langTime) clearTimeout(langTime);
		if (!langMenu.is(':visible')) {
			langMenu.css({
				'height': '0px',
				'opacity': 0
			}).show().animate({
				'height': '243px',
				'opacity': 1
			});
		}
	}, function() {
		langTime = setTimeout(function() {
			$('.lang-list').hide();
		}, 200)
	});
	$('body').click(function(e) {
		if ($(e.target).parents('.foot-lang').length > 0) {
			return;
		} else {
			$('.lang-list').hide();
		}
	});
	/*点击语言实现在当前页面切换*/
	$('.lang-list a').click(function(e) {
		var curLang = '',
			selLang = $(this).attr('href'),
			selUrl = window.location.href;
		/*clean-master-for-pc页面没有多语言版本*/
		if (selUrl.indexOf('clean-master-for-pc') > -1) {
			return;
		}
		for (var i = 0; i < LangType.length; i++) {
			if (selUrl.indexOf('/' + LangType[i] + '/') > -1) {
				curLang = '/' + LangType[i] + '/';
				break;
			}
		}
		/*能匹配上的可以在当前页面切换，不能匹配上的则按普通链接跳转*/
		if (curLang != '') {
			window.location.href = selUrl.replace(curLang, selLang);
			e.preventDefault();
		}

	});
	/*cm-for-pc页面下载按钮在手机上显示为提示*/
	if (IsIOS || IsAndroid || IsWindowsPhone || IsIEMobile) {
		$('.bodyCMPC .download .btg').hide();
		$('.bodyCMPC .download .cmpc-tip').show();
	}
	Detail.init();
	Side.init();
	Stat.init();
	setTimeout(function() {
		ImageLazy.init();
	}, 500)

})(jQuery);