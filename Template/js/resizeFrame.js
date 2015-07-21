(function ( window, document ) {
	document.domain="auction.co.kr";

	'use strict';

	var frameElement = window.frameElement,
	addEvent = (function () {

		if ( window.addEventListener ) {
			return function ( element, type, listener ) {
				element.addEventListener( type, listener, false );
			};
		} else if ( window.attachEvent ) {
			return function ( element, type, listener ) {
				element.attachEvent( 'on' + type, function () {
					listener.call( element );
				});
			};
		}
	}());

	function resizeFrame() {
		if ( frameElement ) {
			frameElement.style.height = document.body.offsetHeight + 'px';
		}
	}

	window.jumpToTopElement = function (hash) {
		window.top.location.hash = hash;
	};

	addEvent( window, 'load', function () {
		resizeFrame();
	});

	addEvent( window, 'resize', function () {
		resizeFrame();
	});
}( this, this.document ));