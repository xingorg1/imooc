var eventUill = {
	//添加事件
	addHander: function(element, type, handler) {
		if(element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	//移除事件
	removeHander: function(element, type, handler) {
		if(element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if(element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	//获取到拥有这个事件的标签名称——事件对象（如input）
	getEvent: function(event){
		return event?event:window.event;//注意：返回后需要调用。可配合nodeName，来单独获取到标签的名字。
	},
	//获取事件的类型
	getType: function(event){
		return event.type;//注意：返回后需要调用。
	},
	//获取事件来自于哪个元素
	getElement: function(event){
		return event.target || event.srcElement;
	},
	//阻止、取消事件的默认行为/属性发生
	preventDefault: function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = null;
		}
	},
	//阻止冒泡行为
	stopPropagation: function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}
	
	
	
	
}