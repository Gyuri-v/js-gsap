(function () {
    const container = document.querySelector('.container');
    
    const App = function () {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

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

		const bgx1 = (windowWidth / 2 - 150) / windowWidth * 100;
		const bgx2 = (windowWidth / 2 + 150) / windowWidth * 100;
		const bgy1 = (windowHeight / 2 - 150) / windowHeight * 100;
		const bgy2 = (windowHeight / 2 + 150) / windowHeight * 100;
		$timelineBgWrap.style.clipPath = `polygon(${bgx1}% ${bgy1}%, ${bgx2}% ${bgy1}%, ${bgx2}% ${bgy2}%, ${bgx1}% ${bgy2}%)`;
		
        const timelineTween = gsap.timeline({ paused: true }); 
        timelineTween.to( $timelineBgImage, { opacity: 1, duration: 1} );
        timelineTween.to( $timelineBgWrap,  { clipPath: `polygon(${bgx1}% 0%, ${bgx2}% 0%, ${bgx2}% 100%, ${bgx1}% 100%)`, duration: 1} );
        timelineTween.to( $timelineBgWrap,  { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1} );
        timelineTween.to( $timelineTitle,   { scale: 3, duration: 1} );
        timelineTween.to( $timelineBgImage, { y: "6%", scale: 0.5, ease: 'power0.easeNone', duration: 1}, 'timelineBoth' );
        timelineTween.to( $timelineTitleWrap, { y: "0", duration: 1}, 'timelineBoth' );
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
			start: 0.2,
			enter: function () { 
				$timelineSection.classList.add('active'); 
				// $timelineSection.classList.remove('end'); 
			},
			enterBack: function () { 
				$timelineSection.classList.remove('active'); 
			},
			// leave: function () { 
			// 	$timelineSection.classList.add('end'); 
			// },
            scroll: function (e) { timelineTween.progress(e) }
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
			enter: function () { 
				console.log('enter');
                $lottieSection.classList.add('active');
			},
			enterBack: function () { 
                $lottieSection.classList.remove('active');
			},
            scroll: function (e) {
				timelineTween.progress(e) 
				lottieAnimation1.goToAndStop(e * (lottieAnimation1.totalFrames - 1), true);
				lottieAnimation2.goToAndStop(e * (lottieAnimation2.totalFrames - 1), true);
				lottieAnimation3.goToAndStop(e * (lottieAnimation3.totalFrames - 1), true);
				lottieAnimation4.goToAndStop(e * (lottieAnimation4.totalFrames - 1), true);
				lottieAnimation5.goToAndStop(e * (lottieAnimation5.totalFrames - 1), true);
			}
        });
		// ScrollTrigger.create({
		// 	trigger: $lottieSection,
		// 	scrub: true,
		// 	start: '0%',
		// 	end: '50%',
        //     onEnter: function () {
        //         $lottieSection.classList.add('active');
        //     },
        //     onLeaveBack: function () {
        //         $lottieSection.classList.remove('active');
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
        const horizontalStickyPadding = parseInt(window.getComputedStyle( $horizontalSticky, null ).getPropertyValue('padding-left') ) + parseInt(window.getComputedStyle( $horizontalSticky, null ).getPropertyValue('padding-right') );
        const horizontalScrollValue = windowWidth - $horizontalScroll.scrollWidth - horizontalStickyPadding;
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
		let percent;
		let prevPercent;

        const init = function () {
            wrap = typeof selector == "string" ? document.querySelector(selector).querySelector('.sticky-wrap') : selector;
            if ( !wrap ) return false;

            const defaultOptions = {
				start: 0,
				end: 0,
                on: function () {},
                off: function () {},
                scroll: function () {},
                resize: function () {},
                enter: function () { },
                leave: function () {},
                enterBack: function () {},
                leaveBack: function () {},
            }
            options = Object.assign(defaultOptions, options);

			let startPoint = window.innerHeight / selector.offsetHeight;
			let ioOptions =  { threshold: [options.start || 0, startPoint] };
            let io = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) on();
                        else off();
                    });
                },
				ioOptions
            );
            io.observe(wrap);
			
            window.addEventListener('load', resize);
            window.addEventListener('scroll', scroll);
        }

        const on = function () {
			selector.classList.add('on');

            resize();
            scroll();
            options.on();

			if ( percent > 0 ) {
				options.enter();

				if ( percent < prevPercent ) {
					options.leaveBack();
				}
			} else {
				options.enterBack();
			}

			prevPercent = percent;
        }

        const off = function () {
			selector.classList.remove('on');
			
            resize();
            scroll();
            options.off();
			options.leave();

			if ( percent < prevPercent ) {
				options.enterBack();
			}

			prevPercent = percent;
        }

        const scroll = function (e) {
            const scrollTop = window.scrollY - (selector.offsetTop);
            const moveArea = selector.offsetHeight - window.innerHeight;
            percent = scrollTop / moveArea;
            
            if ( percent > 1.2 || percent < -2 ) return; 

            options.scroll(percent);
        }

        const resize = function () {
            options.resize();
            scroll();
        }

        init();
    }

    App();
})();