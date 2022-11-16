(function () {

	let ww = window.innerWidth;
	let wh = window.innerHeight;
    
    const App = function () {
		const container = document.querySelector('.container');

        // gsap 
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
            gsap.to(item, {
                strokeDashoffset: 0,
                ease: 'cubic.inOut',
                scrollTrigger: {
                    trigger: $gsapSection,
                    start: '0',
                    end: '10%',
                    scrub: true,
                }
            });
			
		}
		gsap.fromTo($gsapBox1, {
			y: "100vh",
		},{
			y: "-100vh",
			ease: 'power0.easeNone',
			scrollTrigger: {
				trigger: $gsapSection,
				start: '10%',
				end: '60%',
				scrub: true,
			}
		});
		gsap.fromTo($gsapBgFave, {
			opacity: 0,
			clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
		},{
			opacity: 1,
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			ease: 'ease.inOut',
			scrollTrigger: {
				trigger: $gsapSection,
				start: '20%',
				end: '25%',
				scrub: true,
			}
		});
		gsap.fromTo($gsapBox2, {
			y: "100vh",
		},{
			y: "-100vh",
			ease: 'power0.easeNone',
			scrollTrigger: {
				trigger: $gsapSection,
				start: '20%',
				end: '70%',
				scrub: true,
			}
		});
		gsap.fromTo($gsapBgForest, {
			opacity: 0,
			clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
		},{
			opacity: 1,
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			ease: 'ease.inOut',
			scrollTrigger: {
				trigger: $gsapSection,
				start: '30%',
				end: '35%',
				scrub: true,
			}
		});
		gsap.fromTo($gsapBox3, {
			y: "100vh",
		},{
			y: "-100vh",
			ease: 'power0.easeNone',
			scrollTrigger: {
				trigger: $gsapSection,
				start: '30%',
				end: '80%',
				scrub: true,
			}
		});
		gsap.fromTo($gsapBgOrange, {
			opacity: 0,
			clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
		},{
			opacity: 1,
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			ease: 'ease.inOut',
			scrollTrigger: {
				trigger: $gsapSection,
				start: '40%',
				end: '45%',
				scrub: true,
			}
		});
		gsap.fromTo($gsapBox4, {
			y: "100vh",
		},{
			y: "0",
			ease: 'power0.easeNone',
			scrollTrigger: {
				trigger: $gsapSection,
				start: '50%',
				end: '75%',
				scrub: true,
			}
		});
		gsap.fromTo($gsapTitleWrap, {
			opacity: 1,
		},{
			opacity: 0,
			ease: 'circ.easeOut',
			scrollTrigger: {
				trigger: $gsapSection,
				start: '70%',
				end: '75%',
				scrub: true,
			}
		});
		gsap.fromTo($gsapBox4Text, {
			opacity: 1,
		},{
			opacity: 0,
			ease: 'circ.easeOut',
			scrollTrigger: {
				trigger: $gsapSection,
				start: '70%',
				end: '75%',
				scrub: true,
			}
		});
		gsap.fromTo($gsapBgLast, {
			opacity: 0,
		},{
			opacity: 1,
			ease: 'ease.inOut',
			scrollTrigger: {
				trigger: $gsapSection,
				start: '75%',
				end: '80%',
				scrub: true,
			}
		});
		ScrollTrigger.create({
			trigger: $gsapSection,
			scrub: 1,
			start: '0%',
			end: '80%',
            onLeave: function () {
                $gsapSection.classList.add('end');
            },
            onToggle: function () {
                if ( $gsapSection.classList.contains('end') ) {
                    $gsapSection.classList.remove('end');
                }
            },
		});

        // timeline
        const $timelineSection = container.querySelector('.section-timeline');
		const $timelineTitleWrap = $timelineSection.querySelector('.title-wrap');
		const $timelineTitle = $timelineSection.querySelector('.title');
		const $timelineBgWrap = $timelineSection.querySelector('.bg');
		const $timelineBgImage = $timelineSection.querySelector('.bg-image');

		const bgx1 = (ww / 2 - 150) / ww * 100;
		const bgx2 = (ww / 2 + 150) / ww * 100;
		const bgy1 = (wh / 2 - 150) / wh * 100;
		const bgy2 = (wh / 2 + 150) / wh * 100;
		$timelineBgWrap.style.clipPath = `polygon(${bgx1}% ${bgy1}%, ${bgx2}% ${bgy1}%, ${bgx2}% ${bgy2}%, ${bgx1}% ${bgy2}%)`;
		
        const timelineTween = gsap.timeline({ paused: true }); 
        timelineTween.to( $timelineBgImage, { opacity: 1, duration: 1} );
        timelineTween.to( $timelineBgWrap,  { clipPath: `polygon(${bgx1}% 0%, ${bgx2}% 0%, ${bgx2}% 100%, ${bgx1}% 100%)`, duration: 1} );
        timelineTween.to( $timelineBgWrap,  { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1} );
        timelineTween.to( $timelineTitle,   { scale: 3, duration: 1} );
        timelineTween.to( $timelineBgImage, { y: "6%", scale: 0.5, ease: 'power0.easeNone', duration: 1}, 'timelineBoth' );
        timelineTween.to( $timelineTitleWrap, { top: "20%", duration: 1}, 'timelineBoth' );
        timelineTween.to( $timelineTitle,   { color: 'transparent', textStroke: '0.5px #fff', duration: 1} );
		// ScrollTrigger.create({
		// 	animation: timelineTween,
		// 	trigger: $timelineSection,
		// 	scrub: true,
		// 	start: 'top top',
		// 	end: 'bottom bottom',
        //     onEnter: function () {
        //         $timelineSection.classList.add('active');
        //     },
        //     onLeaveBack: function () {
        //         $timelineSection.classList.remove('active');
        //     },
		// });
		scroller( $timelineSection, {
			on: function () { 
				$timelineSection.classList.add('active'); 
			},
			off: function () { 
				$timelineSection.classList.remove('active'); 
			},
            scroll: function (e) { timelineTween.progress(e.percent) }
        });


		// blur
        const $blurSection = container.querySelector('.section-blur');
        const $blurTitle = $blurSection.querySelector('.title-wrap');
        const $blurItems = $blurSection.querySelectorAll('.item');
		const $blurImages = $blurSection.querySelectorAll('.img');
		
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
				// $blurImages[0].style.transform = `translate3d(${position.x * -0.02}px, ${position.y * -0.02}px, 0)`; 
				$blurImages[1].style.transform = `translate3d(${position.x * -0.03}px, ${position.y * -0.03}px, 0)`; 
				$blurImages[2].style.transform = `translate3d(${position.x * -0.04}px, ${position.y * -0.04}px, 0)`; 
			} else if ( blurPercent < 0.6 ) {
				// $blurImages[3].style.transform = `translate3d(${position.x * -0.02}px, ${position.y * -0.02}px, 0)`; 
				$blurImages[4].style.transform = `translate3d(${position.x * -0.03}px, ${position.y * -0.03}px, 0)`; 
				$blurImages[5].style.transform = `translate3d(${position.x * -0.04}px, ${position.y * -0.04}px, 0)`; 
			} else if ( blurPercent < 0.9 ) {
				// $blurImages[6].style.transform = `translate3d(${position.x * -0.02}px, ${position.y * -0.02}px, 0)`; 
				$blurImages[7].style.transform = `translate3d(${position.x * -0.03}px, ${position.y * -0.03}px, 0)`; 
				$blurImages[8].style.transform = `translate3d(${position.x * -0.04}px, ${position.y * -0.04}px, 0)`;
			}
		};
		window.addEventListener('mousemove', setPostion);

		scroller( $blurSection , {
			on: function () {
				//
			},
			scroll: function(e) {
				blurPercent = e.percent;

				$blurItems[0].style.transform = `translate3d(${calcValue([0, 0.6], [0,  -300], e.scrollTop, e.moveArea)}px, 0, ${calcValue([0, 0.3], [0, 200], e.scrollTop, e.moveArea)}px)`;
				$blurItems[1].style.transform = `translate3d(${calcValue([0, 0.6], [-300,  0], e.scrollTop, e.moveArea)}px, 0, ${calcValue([0, 0.6], [-200, 200], e.scrollTop, e.moveArea)}px)`;
				$blurItems[2].style.transform = `translate3d(${calcValue([0, 0.9], [300, 0], e.scrollTop, e.moveArea)}px, 0, ${calcValue([0, 0.9], [-400, 200], e.scrollTop, e.moveArea)}px)`;
				
				$blurItems[1].style.filter = `blur(${calcValue([0.27, 0.33], [20, 0], e.scrollTop, e.moveArea)}px)`;
				$blurItems[0].style.opacity = calcValue([0.25, 0.3], [1, 0], e.scrollTop, e.moveArea);
				$blurItems[2].style.filter = `blur(${calcValue([0.57, 0.63], [20, 0], e.scrollTop, e.moveArea)}px)`;
				$blurItems[1].style.opacity = calcValue([0.55, 0.6], [1, 0], e.scrollTop, e.moveArea);
				$blurItems[2].style.opacity = calcValue([0.85, 0.9], [1, 0], e.scrollTop, e.moveArea);

				$movieVideoWrap.style.opacity = calcValue([0.75, 1], [0, 1], e.scrollTop, e.moveArea);

				$blurTitle.style.transform = `translate3d(0, ${calcValue([0.9, 1], [0, -100], e.scrollTop, e.moveArea)}px, 0)`;
				$blurTitle.style.opacity = calcValue([0.9, 1], [1, 0], e.scrollTop, e.moveArea);
				$movieTitleWrap.style.opacity = calcValue([0.9, 1], [0, 1], e.scrollTop, e.moveArea);

				if ( !$movieVideoWrap.classList.contains('fix') && e.percent > 0.75 ) {
					$movieVideoWrap.classList.add('fix');
				}
			}
		});

			

        // movie
        const $movieSection = container.querySelector('.section-movie');
		const $movieStickyWrap = $movieSection.querySelector('.sticky-wrap');
		const $movieTitleWrap = $movieSection.querySelector('.title-wrap');
		const $movieVideoWrap = $movieSection.querySelector('.video-wrap');
		const $movieVideo = $movieSection.querySelector('video');
		let movieVideoDuration = 0;

		$movieVideo.addEventListener('canplay', function () {
			movieVideoDuration = $movieVideo.duration;
		});

		scroller( $movieSection, {
			on: function () { 
				$movieSection.classList.add('active'); 
			},
			off: function () { 
				$movieSection.classList.remove('active'); 
			},
            scroll: function (e) {
				const movieTime = Math.max(0.2, Math.min(movieVideoDuration - 0.2, e.percent * movieVideoDuration));
				$movieVideo.currentTime = movieTime;

				if ( e.percent > 0 && $movieVideoWrap.classList.contains('fix') ) {
					$movieVideoWrap.classList.remove('fix');
				}
			}
        });




        // lottie
        const $lottieSection = container.querySelector('.section-lottie');
		const $lottieBox1 = $lottieSection.querySelector('.sticky-wrap .lottie-1');
		const $lottieBox2 = $lottieSection.querySelector('.sticky-wrap .lottie-2');
		const $lottieBox3 = $lottieSection.querySelector('.sticky-wrap .lottie-3');
		const $lottieBox4 = $lottieSection.querySelector('.sticky-wrap .lottie-4');
		const $lottieBox5 = $lottieSection.querySelector('.sticky-wrap .lottie-5');

        const lottieAnimation1 = lottie.loadAnimation({
            container: $lottieBox1,
            path: '../assets/lottie/91414-city-building-construction.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        const lottieAnimation2 = lottie.loadAnimation({
            container: $lottieBox2,
            path: '../assets/lottie/66615-wave-blue-lines.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        const lottieAnimation3 = lottie.loadAnimation({
            container: $lottieBox3,
            path: '../assets/lottie/107005-energyshares-tree1.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        const lottieAnimation4 = lottie.loadAnimation({
            container: $lottieBox4,
            path: '../assets/lottie/107006-energyshares-tree2.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        const lottieAnimation5 = lottie.loadAnimation({
            container: $lottieBox5,
            path: '../assets/lottie/107008-energyshares-tree4.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
		scroller( $lottieSection, {
			// start: 0.25,
			on: function () { 
				console.log('enter');
                $lottieSection.classList.add('active');
                $lottieSection.classList.add('on');
			},
			off: function () { 
                $lottieSection.classList.remove('active');
                $lottieSection.classList.remove('on');
			},
            scroll: function (e) {
				timelineTween.progress(e) 
				lottieAnimation1.goToAndStop(e.percent * (lottieAnimation1.totalFrames - 1), true);
				lottieAnimation2.goToAndStop(e.percent * (lottieAnimation2.totalFrames - 1), true);
				lottieAnimation3.goToAndStop(e.percent * (lottieAnimation3.totalFrames - 1), true);
				lottieAnimation4.goToAndStop(e.percent * (lottieAnimation4.totalFrames - 1), true);
				lottieAnimation5.goToAndStop(e.percent * (lottieAnimation5.totalFrames - 1), true);
			}
        });
		// ScrollTrigger.create({
		// 	trigger: $lottieSection,
		// 	scrub: true,
		// 	start: '0%',
		// 	end: '50%',
        //     onEnter: function () {
        //         $lottieSection.classList.add('active');
        //         $lottieSection.classList.add('on');
        //     },
        //     onLeaveBack: function () {
        //         $lottieSection.classList.remove('active');
        //         $lottieSection.classList.remove('on');
        //     },
		// 	onUpdate: function(self) {
		// 		lottieAnimation1.goToAndStop(self.progress * (lottieAnimation1.totalFrames - 1), true);
		// 		lottieAnimation2.goToAndStop(self.progress * (lottieAnimation2.totalFrames - 1), true);
		// 		lottieAnimation3.goToAndStop(self.progress * (lottieAnimation3.totalFrames - 1), true);
		// 		lottieAnimation4.goToAndStop(self.progress * (lottieAnimation4.totalFrames - 1), true);
		// 		lottieAnimation5.goToAndStop(self.progress * (lottieAnimation5.totalFrames - 1), true);
		// 	}
		// });

        // horizontal-wrap
        // horizontal
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
		gsap.to($horizontalScroll, {
			x: horizontalScrollValue,
			ease: 'linear',
			scrollTrigger: {
				trigger: $horizontalSection,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			},
		});
		gsap.to($horizontalImage1, {
			x: -500,
			ease: 'linear',
			scrollTrigger: {
				trigger: $horizontalSection,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			},
		});
		gsap.to($horizontalImage2, {
			x: -600,
			ease: 'linear',
			scrollTrigger: {
				trigger: $horizontalSection,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			},
		});
		gsap.to($horizontalIconGood, {
			x: 200,
			ease: 'linear',
			scrollTrigger: {
				trigger: $horizontalSection,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			},
		});

    }


	const scroller = function ( selector, options ) {
        let wrap;

        const init = function () {
            wrap = typeof selector == "string" ? document.querySelector(selector) : selector;
            if ( !wrap ) return false;

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
            io.observe(wrap);
        }

        const on = function () {
            resize();
            scroll();
            options.on();
			
            window.addEventListener('scroll', scroll);
        }

        const off = function () {
            scroll();
            options.off();

			window.removeEventListener('scroll', scroll);
        }

        const scroll = function (e) {
            const scrollTop = window.scrollY - selector.offsetTop;
            const moveArea = selector.getBoundingClientRect().height - window.innerHeight;
            const percent = scrollTop / moveArea;

			const result = {
				scrollTop,
				moveArea,
				percent,
			}

            options.scroll(result);
        }

        const resize = function () {
            options.resize();
            scroll();
        }

        init();
    }

	const calcValue = function (step, value, scrollTop, moveArea) {
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
				rv = ((scrollTop - partStart) / partArea) * (value[1] - value[0]) + value[0];
			}
		}

		return rv;
	};




    App();


})();