function show() {
	document.getElementById("head_frame").style.left = "0px";
	document.getElementById("pan").style.width = "calc(90% - 250px)";
	document.getElementById("pan12").style.marginTop = "30px";
}
function not_show() {
	window.top.document.getElementById("head_frame").style.left = "-250px";
	window.top.document.getElementById("pan").style.width = "90%";
	window.top.document.getElementById("pan12").style.marginTop = "60px";
}


function now_item(name) {
	return function () {
		document.getElementById('head_frame')
		.contentWindow.document.getElementById(name)
		.style.background = "#EEEEEE";
	}
}


function in_to(name) {
	not_show()
	setTimeout(function(){ in_to_the(name); }, 100);
	window.top.document.getElementById("img_list").style.display = "none";
}
function in_to_the(name) {
	window.top.open(name,'_self')
}