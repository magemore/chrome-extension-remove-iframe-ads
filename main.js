function rAds() {
	if (!jQuery) {
		setTimeout(rAds,500);
		return;
	}
	jQuery.noConflict();
	$ = jQuery;

	function removeAds() {
		var list = document.getElementsByTagName("img");
		for (i = 0; i < list.length; i++) {
			w = parseInt(list[i].getAttribute('width'));
			if (w==728) {
				if (list[i].parentNode.nodeName=='A') {
					list[i].parentNode.outerHTML='';
				}
				else {
					list[i].outerHTML='';
				}
			}
		}
		removeOther();
		removeIframes();
	}

	function removeIframes() {
		var list = document.getElementsByTagName("iframe");
		for (i = 0; i < list.length; i++) {
			ad = false;
			id = list[i].getAttribute('id');
			cl = list[i].getAttribute('class');
			sr = list[i].getAttribute('src');
			if (id && (id.indexOf('ads')>-1 || id.indexOf('_ad')>-1 || id.indexOf('ad_')>-1 || id.indexOf('aswift')>-1)) ad = true;
			if (!ad && cl && (cl.indexOf('ads')>-1 || cl.indexOf('_ad')>-1 || cl.indexOf('ad_')>-1)) ad = true;
			if (!ad && sr && (sr.indexOf('adriver')>-1 || sr.indexOf('_ad')>-1 || sr.indexOf('ad_')>-1)) ad = true;
			
			if (id && id.indexOf('evernote')>-1) ad = false;
			if (ad) list[i].outerHTML='';
		}
		
	}

	function removeOther() {
			
		if (document.domain.indexOf('sinoptik')>-1) {
			$('body').attr('style','');
			$('.informerTop').remove();
			$('#header').remove();
			$('#footer').remove();
		}
		
		a = $('a');
		if (document.domain.indexOf('.ru')>-1 || document.domain.indexOf('.ua')>-1) {		
			for (i=0;i<a.length;i++) {
				h = $(a[i]).attr('href');
				if (h && h.indexOf('adriver.ru')>-1) {
					a[i].remove();
				}
			}
		}
		for (i=0;i<a.length;i++) {
			h = $(a[i]).attr('href');
			if (h && (h.indexOf('doubleclick')>-1 || h.indexOf('adclick')>-1)) {
				a[i].remove();
			}
		}
		$('aside').remove();
		$('.sidebar').remove();
		$('ins').remove();
		$('.video-ads').remove();
		$('.adDisplay').remove();
		$('#player-api .close-button').remove();
		$('.col-md-4').remove();
		$('.csh-body').remove();

	}


	allow = true;
	if (document.domain.indexOf('google.com')>-1) allow = false;
	if (document.domain.indexOf('twitter.com')>-1) allow = false;
	if (document.domain.indexOf('bleutrade.com')>-1) allow = false;

	if (document.domain.indexOf('vk.com')>-1) {
		allow = false;
		setInterval(function(){	$('#left_ads').remove(); document.title='vk'; },500);
	}


	if (allow) {
		removeAds();
		setInterval(removeAds,500);
	}

}

rAds();
