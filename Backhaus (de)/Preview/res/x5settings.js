(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.siteId = 'FA1340E008CD43B3E8F324B31ACEDA0D';
	s.islocal = true;
	s.version = '2019-2-7-0';
	b.push(function () {
		x.setupDateTime();
		x.imAccess.showLogout();
		x.utils.autoHeight();
		x.cart.ui.updateWidget();
		x.imGrid.init();
	});
	b.push(function () {
		x.stickyBar({
			enabledBreakpoints: ['ea2f0ee4d5cbb25e1ee6c7c4378fee7b','d2f9bff7f63c0d6b7c7d55510409c19b','72e5146e7d399bc2f8a12127e43469f1','5ecdcca63de80fd3d4fbb36295d22b7d']
		});
	});

	// ShowBox
	$.extend(s.imShowBox, {
		"effect": "none", "customEffect": "generic animated none",
		'transitionEffect' : 'fade',
		'fullScreenEnabled' : false,
		'zoomEnabled' : true,
		'showProgress' : false,
		'shadow' : '',
		'background' : 'rgba(108, 86, 123, 1)',
		'borderWidth' : {
			'top': 0,
			'right': 0,
			'bottom': 0,
			'left': 0
		},
		'buttonLeft': '<svg class=\"im-common-left-button\"  xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#3e3d40;}.b{fill:#fff;}<\/style><\/defs><rect class=\"a\" x=\"5\" y=\"5\" width=\"40\" height=\"40\"/><polygon class=\"b\" points=\"27.28 24.96 35.15 17.09 28.89 10.84 14.77 24.96 14.78 24.96 14.77 24.96 28.97 39.16 35.23 32.91 27.28 24.96\"/><\/svg>',
		'buttonRight': '<svg class=\"im-common-right-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#3e3d40;}.b{fill:#fff;}<\/style><\/defs><rect class=\"a\" x=\"5\" y=\"5\" width=\"40\" height=\"40\" transform=\"translate(50 50) rotate(-180)\"/><polygon class=\"b\" points=\"22.71 24.96 14.84 17.08 21.1 10.82 35.24 24.96 35.24 24.96 35.24 24.96 21.02 39.18 14.76 32.92 22.71 24.96\"/><\/svg>',
		'buttonClose': '<svg class=\"im-common-close-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#3e3d40;}.b{fill:#fff;}<\/style><\/defs><rect class=\"a\" x=\"5\" y=\"5\" width=\"40\" height=\"40\"/><polygon class=\"b\" points=\"32.27 21.83 29.22 18.78 25.4 22.59 21.59 18.78 18.54 21.83 22.35 25.64 18.54 29.46 21.59 32.51 25.4 28.7 29.22 32.51 32.27 29.46 28.45 25.64 32.27 21.83\"/><\/svg>',
		'buttonEnterFS': '<svg class=\"im-common-enter-fs-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#3e3d40;}.b{fill:#fff;}<\/style><\/defs><rect class=\"a\" x=\"5\" y=\"5\" width=\"40\" height=\"40\" transform=\"translate(50 50) rotate(-180)\"/><polygon class=\"b\" points=\"17.92 17.94 24.03 17.95 24.04 13.09 13.07 13.06 13.07 13.07 13.07 13.07 13.04 24.1 17.91 24.11 17.92 17.94\"/><polygon class=\"b\" points=\"17.92 32.06 24.03 32.05 24.04 36.91 13.07 36.94 13.07 36.93 13.07 36.93 13.04 25.9 17.91 25.89 17.92 32.06\"/><polygon class=\"b\" points=\"32.08 17.94 25.97 17.95 25.96 13.09 36.93 13.06 36.93 13.07 36.93 13.07 36.95 24.1 32.09 24.11 32.08 17.94\"/><polygon class=\"b\" points=\"32.08 32.06 25.97 32.05 25.96 36.91 36.93 36.94 36.93 36.93 36.93 36.93 36.95 25.9 32.09 25.89 32.08 32.06\"/><\/svg>',
		'buttonExitFS': '<svg class=\"im-common-exit-fs-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#3e3d40;}.b{fill:#fff;}<\/style><\/defs><rect class=\"a\" x=\"5\" y=\"5\" width=\"40\" height=\"40\" transform=\"translate(50 50) rotate(-180)\"/><polygon class=\"b\" points=\"31.4 29.8 31.4 34.24 15.16 34.24 15.16 21.74 20.8 21.74 20.8 18.3 11.72 18.3 11.72 37.69 34.84 37.69 34.84 29.8 31.4 29.8\"/><polygon class=\"b\" points=\"29.8 20.99 38.93 21.08 38.86 28.34 22.47 28.18 22.47 28.18 22.46 28.18 22.62 11.69 29.89 11.76 29.8 20.99\"/><\/svg>',
		'buttonZoomIn': '<svg class=\"im-common-zoom-in-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#3e3d40;}.b{fill:#fff;}<\/style><\/defs><rect class=\"a\" x=\"5\" y=\"5\" width=\"40\" height=\"40\" transform=\"translate(50 50) rotate(-180)\"/><path class=\"b\" d=\"M28.87,10.22A10.77,10.77,0,0,0,18.11,21a10.64,10.64,0,0,0,1.83,6L11,35.9a2.27,2.27,0,1,0,3.21,3.21l9-9a10.76,10.76,0,1,0,5.65-19.91ZM35.44,21a6.56,6.56,0,1,1-6.56-6.56A6.57,6.57,0,0,1,35.44,21Z\"/><polygon class=\"b\" points=\"30.22 16.82 27.47 16.82 27.47 19.68 24.47 19.68 24.47 22.33 27.47 22.33 27.47 25.16 30.22 25.16 30.22 22.33 33.22 22.33 33.22 19.68 30.22 19.68 30.22 16.82\"/><\/svg>',
		'buttonZoomOut': '<svg class=\"im-common-zoom-out-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#3e3d40;}.b{fill:#fff;}<\/style><\/defs><rect class=\"a\" x=\"5\" y=\"5\" width=\"40\" height=\"40\" transform=\"translate(50 50) rotate(-180)\"/><path class=\"b\" d=\"M28.87,10.22A10.77,10.77,0,0,0,18.11,21a10.64,10.64,0,0,0,1.83,6L11,35.9a2.27,2.27,0,1,0,3.21,3.21l9-9a10.76,10.76,0,1,0,5.65-19.91ZM35.44,21a6.56,6.56,0,1,1-6.56-6.56A6.57,6.57,0,0,1,35.44,21Z\"/><rect class=\"b\" x=\"25.73\" y=\"19.83\" width=\"6.06\" height=\"2.53\"/><\/svg>',
		'buttonZoomRestore': '<svg class=\"im-common-zoom-restore-button\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\"><defs><style>.a{fill:#3e3d40;}.b{fill:#fff;}<\/style><\/defs><rect class=\"a\" x=\"5\" y=\"5\" width=\"40\" height=\"40\" transform=\"translate(50 50) rotate(-180)\"/><path class=\"b\" d=\"M38.64,18.22l-1.86,1.86a10.44,10.44,0,0,0-20.86.58,10.32,10.32,0,0,0,1.77,5.8L9.09,35.07a2.22,2.22,0,1,0,3.14,3.14l8.67-8.67a10.41,10.41,0,0,0,9.9.56l.9-.42-3.09-3.09-.4.12a6.33,6.33,0,1,1,4.49-6.11l-2.43-2.42L27,21.5l3.78,3.77,0,0,2.9,2.9,0,0,.85.84h0L42,21.53Z\"/><\/svg>',
		'borderRadius' : '0px 0px 0px 0px',
		'borderColor' : 'transparent transparent transparent transparent',
		'textColor' : 'rgba(0, 0, 0, 1)',
		'fontFamily' : 'Raleway',
		'fontStyle' : 'normal',
		'fontWeight' : 'normal',
		'fontSize' : '9pt',
		'textAlignment' : 'left',
		'boxColor' : 'rgba(255, 255, 255, 1)',
		'opacity' : 0.7,
		'radialBg' : false // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'websitex5.bl.templates.showboxanimation',
		'width' : 500,
		'shadow' : '',
		'background' : 'rgba(108, 86, 123, 1)',
		'borderRadius' : 10,
		'textColor' : 'rgba(0, 0, 0, 1)',
		'boxColor' : 'rgba(255, 255, 255, 1)',
		'opacity' : 0.7
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 0,
		'arrow' : true,
		'shape' : 'classic',
		'position' : 'bottom',
		'effect' : 'fade',
		'showTail' : true
	});

	// PageToTop
	$.extend(s.imPageToTop, {
		'imageFile' : 'style/page-to-top.png'
	});

	// Captcha
	b.push(function () {
		x5engine.captcha.instance = new x5engine.captcha.x5captcha({
			"offlineCodes": {
				"0": { letter: 'D', path: 'captcha/imcpa_las.gif'},
				"1": { letter: 'R', path: 'captcha/imcpa_s6j.gif'},
				"2": { letter: 'C', path: 'captcha/imcpa_pss.gif'},
				"3": { letter: '3', path: 'captcha/imcpa_j7u.gif'},
				"4": { letter: 'J', path: 'captcha/imcpa_rea.gif'},
				"5": { letter: '6', path: 'captcha/imcpa_ye6.gif'},
				"6": { letter: 'A', path: 'captcha/imcpa_h32.gif'},
				"7": { letter: 'A', path: 'captcha/imcpa_pxs.gif'},
				"8": { letter: 'R', path: 'captcha/imcpa_26u.gif'},
				"9": { letter: 'X', path: 'captcha/imcpa_75k.gif'}
			}
		});
	}, false, 'first');
	b.push(function() { x.passwordpolicy.init({ "requiredPolicy": "false", "minimumCharacters": "6", "includeUppercase": "false", "includeNumeric": "false", "includeSpecial": "false" });
	});

	// BreakPoints
	s.breakPoints.push({"name": "Desktop", "hash": "ea2f0ee4d5cbb25e1ee6c7c4378fee7b", "start": "max", "end": 1150, "fluid": false});
	s.breakPoints.push({"name": "Breakpoint 1", "hash": "d2f9bff7f63c0d6b7c7d55510409c19b", "start": 1149.9, "end": 720, "fluid": false});
	s.breakPoints.push({"name": "Mobile", "hash": "72e5146e7d399bc2f8a12127e43469f1", "start": 719.9, "end": 480, "fluid": false});
	s.breakPoints.push({"name": "Mobile Fluid", "hash": "5ecdcca63de80fd3d4fbb36295d22b7d", "start": 479.9, "end": 0, "fluid": true});

	b.push(function () { x.cookielaw.activateScripts() });

	s.loaded = true;
})( _jq, x5engine );
