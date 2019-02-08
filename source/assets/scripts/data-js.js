var scripts = document.querySelectorAll('[data-src]'),
	enabledScriptTags = {},
	totalScripts = 0;

for (var i = scripts.length - 1; i >= 0; --i) {
	var path = scripts[i].getAttribute('data-src');
	if (!enabledScriptTags[path]) {
		enabledScriptTags[path] = true;

		totalScripts++;

		scripts[i].setAttribute('src', path);
		scripts[i].removeAttribute('data-src');
		// Manually trigger DOMContentLoaded once all scripts have finished loading
		scripts[i].onload = function() {
			totalScripts--;
			if (totalScripts == 0) {
				document.dispatchEvent(new Event("DOMContentLoaded", {
					bubbles: true,
					cancelable: true
				}));
			}
		}
	}
}