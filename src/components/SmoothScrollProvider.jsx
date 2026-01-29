import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollProvider = ({ children, options = {} }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion preferences and small screens
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < (options.disableBelowWidth || 768);

    if (prefersReduced || isSmallScreen) {
      // Do not initialize Lenis on small screens or when user prefers reduced motion
      return;
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: options.duration ?? 1.2,
      easing: options.easing ?? (t => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      smoothWheel: true,
      wheelMultiplier: options.wheelMultiplier ?? 1,
      touchMultiplier: options.touchMultiplier ?? 1.5,
      lerp: options.lerp ?? 0.15
    });

    lenisRef.current = lenis;

    // Connect Lenis RAF to GSAP ScrollTrigger
    const raf = (time) => {
      lenis.raf(time);
      // ensure ScrollTrigger uses the current scroll position
      ScrollTrigger.update();
      rafRef.current = requestAnimationFrame(raf);
    };

    // scrollerProxy lets ScrollTrigger ask/set scroll values through Lenis
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) {
          // set
          lenis.scrollTo(value, { immediate: true });
        }
        // get
        return lenis.scroll && (lenis.scroll.instance ? lenis.scroll.instance.y : (lenis.scroll.y ?? window.scrollY)) || window.scrollY;
      },
      getBoundingClientRect() {
        return { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // `pinType` depends on whether the documentElement is transformed
      pinType: document.documentElement.style.transform ? 'transform' : 'fixed'
    });

    rafRef.current = requestAnimationFrame(raf);

    // refresh ScrollTrigger after layout/resize
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) {
        try {
          lenisRef.current.destroy();
        } catch (e) {
          // ignore
        }
        lenisRef.current = null;
      }
      try {
        ScrollTrigger.kill();
      } catch (e) {
        // ignore
      }
    };
  }, [options]);

  return <>{children}</>;
};

export default SmoothScrollProvider;
