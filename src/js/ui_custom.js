(function () {
    const container = document.querySelector('.container');

    const App = function () {
        // gsap 
        const gsapSection = container.querySelector('.section-gsap');
        gsapSection.querySelectorAll('path').forEach(function (item) {
            const lineLength = Math.round(item.getTotalLength());
            item.style.strokeDasharray = lineLength;
            item.style.strokeDashoffset = lineLength;
            gsap.to(item, {
                strokeDashoffset: 0,
                ease: 'cubic.inOut',
                scrollTrigger: {
                    trigger: gsapSection,
                    start: '0',
                    end: '10%',
                    scrub: true,
                }
            });
        });
		gsap.fromTo(gsapSection.querySelector('.box-1'), {
			y: "100vh",
		},{
			y: "-100vh",
			ease: 'power0.easeNone',
			scrollTrigger: {
				trigger: gsapSection,
				start: '10%',
				end: '60%',
				scrub: true,
			}
		});
		gsap.fromTo(gsapSection.querySelector('.bg-fave'), {
			opacity: 0,
            width: 0,
            height: 0,
		},{
			opacity: 1,
            width: "100%",
            height: "100%",
			ease: 'ease.inOut',
			scrollTrigger: {
				trigger: gsapSection,
				start: '20%',
				end: '25%',
				scrub: true,
			}
		});
		gsap.fromTo(gsapSection.querySelector('.box-2'), {
			y: "100vh",
		},{
			y: "-100vh",
			ease: 'power0.easeNone',
			scrollTrigger: {
				trigger: gsapSection,
				start: '20%',
				end: '70%',
				scrub: true,
			}
		});
		gsap.fromTo(gsapSection.querySelector('.bg-forest'), {
			opacity: 0,
            width: 0,
            height: 0,
		},{
			opacity: 1,
            width: "100%",
            height: "100%",
			ease: 'ease.inOut',
			scrollTrigger: {
				trigger: gsapSection,
				start: '30%',
				end: '35%',
				scrub: true,
			}
		});
		gsap.fromTo(gsapSection.querySelector('.box-3'), {
			y: "100vh",
		},{
			y: "-100vh",
			ease: 'power0.easeNone',
			scrollTrigger: {
				trigger: gsapSection,
				start: '30%',
				end: '80%',
				scrub: true,
			}
		});
		gsap.fromTo(gsapSection.querySelector('.bg-orange'), {
			opacity: 0,
            width: 0,
            height: 0,
		},{
			opacity: 1,
            width: "100%",
            height: "100%",
			ease: 'ease.inOut',
			scrollTrigger: {
				trigger: gsapSection,
				start: '40%',
				end: '45%',
				scrub: true,
			}
		});
		gsap.fromTo(gsapSection.querySelector('.box-4'), {
			y: "100vh",
		},{
			y: "0",
			ease: 'power0.easeNone',
			scrollTrigger: {
				trigger: gsapSection,
				start: '50%',
				end: '75%',
				scrub: true,
			}
		});
		gsap.fromTo(gsapSection.querySelector('.title-wrap'), {
			opacity: 1,
		},{
			opacity: 0,
			ease: 'circ.easeOut',
			scrollTrigger: {
				trigger: gsapSection,
				start: '70%',
				end: '75%',
				scrub: true,
			}
		});
		gsap.fromTo(gsapSection.querySelector('.box-4 .txt'), {
			opacity: 1,
		},{
			opacity: 0,
			ease: 'circ.easeOut',
			scrollTrigger: {
				trigger: gsapSection,
				start: '70%',
				end: '75%',
				scrub: true,
			}
		});
		gsap.fromTo(gsapSection.querySelector('.bg-last'), {
			opacity: 0,
		},{
			opacity: 1,
			ease: 'ease.inOut',
			scrollTrigger: {
				trigger: gsapSection,
				start: '75%',
				end: '80%',
				scrub: true,
			}
		});
		ScrollTrigger.create({
			trigger: gsapSection,
			scrub: 1,
			start: '0%',
			end: '80%',
            onLeave: function () {
                gsapSection.classList.add('end');
            },
            onToggle: function () {
                if ( gsapSection.classList.contains('end') ) {
                    gsapSection.classList.remove('end');
                }
            },
		});

        // timeline
        const timelineSection = container.querySelector('.section-timeline');
        const timelineTween = gsap.timeline({paused: true}); 
        timelineTween.to( timelineSection.querySelector('.bg-image'), { opacity: 1, duration: 1} );
        timelineTween.to( timelineSection.querySelector('.bg'), { height: "100%", duration: 1} );
        timelineTween.to( timelineSection.querySelector('.bg'), { width: "100%", duration: 1} );
        timelineTween.to( timelineSection.querySelector('.title'), { scale: 3, duration: 1} );
        timelineTween.to( timelineSection.querySelector('.bg-image'), { y: "6%", scale: 0.5, ease: 'power0.easeNone', duration: 1} );
        timelineTween.to( timelineSection.querySelector('.bg-image'), { y: "6%", scale: 0.5, ease: 'power0.easeNone', duration: 1} );
        timelineTween.to( timelineSection.querySelector('.title-wrap'), { top: "20%", duration: 1} );
        timelineTween.to( timelineSection.querySelector('.title'), { color: 'transparent', textStroke: '0.5px #fff', duration: 1} );
		ScrollTrigger.create({
			animation: timelineTween,
			trigger: timelineSection,
			scrub: true,
			start: 'top top',
			end: 'bottom bottom',
            onEnter: function () {
                timelineSection.classList.add('active');
            },
            onLeaveBack: function () {
                timelineSection.classList.remove('active');
            },
		});

        // lottie
        const lottieSection = container.querySelector('.section-lottie');
        const lottieAnimation1 = lottie.loadAnimation({
            container: lottieSection.querySelector('.sticky-wrap .lottie-1'),
            path: '../assets/lottie/91414-city-building-construction.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        const lottieAnimation2 = lottie.loadAnimation({
            container: lottieSection.querySelector('.sticky-wrap .lottie-2'),
            path: '../assets/lottie/66615-wave-blue-lines.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        const lottieAnimation3 = lottie.loadAnimation({
            container: lottieSection.querySelector('.sticky-wrap .lottie-3'),
            path: '../assets/lottie/107005-energyshares-tree1.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        const lottieAnimation4 = lottie.loadAnimation({
            container: lottieSection.querySelector('.sticky-wrap .lottie-4'),
            path: '../assets/lottie/107006-energyshares-tree2.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        const lottieAnimation5 = lottie.loadAnimation({
            container: lottieSection.querySelector('.sticky-wrap .lottie-5'),
            path: '../assets/lottie/107008-energyshares-tree4.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
		// gsap.fromTo(lottieSection.querySelector('.title-wrap'), {
        //     x: lottieSection.querySelector('.section-lottie .title-wrap').offsetWidth,
		// 	ease: 'power0.easeNone',
		// 	scrollTrigger: {
		// 		trigger: gsapSection,
		// 		start: '0%',
		// 		end: '100%',
		// 		scrub: true,
		// 	}
		// });
		ScrollTrigger.create({
			trigger: lottieSection,
			scrub: true,
			start: 'top top',
			end: 'bottom bottom',
            onEnter: function () {
                lottieSection.classList.add('active');
            },
            onLeaveBack: function () {
                lottieSection.classList.remove('active');
            },
			onUpdate: function(self) {
				lottieAnimation1.goToAndStop(self.progress * (lottieAnimation1.totalFrames - 1), true);
				lottieAnimation2.goToAndStop(self.progress * (lottieAnimation2.totalFrames - 1), true);
				lottieAnimation3.goToAndStop(self.progress * (lottieAnimation3.totalFrames - 1), true);
				lottieAnimation4.goToAndStop(self.progress * (lottieAnimation4.totalFrames - 1), true);
				lottieAnimation5.goToAndStop(self.progress * (lottieAnimation5.totalFrames - 1), true);
			}
		});

        // horizontal-wrap
        // horizontal
        const horizontalSection = container.querySelector('.section-horizontal');
        const horizontalInner = horizontalSection.querySelector('.scroll-wrap');
        const horizontalInnerWidth = horizontalInner.scrollWidth;
        console.log(horizontalInner.scrollWidth)
        scroller(horizontalSection, {
            scroll: function (e) {
                gsap.set(horizontalInner, { x: -(horizontalInnerWidth) * Math.min(1, Math.max(0, e)) })
            }
        })

    }

    // const scroller = function ( selector, options ) {
    //     let wrap;

    //     const init = function () {
    //         wrap = typeof selector == "string" ? document.querySelector(selector) : selector;
    //         if ( !wrap ) return false;

    //         const defaultOptions = {
    //             on: function () {},
    //             off: function () {},
    //             scroll: function () {},
    //             resize: function () {},
    //         }
    //         options = Object.assign(defaultOptions, options);

    //         io = new IntersectionObserver(
    //             entries => {
    //                 entries.forEach(entry => {
    //                     if (entry.isIntersecting) on();
    //                     else off();
    //                 });
    //             }
    //         );
    //         io.observe(wrap);

    //         window.addEventListener('load', resize);
    //         window.addEventListener('scroll', scroll);
    //     }

    //     const on = function () {
    //         resize();
    //         scroll();
    //         options.on();
    //     }

    //     const off = function () {
    //         scroll();
    //         options.off();
    //     }

    //     const scroll = function (e) {
    //         const scrollTop = window.scrollY - selector.offsetTop;
    //         const moveArea = selector.getBoundingClientRect().height - window.innerHeight;
    //         const percent = scrollTop / moveArea;
            
    //         if ( percent > 1.2 ) return; 

    //         options.scroll(percent);
    //     }

    //     const resize = function () {
    //         options.resize();
    //         scroll();
    //     }

    //     init();
    // }

    App();
})();