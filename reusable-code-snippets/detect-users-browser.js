// If you need to detect the users browser, use this function
// Credit goes to @kennebec on Stack Overflow

navigator.sayswho = (() => {
	const ua = navigator.userAgent;
	let tem;
	let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return `IE ${tem[1] || ''}`;
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\b(OPR|Edge?)\/(\d+)/);
		if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');
	}
	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
	return M.join(' ');
})();
