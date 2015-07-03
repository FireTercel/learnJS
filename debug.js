function debug(msg){
	//通过查看HTML元素id来查找div
	var log = document.getElementById('debuglog');
	//如果元素不存在则创建一个
	if(!log){
		log = document.createElement('div');
		log.id='debuglog';//给这个元素的id赋值
		log.innerHTML = '<h1>Debug Log</h1>';//定义出事内容
		document.body.appendChild(log);//添加到body的尾部
	}
	var pre = document.createElement('pre');
	var text = document.createTextNode(msg);//将msg包装在一个文本节点中。
	pre.appendChild(text);//文本添加到<pre>
	log.appendChild(pre);//<pre>添加到log
}；
function debugjq(msg){
	var log = $('debuglog');
	if(log.length==0){
		log = $('<div id="debuglog"><h1>Debug Log</h1></div>');
		log.appendTo(document.body);
	}
	//将msg包装到<pre>中，再追加到log里
	log.append($('<pre/>').text(msg));
}