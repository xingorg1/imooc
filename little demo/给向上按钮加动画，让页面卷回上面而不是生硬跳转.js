$('#topBtn').click(function(){
			$('html,body').animate({scrollTop: '0px'}, 600);
		return false;
		});
		//给向上按钮加一个animate的动画，控制scrolltop属性变为零，在600毫秒内，