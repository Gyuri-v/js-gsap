
const App = function () {
	let container = null;
	let ww, wh;

	// init
	const init = function () {
		container = document.querySelector('.container');
		ww = window.innerWidth;
		wh = window.innerHeight;

		gsaps();
		timelines();
		blurs();
		movies();
		lotties();
		horizontals();
	}
	
	// resize 
	const resize = function () {
		ww = window.innerWidth;
		wh = window.innerHeight;
	}

	// gsap 
	const gsaps = function () {
		const $gsapSection = container.querySelector('.section-gsap');
		const $gsapSvgPaths = $gsapSection.querySelectorAll('path');
		const $gsapTitleWrap = $gsapSection.querySelector('.title-wrap');
		const $gsapBox1 = $gsapSection.querySelector('.box-1');
		const $gsapBox2 = $gsapSection.querySelector('.box-2');
		const $gsapBox3 = $gsapSection.querySelector('.box-3');
		const $gsapBox4 = $gsapSection.querySelector('.box-4');
		const $gsapBox4Text = $gsapSection.querySelector('.box-4 .txt');
		const $gsapBgFave = $gsapSection.querySelector('.bg-fave');
		const $gsapBgForest = $gsapSection.querySelector('.bg-forest');
		const $gsapBgOrange = $gsapSection.querySelector('.bg-orange');
		const $gsapBgLast = $gsapSection.querySelector('.bg-last');
	
		for (let i = 0; i < $gsapSvgPaths.length; i++) {
			const item = $gsapSvgPaths[i];
			const lineLength = Math.round(item.getTotalLength());
			item.style.strokeDasharray = lineLength;
			item.style.strokeDashoffset = lineLength;
			
		}
		
		scroller( $gsapSection, {
			scroll: function (e) {
				for (let i = 0; i < $gsapSvgPaths.length; i++) {
					const item = $gsapSvgPaths[i];
					const lineLength = Math.round(item.getTotalLength());
					item.style.strokeDashoffset = `${getStyleValueByStep([0, 0.1], [lineLength, 0], e.scrollTop, e.moveArea)}px`;
				}
				
				$gsapBox1.style.transform = `translate3d( 0, ${getStyleValueByStep([0, 0.5], [wh, -wh], e.scrollTop, e.moveArea)}px, 0)`;
				$gsapBgFave.style.opacity = getStyleValueByStep([0.2, 0.3], [0, 1], e.scrollTop, e.moveArea);

				const clipValue1 = getStyleValueByStep([0.2, 0.3], [50, 0], e.scrollTop, e.moveArea, 'expo.inOut');
				const clipValue2 = getStyleValueByStep([0.2, 0.3], [50, 100], e.scrollTop, e.moveArea, Expo.easeInOut);
				$gsapBgFave.style.clipPath = `polygon(
					${clipValue1}% ${clipValue1}%, 
					${clipValue2}% ${clipValue1}%, 
					${clipValue2}% ${clipValue2}%, 
					${clipValue1}% ${clipValue2}%
				)`;

				$gsapBox2.style.transform = `translate3d( 0, ${getStyleValueByStep([0.1, 0.6], [wh, -wh], e.scrollTop, e.moveArea)}px, 0)`;
				$gsapBgForest.style.opacity = getStyleValueByStep([0.3, 0.4], [0, 1], e.scrollTop, e.moveArea);

				const clipValue3 = getStyleValueByStep([0.3, 0.4], [50, 0], e.scrollTop, e.moveArea, 'expo.inOut');
				const clipValue4 = getStyleValueByStep([0.3, 0.4], [50, 100], e.scrollTop, e.moveArea, 'expo.inOut');
				$gsapBgForest.style.clipPath = `polygon(
					${clipValue3}% ${clipValue3}%, 
					${clipValue4}% ${clipValue3}%, 
					${clipValue4}% ${clipValue4}%, 
					${clipValue3}% ${clipValue4}%
				)`;

				$gsapBox3.style.transform = `translate3d( 0, ${getStyleValueByStep([0.2, 0.7], [wh, -wh], e.scrollTop, e.moveArea)}px, 0)`;
				$gsapBgOrange.style.opacity = getStyleValueByStep([0.4, 0.5], [0, 1], e.scrollTop, e.moveArea);

				const clipValue5 = getStyleValueByStep([0.4, 0.5], [50, 0], e.scrollTop, e.moveArea, 'expo.inOut');
				const clipValue6 = getStyleValueByStep([0.4, 0.5], [50, 100], e.scrollTop, e.moveArea, 'expo.inOut');
				$gsapBgOrange.style.clipPath = `polygon(
					${clipValue5}% ${clipValue5}%, 
					${clipValue6}% ${clipValue5}%, 
					${clipValue6}% ${clipValue6}%, 
					${clipValue5}% ${clipValue6}%
				)`;

				$gsapBox4.style.transform = `translate3d( 0, ${getStyleValueByStep([0.4, 0.75], [wh, 0], e.scrollTop, e.moveArea)}px, 0)`;
				$gsapTitleWrap.style.opacity = getStyleValueByStep([0.7, 0.8], [1, 0], e.scrollTop, e.moveArea);
				$gsapBgLast.style.opacity = getStyleValueByStep([0.8, 0.9], [0, 1], e.scrollTop, e.moveArea);
				$gsapBox4Text.style.opacity = getStyleValueByStep([0.9, 1], [1, 0], e.scrollTop, e.moveArea);
			}
		});
	};

	// timeline
	const timelines = function () {
		const $timelineSection = container.querySelector('.section-timeline');
		const $timelineTitleWrap = $timelineSection.querySelector('.title-wrap');
		const $timelineTitle = $timelineSection.querySelector('.title');
		const $timelineBgWrap = $timelineSection.querySelector('.bg');
		const $timelineBgImage = $timelineSection.querySelector('.bg-image');

		let bgx1 = (ww / 2 - 150) / ww * 100;
		let bgx2 = (ww / 2 + 150) / ww * 100;
		let bgy1 = (wh / 2 - 150) / wh * 100;
		let bgy2 = (wh / 2 + 150) / wh * 100;
		$timelineBgWrap.style.clipPath = `polygon(${bgx1}% ${bgy1}%, ${bgx2}% ${bgy1}%, ${bgx2}% ${bgy2}%, ${bgx1}% ${bgy2}%)`;
		
		const timelineTween = gsap.timeline({ paused: true }); 
		timelineTween.to( $timelineTitle,    { opacity: 1, duration: 1} );
		timelineTween.to( $timelineBgImage,  { opacity: 1, duration: 1} );
		timelineTween.to( $timelineBgWrap,   { clipPath: `polygon(${bgx1}% 0%, ${bgx2}% 0%, ${bgx2}% 100%, ${bgx1}% 100%)`, duration: 1} );
		timelineTween.to( $timelineBgWrap,   { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1} );
		timelineTween.to( $timelineTitle,    { scale: 3, duration: 1} );
		timelineTween.to( $timelineBgImage,  { y: "6%", scale: 0.5, ease: 'power0.easeNone', duration: 1}, 'timelineBoth' );
		timelineTween.to( $timelineTitleWrap,{ top: "20%", duration: 1}, 'timelineBoth' );
		timelineTween.to( $timelineTitle,    { color: 'transparent', textStroke: '0.5px #fff', duration: 1} );

		scroller( $timelineSection, {
			scroll: function (e) { 
				if ( e.percent > 0 ) {
					$timelineSection.classList.add('show');
				} else {
					$timelineSection.classList.remove('show');
				}
				timelineTween.progress(e.percent) 
			},
			resize: function () {
				bgx1 = (ww / 2 - 150) / ww * 100;
				bgx2 = (ww / 2 + 150) / ww * 100;
				bgy1 = (wh / 2 - 150) / wh * 100;
				bgy2 = (wh / 2 + 150) / wh * 100;
				$timelineBgWrap.style.clipPath = `polygon(${bgx1}% ${bgy1}%, ${bgx2}% ${bgy1}%, ${bgx2}% ${bgy2}%, ${bgx1}% ${bgy2}%)`;
			}
		});
	};

	// blur
	const blurs = function () {
		const $blurSection = container.querySelector('.section-blur');
		const $blurTitleWrap = $blurSection.querySelector('.title-wrap');
		const $blurTitle = $blurSection.querySelector('.title');
		const $blurTitleBg = $blurSection.querySelector('.title_bg');
		const $blurItems = $blurSection.querySelectorAll('.item');
		const $blurImages = $blurSection.querySelectorAll('.img');
		const $blurVideos = $blurSection.querySelectorAll('video');
		
		const easeFactor = 0.15;
		let position = { x: 0, y: 0 };
		let delta = { x: 0, y: 0 };
		let blurPercent = 0;

		const setPostion = function (e) {
			position.x = e.clientX;
			position.y = e.clientY;
			
			delta.x += (position.x - delta.x) * easeFactor;
			delta.y += (position.y - delta.y) * easeFactor;

			if ( blurPercent < 0.3 ) {
				$blurImages[1].style.transform = `translate3d(${position.x * -0.03}px, ${position.y * -0.03}px, 0)`; 
				$blurImages[2].style.transform = `translate3d(${position.x * -0.04}px, ${position.y * -0.04}px, 0)`; 
			} else if ( blurPercent < 0.6 ) {
				$blurImages[5].style.transform = `translate3d(${position.x * -0.03}px, ${position.y * -0.03}px, 0)`; 
				$blurImages[6].style.transform = `translate3d(${position.x * -0.04}px, ${position.y * -0.04}px, 0)`; 
			} else if ( blurPercent < 0.9 ) {
				$blurImages[9].style.transform = `translate3d(${position.x * -0.03}px, ${position.y * -0.03}px, 0)`; 
				$blurImages[10].style.transform = `translate3d(${position.x * -0.04}px, ${position.y * -0.04}px, 0)`;
			}
		};

		scroller( $blurSection , {
			on: function () {
				window.addEventListener('mousemove', setPostion);
				for (let i = 0; i < $blurVideos.length; i++) {
					$blurVideos[i].play();
				}
			},
			off: function () {
				window.removeEventListener('mousemove', setPostion);
				for (let i = 0; i < $blurVideos.length; i++) {
					$blurVideos[i].pause();
				}
			},
			scroll: function(e) {
				blurPercent = e.percent;

				$blurTitle.style.webkitTextStroke = `${getStyleValueByStep([0, 0.1], [2, 0], e.scrollTop, e.moveArea)}px #fff`;
				$blurTitle.style.color = `rgba(255, 255, 255, ${getStyleValueByStep([0, 0.1], [0, 1], e.scrollTop, e.moveArea)})`;
				$blurTitleBg.style.transform = `translate3d(${getStyleValueByStep([0.1, 0.9], [$blurTitle.offsetWidth, -6 * $blurTitle.offsetWidth], e.scrollTop, e.moveArea)}px, 0, 0)`;

				if ( e.percent > 0.75 ) {
					$blurTitle.classList.remove('color');
				} else if ( e.percent > 0.1 ) {
					$blurTitle.classList.add('color');
				} else {
					$blurTitle.classList.remove('color');
				}

				$blurItems[0].style.transform = `translate3d(${getStyleValueByStep([0, 0.6], [0,  -300], e.scrollTop, e.moveArea)}px, 0, ${getStyleValueByStep([0, 0.3], [0, 200], e.scrollTop, e.moveArea)}px)`;
				$blurItems[1].style.transform = `translate3d(${getStyleValueByStep([0, 0.6], [-300,  0], e.scrollTop, e.moveArea)}px, 0, ${getStyleValueByStep([0, 0.6], [-200, 200], e.scrollTop, e.moveArea)}px)`;
				$blurItems[2].style.transform = `translate3d(${getStyleValueByStep([0, 0.9], [300, 0], e.scrollTop, e.moveArea)}px, 0, ${getStyleValueByStep([0, 0.9], [-400, 200], e.scrollTop, e.moveArea)}px)`;
				
				$blurItems[1].style.filter = `blur(${getStyleValueByStep([0.27, 0.33], [20, 0], e.scrollTop, e.moveArea)}px)`;
				$blurItems[0].style.opacity = getStyleValueByStep([0.25, 0.3], [1, 0], e.scrollTop, e.moveArea);
				$blurItems[2].style.filter = `blur(${getStyleValueByStep([0.57, 0.63], [20, 0], e.scrollTop, e.moveArea)}px)`;
				$blurItems[1].style.opacity = getStyleValueByStep([0.55, 0.6], [1, 0], e.scrollTop, e.moveArea);
				$blurItems[2].style.opacity = getStyleValueByStep([0.85, 0.9], [1, 0], e.scrollTop, e.moveArea);

				$blurTitleWrap.style.transform = `translate3d(0, ${getStyleValueByStep([0.9, 1], [0, -100], e.scrollTop, e.moveArea)}px, 0)`;
				$blurTitle.style.transform = `translate3d(0, ${getStyleValueByStep([0.9, 1], [0, -100], e.scrollTop, e.moveArea)}px, 0)`;
				$blurTitleWrap.style.opacity = getStyleValueByStep([0.9, 1], [1, 0], e.scrollTop, e.moveArea);
				$blurTitle.style.opacity = getStyleValueByStep([0.9, 1], [1, 0], e.scrollTop, e.moveArea);
			}
		});
	};

	// movie
	const movies = function () {
		const $movieSection = container.querySelector('.section-movie');
		const $movieStickyWrap = $movieSection.querySelector('.sticky-wrap');
		const $movieTitleWrap = $movieSection.querySelector('.title-wrap');
		const $movieCanvasWrap = $movieSection.querySelector('.canvas-wrap');
		const $movieCanvas = $movieSection.querySelector('canvas');
		const movieContext = $movieCanvas.getContext('2d');
		const movieVideoImages = [];
		const movieVideoCount = 150;

		let canvasWidth = $movieCanvas.offsetWidth;
		let canvasHeight = $movieCanvas.offsetHeight;
		let canvasScaleRatioW = ww / canvasWidth;
		let canvasScaleRatioH = wh / canvasHeight;
		let canvasScaleRatio = Math.max(canvasScaleRatioW, canvasScaleRatioH);
		
		$movieCanvas.style.transform = `scale(${canvasScaleRatio})`;
		$movieCanvas.style.top = `${(wh - canvasHeight) / 2}px`;
		$movieCanvas.style.left = `${(ww - canvasWidth) / 2}px`;

		let beforeActiveArea;
		let sequence;

		const movieSetSeqences = function (e) {
			let imgElem;
			let num;

			for (let i = 0; i < movieVideoCount; i++) {
				imgElem = new Image();
				num = String(i + 1).length < 3 ? new Array(3 - String(i + 1).length + 1).join("0") + (i + 1) : String(i + 1);
				imgElem.src = `assets/video/movies8/ezgif-frame-${num}.jpg`;
				movieVideoImages.push(imgElem);
			}
		};

		const movieSetImages = function (e) {
			sequence = Math.min(movieVideoCount - 1, Math.max(0, Math.round( e.percent * movieVideoCount ))) || 0;
			movieVideoImages[sequence].addEventListener('load', function () {
				movieContext.drawImage(movieVideoImages[sequence], 0, 0);
			});
		}

		movieSetSeqences();
		scroller( $movieSection, {
			on: function (e) {
				movieSetImages(e);
			},
			off: function () {
				$movieCanvasWrap.classList.remove('fix');
			},
			scroll: function (e) {
				beforeActiveArea =  -wh / e.moveArea;
				if ( e.percent > beforeActiveArea && e.percent < 0.2  ) {
					$movieCanvasWrap.classList.add('fix');
					$movieCanvasWrap.style.opacity = getStyleValueByStep([beforeActiveArea, 0], [0, 1], e.scrollTop, e.moveArea);
					$movieTitleWrap.style.opacity = getStyleValueByStep([-0.05, 0], [0, 1], e.scrollTop, e.moveArea);
				} else if ( e.percent > 1 ) {
					$movieCanvasWrap.classList.remove('fix');
					movieContext.drawImage(movieVideoImages[movieVideoCount - 1], 0, 0);
				}

				sequence = Math.min(movieVideoCount - 1, Math.max(0, Math.round( e.percent * movieVideoCount )));
				movieContext.drawImage(movieVideoImages[sequence], 0, 0);
				$movieStickyWrap.style.opacity = getStyleValueByStep([0.9, 1], [1, 0], e.scrollTop, e.moveArea);
			},
			resize: function (e) {
				canvasWidth = $movieCanvas.offsetWidth;
				canvasHeight = $movieCanvas.offsetHeight;
				canvasScaleRatioW = ww / canvasWidth;
				canvasScaleRatioH = wh / canvasHeight;
				canvasScaleRatio = Math.max(canvasScaleRatioW, canvasScaleRatioH);
		
				$movieCanvas.style.transform = `scale(${canvasScaleRatio})`;
				$movieCanvas.style.top = `${(wh - canvasHeight) / 2}px`;
				$movieCanvas.style.left = `${(ww - canvasWidth) / 2}px`;

				sequence = Math.min(movieVideoCount - 1, Math.max(0, Math.round( e.percent * movieVideoCount )));
				movieContext.drawImage(movieVideoImages[sequence], 0, 0);
			}
		});
	};

	// lottie
	const lotties = function () {
		const $lottieSection = container.querySelector('.section-lottie');
		const $lottieBox1 = $lottieSection.querySelector('.sticky-wrap .lottie-1');
		const $lottieBox2 = $lottieSection.querySelector('.sticky-wrap .lottie-2');
		const $lottieBox3 = $lottieSection.querySelector('.sticky-wrap .lottie-3');
		const $lottieBox4 = $lottieSection.querySelector('.sticky-wrap .lottie-4');
		const $lottieBox5 = $lottieSection.querySelector('.sticky-wrap .lottie-5');
		const $lottieSprite1 = $lottieSection.querySelector('.sticky-wrap .sprite-1');
		const $lottieSprite2 = $lottieSection.querySelector('.sticky-wrap .sprite-2');
	
		const lottieAnimation1 = lottie.loadAnimation({
			container: $lottieBox1,
			path: 'assets/lottie/91414-city-building-construction.json',
			renderer: 'svg',
			loop: false,
			autoplay: false,
		});
		const lottieAnimation2 = lottie.loadAnimation({
			container: $lottieBox2,
			path: 'assets/lottie/66615-wave-blue-lines.json',
			renderer: 'svg',
			loop: false,
			autoplay: false,
		});
		const lottieAnimation3 = lottie.loadAnimation({
			container: $lottieBox3,
			path: 'assets/lottie/107005-energyshares-tree1.json',
			renderer: 'svg',
			loop: false,
			autoplay: false,
		});
		const lottieAnimation4 = lottie.loadAnimation({
			container: $lottieBox4,
			path: 'assets/lottie/107006-energyshares-tree2.json',
			renderer: 'svg',
			loop: false,
			autoplay: false,
		});
		const lottieAnimation5 = lottie.loadAnimation({
			container: $lottieBox5,
			path: 'assets/lottie/107008-energyshares-tree4.json',
			renderer: 'svg',
			loop: false,
			autoplay: false,
		});

		scroller( $lottieSection, {
			scroll: function (e) {
				$lottieSprite1.style.transform =  `translate3d(${getStyleValueByStep([0, 0.8], [0, ww], e.scrollTop, e.moveArea)}px, 0, 0)`;
				$lottieSprite2.style.transform =  `translate3d(${getStyleValueByStep([0, 0.8], [0, -ww-150], e.scrollTop, e.moveArea)}px, ${Math.sin(e.scrollTop * 0.005) * 100}px, 0)`;

				lottieAnimation1.goToAndStop(e.percent * (lottieAnimation1.totalFrames - 1), true);
				lottieAnimation2.goToAndStop(e.percent * (lottieAnimation2.totalFrames - 1), true);
				lottieAnimation3.goToAndStop(e.percent * (lottieAnimation3.totalFrames - 1), true);
				lottieAnimation4.goToAndStop(e.percent * (lottieAnimation4.totalFrames - 1), true);
				lottieAnimation5.goToAndStop(e.percent * (lottieAnimation5.totalFrames - 1), true);

				if ( lottieAnimation1.totalFrames === 0 ) {
					setTimeout(function() {
						lottieAnimation1.goToAndStop(e.percent * (lottieAnimation1.totalFrames - 1), true);
						lottieAnimation2.goToAndStop(e.percent * (lottieAnimation2.totalFrames - 1), true);
						lottieAnimation3.goToAndStop(e.percent * (lottieAnimation3.totalFrames - 1), true);
						lottieAnimation4.goToAndStop(e.percent * (lottieAnimation4.totalFrames - 1), true);
						lottieAnimation5.goToAndStop(e.percent * (lottieAnimation5.totalFrames - 1), true);
					}, 100)
				}
			},
		});
	};

	// horizontal
	const horizontals = function () {
		const $horizontalSection = container.querySelector('.section-horizontal');
		const $horizontalSticky = $horizontalSection.querySelector('.sticky-wrap');
		const $horizontalScroll = $horizontalSection.querySelector('.scroll-wrap');
		const $horizontalImage1 = $horizontalSection.querySelector('.img-1');
		const $horizontalImage2 = $horizontalSection.querySelector('.img-2');
		const $horizontalIconGood = $horizontalSection.querySelector('.icon-good');
		const horizontalStickyPadding = 
			parseInt(window.getComputedStyle( $horizontalSticky, null ).getPropertyValue('padding-left') ) + 
			parseInt(window.getComputedStyle( $horizontalSticky, null ).getPropertyValue('padding-right') );
		const horizontalScrollValue = ww - $horizontalScroll.scrollWidth - horizontalStickyPadding;
	
		scroller( $horizontalSection, {
			scroll: function (e) {
				$horizontalScroll.style.transform = `translate3d(${getStyleValueByStep([0, 1], [0, horizontalScrollValue], e.scrollTop, e.moveArea)}px, 0, 0)`;
				$horizontalImage1.style.transform = `translate3d(${getStyleValueByStep([0, 1], [0, -500], e.scrollTop, e.moveArea)}px, 0, 0)`;
				$horizontalImage2.style.transform = `translate3d(${getStyleValueByStep([0, 1], [0, -600], e.scrollTop, e.moveArea)}px, 0, 0)`;
				$horizontalIconGood.style.transform = `translate3d(${getStyleValueByStep([0, 1], [0, 200], e.scrollTop, e.moveArea)}px, 0, 0)`;
			}
		});
	};

	window.addEventListener('load', init);
	window.addEventListener('resize', resize);
}
App();


