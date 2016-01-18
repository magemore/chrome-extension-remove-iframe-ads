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
	
	var list = document.getElementsByTagName("iframe");
	for (i = 0; i < list.length; i++) {	
		list[i].outerHTML='';
	}
	e = document.getElementById('left_ads');
	if (e) {
		e.outerHTML='';
	}
}

removeAds();
setInterval(removeAds,100);
