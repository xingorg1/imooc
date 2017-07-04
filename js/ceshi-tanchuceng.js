;var eventUill = {
	addHander: function(element, type, handler) {
		if(element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	removeHander: function(element, type, handler) {
		if(element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if(element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	getEvent: function(event) {
		return event ? event : window.event;
	},
	getType: function(event) {
		return event.type;
	},
	getElement: function(event) {
		return event.target || event.srcElement;
	},
	preventDefault: function(event) {
		if(event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = null;
		}
	},
	stopPropagation: function(event) {
		if(event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
};
window.onload = function() {
			var tapDivWrap = document.getElementById('tapWrap');
			var tapDiv = tapDivWrap.getElementsByTagName('div');
			var tapUl = document.getElementById('tapHeadWrap');
			var tapLi = tapUl.getElementsByTagName('li');
			var authorBg = document.getElementById('authorBg');
			var ha = 0;
			for(var i = 0; i < tapLi.length; i++) {
				tapLi[i].index = i;
				eventUill.addHander(tapLi[i], 'click', function(e) {
//				tapLi[i].onclick = function(e) {
					var gbUL = tapDiv[this.index].childNodes[1];
					var DIV = tapDiv[this.index];
					var gbLI = gbUL.getElementsByTagName('li')[0];
					var e = eventUill.getEvent(e);
					eventUill.stopPropagation(e);
					if(ha = 1){
						DIV.style.display = "block";
						ha = 0;
					};
					for(var j = 0; j < tapLi.length; j++) {
						tapLi[j].className = "";
						tapDiv[j].className = "tapHideDiv";
						tapDiv[j].style.display = "none";
					};
					this.className = "tapActiveLi";
					tapDiv[this.index].className = "clearfix authorIntor";
					tapDiv[this.index].style.display = "block";
//						alert(tapDiv[this.index].nodeName)
					eventUill.addHander(gbLI, 'click', function(e) {
						var e = eventUill.getEvent(e);
						eventUill.stopPropagation(e);
//						alert(this.nodeName)
						DIV.style.display = "none";
						alert(tapLi)
						ha = 1;
//						alert(ha)
						});
//						var bodys = document.documentElement;
//					eventUill.addHander(bodys, 'click', function(e){
//						alert("我是body")
//					})
				});
			
			}
			
		}