const scroller = function ( selector, options ) {
	let $selector;
	let scrollValue = {};

	const init = function () {
		$selector = typeof selector == "string" ? document.querySelector(selector) : selector;
		if ( !$selector ) return false;

		const defaultOptions = {
			on: function () {},
			off: function () {},
			scroll: function () {},
			resize: function () {},
		}
		options = Object.assign(defaultOptions, options);
		
		io = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) on();
					else off();
				});
			}
		);
		io.observe($selector);
	}

	const requestScroll = function() {
		requestAnimationFrame(scroll)
	}

	const on = function () {
		scroll();
		options.on(scrollValue);

		$selector.classList.add('on');
		window.addEventListener('scroll', requestScroll);
	}

	const off = function () {
		scroll();
		options.off(scrollValue);

		$selector.classList.remove('on');
		$selector.classList.remove('active');
		window.removeEventListener('scroll', requestScroll);
	}

	const scroll = function (e) {
		const scrollTop = window.scrollY - selector.offsetTop;
		const moveArea = selector.getBoundingClientRect().height - window.innerHeight;
		const percent = scrollTop / moveArea;

		scrollValue = {
			scrollTop,
			moveArea,
			percent,
		}

		if ( percent > 1 ) {
			$selector.classList.remove('active');
		} else if ( percent > 0 ) {
			$selector.classList.add('active');
		} else {
			$selector.classList.remove('active');
		}

		options.scroll(scrollValue);
	}

	const resize = function () {
		options.resize(scrollValue);
		scroll();
	}

	init();
	window.addEventListener('resize', resize);
}

const getStyleValueByStep = function (step, value, scrollTop, moveArea, easing) {
	let partStart;
	let partEnd;
	let partArea;
	let partSpot;

	let rv;

	if (typeof step === 'number') {
		partSpot = moveArea * step;

		if (scrollTop < partSpot) {
			rv = value[0];
		} else {
			rv = value[1];
		}
	} else {
		partStart = moveArea * step[0];
		partEnd = moveArea * step[1];
		partArea = partEnd - partStart;

		if (scrollTop < partStart) {
			rv = value[0];
		} else if (scrollTop > partEnd) {
			rv = value[1];
		} else {
			// rv = ((scrollTop - partStart) / partArea) * (value[1] - value[0]) + value[0];

			rv = (scrollTop - partStart) / partArea;
			if ( easing ) {
				if ( typeof(easing) === 'string' ) {
					rv = gsap.parseEase(easing)(rv);
				} else if ( typeof(easing) === 'function' ) {
					rv = easing(rv);
				} 
			}
			rv = rv * (value[1] - value[0]) + value[0];
		}
	}

	return rv;
};