(function () {
    const container = document.querySelector('.container');

    const App = function () {
        // gsap 
        const gsapSection = container.querySelector('.section-gsap');
        const gsapBox = gsapSection.querySelector('.box');
        const gsapTween = gsap.to(gsapBox, {
            scale: 30,
            backgroundColor: '#fff',
            duration: 1,
            ease: 'power1.inOut',
            paused: true,
        }); 
        scroller( gsapSection, {
            scroll: function (e) { gsapTween.progress(e) }
        });

        // timeline
        const timelineSection = container.querySelector('.section-timeline');
        const timelineBox = timelineSection.querySelector('.box');
        const timelineTimeline = gsap.timeline({paused: true}); 
        timelineTimeline.to( timelineBox, { x: '90vw', duration: 1} );
        timelineTimeline.to( timelineBox, { rotation: 180, backgroundColor: '#5d0', duration: 1} );
        timelineTimeline.to( timelineBox, { rotation: 0, backgroundColor: '#05d', duration: 1} );
        timelineTimeline.to( timelineBox, { rotation: 180, backgroundColor: '#5d0', duration: 1} );
        timelineTimeline.to( timelineBox, { rotation: 0, backgroundColor: '#05d', duration: 1} );
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
                gsap.set(horizontalInner, { x: -(horizontalInnerWidth - window.innerWidth) * Math.min(1, Math.max(0, e)) })
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