function first2() {
	var patt = /#.+/;
	var the_url = window.location.href;
	var now_code = the_url.match(patt);
	if (now_code != null) {
		try {
			now_code = now_code.substring(1);
		} catch(err) {
			now_code = null;
		}
	}
	if (now_code == null) {
		(async () => {
			try {
				const text = await navigator.clipboard.readText();
				change_text(text);
				history.pushState(null,null,'#' + text);
				do_show();
			} catch(err) { }
		})();
	}
}