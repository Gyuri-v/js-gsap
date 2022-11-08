(function () {
    const container = document.querySelector('.container');

    const App = function () {
        // gsap 
        const gsapSection = container.querySelector('.section-gsap');
        const gsapBg = gsapSection.querySelector('.bg');
        const gsapBox1 = gsapSection.querySelector('.box-1');
        const gsapBox2 = gsapSection.querySelector('.box-2');
        const gsapBox3 = gsapSection.querySelector('.box-3');
        // const gsapInner = gsapSection.querySelector('.sticky-inner');
        const gsapTween1 = gsap.to(gsapBg, {
            x: "100vw",
            duration: 1,
            ease: 'power1.inOut',
            paused: true,
        });
        scroller( gsapSection, {
            scroll: function (e) {
                console.log(e.toFixed(2), (e / 3 * 10).toFixed(2), ((e - 0.3) / 7 * 10).toFixed(2))
                gsapTween1.progress(e / 3 * 10,);
                gsapTween2.progress((e - 0.2) / 5 * 10);
                gsapTween3.progress((e - 0.3) / 5 * 10);
                gsapTween4.progress((e - 0.4) / 5 * 10);
            }
        });

        // timeline
        const timelineSection = container.querySelector('.section-timeline');
        const timelineTit = timelineSection.querySelector('.title');
        const timelineBox = timelineSection.querySelector('.bg');
        const timelineTimeline = gsap.timeline({paused: true}); 
        timelineTimeline.to( timelineBox, { width: "100%", duration: 1} );
        // timelineTimeline.to( timelineTit, { scale: 30, duration: 1} );
        // timelineTimeline.to( timelineBox, { rotation: 0, backgroundColor: '#05d', duration: 1} );
        // timelineTimeline.to( timelineBox, { rotation: 180, backgroundColor: '#5d0', duration: 1} );
        // timelineTimeline.to( timelineBox, { rotation: 0, backgroundColor: '#05d', duration: 1} );
        scroller( timelineSection, {
            scroll: function (e) { timelineTimeline.progress(e) }
        });

        // lottie
        const lottieSection = container.querySelector('.section-lottie');
        const lottieAnimation = lottie.loadAnimation({
            container: lottieSection.querySelector('.sticky-wrap'),
            path: '../assets/lottie/125669-party.json',
            renderer: 'svg',
            loop: false,
            autoplay: false,
        });
        scroller(lottieSection, {
            scroll: function (e) {
                const lottieEndCut = lottieAnimation.totalFrames - 5;
                lottieAnimation.goToAndStop(Math.min(lottieEndCut, Math.max(0, e * (lottieEndCut))), true)  
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

            window.addEventListener('load', resize);
            window.addEventListener('scroll', scroll);
        }

        const on = function () {
            resize();
            scroll();
            options.on();
        }

        const off = function () {
            scroll();
            options.off();
        }

        const scroll = function (e) {
            const scrollTop = window.scrollY - selector.offsetTop;
            const moveArea = selector.getBoundingClientRect().height - window.innerHeight;
            const percent = scrollTop / moveArea;
            
            if ( percent > 1.2 ) return; 

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