import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/preloader.json";


export default function Preloader({
  visible = false,
  onExitStart = () => {},
  onExited = () => {},
  brand = "Wellnex Systems",
  minDisplayMs = 1500
}) {
  const [mounted, setMounted] = useState(visible);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const lottieRef = useRef(null);
  const charsRef = useRef([]);
  const orbsRef = useRef([]);
  const introTl = useRef(null);
  const exitTl = useRef(null);
  const showStartRef = useRef(0);
  const exitTimerRef = useRef(null);

  const titleChars = Array.from(brand || "");

  // track show start when visible becomes true
  useEffect(() => {
    if (visible) {
      setMounted(true);
      showStartRef.current = performance.now();
    }
  }, [visible]);

  // Intro animation
  useEffect(() => {
    if (!mounted) return;

    const overlay = overlayRef.current;
    const panel = panelRef.current;
    const lottieEl = lottieRef.current;

    // Only kill tweens on the elements we control
    gsap.killTweensOf([overlay, panel, lottieEl, ...(orbsRef.current || [])]);

    gsap.set([overlay, panel, lottieEl, ...(orbsRef.current || [])], {
      clearProps: "transform,opacity,filter",
      force3D: true
    });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      overlay,
      { autoAlpha: 0, filter: "blur(10px)" },
      { autoAlpha: 1, filter: "blur(0px)", duration: 0.65 },
      0
    );

    tl.fromTo(
      panel,
      { scale: 0.985, autoAlpha: 0, y: 16 },
      { scale: 1, autoAlpha: 1, y: 0, duration: 1.05, ease: "power3.out" },
      0.06
    );

    tl.fromTo(
      lottieEl,
      { scale: 0.88, autoAlpha: 0, y: 18, rotation: -1.5 },
      { scale: 1, autoAlpha: 1, y: 0, rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.36)" },
      0.12
    );

    tl.fromTo(
      charsRef.current,
      { y: 32, autoAlpha: 0, rotateX: -8 },
      { y: 0, autoAlpha: 1, rotateX: 0, duration: 1.05, stagger: 0.035, ease: "power3.out" },
      0.18
    );

    // orbs gentle entrance
    tl.fromTo(
      orbsRef.current,
      { scale: 0.72, autoAlpha: 0, y: 26 },
      { scale: 1, autoAlpha: 0.9, y: 0, duration: 1.5, stagger: 0.08, ease: "power3.out" },
      0
    );

    // continuous subtle motion for orbs and lottie
    orbsRef.current.forEach((el, i) => {
      gsap.to(el, {
        y: `+=${i % 2 === 0 ? 6 : -6}`,
        x: `+=${i % 3 === 0 ? -5 : 5}`,
        repeat: -1,
        yoyo: true,
        duration: 6 + i * 0.6,
        ease: "sine.inOut",
        delay: i * 0.2
      });
    });

    gsap.to(lottieEl, { rotation: 3, repeat: -1, yoyo: true, duration: 7.5, ease: "sine.inOut" });

    introTl.current = tl;

    return () => {
      tl.kill();
      orbsRef.current.forEach((el) => gsap.killTweensOf(el));
      gsap.killTweensOf(lottieEl);
    };
  }, [mounted, brand]);

  // Exit animation — wait until minDisplayMs is satisfied
  useEffect(() => {
    if (!mounted) return;
    if (visible) {
      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
      // still showing
      return;
    }

    // fire exit start callback so pages can start reveals
    try { onExitStart(); } catch (e) {}

    const start = showStartRef.current || performance.now();
    const elapsed = Math.max(0, performance.now() - start);
    const remaining = Math.max(0, minDisplayMs - elapsed);

    exitTimerRef.current = setTimeout(() => {
      exitTimerRef.current = null;

      const overlay = overlayRef.current;
      const panel = panelRef.current;
      const lottieEl = lottieRef.current;

      gsap.killTweensOf([overlay, panel, lottieEl, ...(orbsRef.current || [])]);

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        onComplete: () => {
          setMounted(false);
          try { onExited(); } catch (e) {}
        }
      });

      // lift + fade
      tl.to([lottieEl, charsRef.current], { y: -110, autoAlpha: 0, duration: 1.05, stagger: 0.02, ease: "power3.in" }, 0);

      // orbs fly away
      tl.to(orbsRef.current, { y: -260, scale: 0.45, autoAlpha: 0, duration: 1.05, stagger: 0.04, ease: "power4.in" }, 0);

      // panel & overlay reveal
      tl.to(panel, { y: -300, duration: 1.25, ease: "power4.inOut" }, 0.06);
      tl.to(overlay, { y: "-140%", autoAlpha: 0, filter: "blur(12px)", duration: 1.05, ease: "power3.in" }, 0.12);

      exitTl.current = tl;
    }, remaining);

    return () => {
      if (exitTimerRef.current) {
        clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
      if (exitTl.current) exitTl.current.kill();
    };
  }, [visible, mounted, minDisplayMs, onExitStart, onExited]);

  if (!mounted) return null;

  const setCharRef = (el, i) => (charsRef.current[i] = el);
  const setOrbRef = (el, i) => (orbsRef.current[i] = el);

  const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={overlayRef}
      aria-hidden={!mounted}
      // keep pointer events while mounted. RouterWrapper can wait for onExited to finalize interaction sequencing.
      style={{ pointerEvents: mounted ? "auto" : "none", willChange: "transform, opacity, filter" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#040417] via-[#081428] to-[#032033] text-cyan-300 overflow-hidden"
    >
      {/* moving gradient background */}
      <div className="absolute inset-0 -z-10 animate-[bg-pan_18s_linear_infinite]" style={{ background: "linear-gradient(120deg, rgba(12,15,30,0.88), rgba(9,24,40,0.7), rgba(3,10,24,0.94))", backgroundSize: "400% 400%" }} />

      {/* grain / noise (optional image) */}
      <div className="absolute inset-0 -z-5 pointer-events-none">
        <div className="w-full h-full opacity-6 mix-blend-overlay" style={{ backgroundImage: "url('/noise.png')" }} />
      </div>

      {/* orbs */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={(el) => setOrbRef(el, i)}
            className="absolute rounded-full blur-3xl opacity-80 pointer-events-none"
            style={{
              width: 140 - i * 12,
              height: 140 - i * 12,
              left: `${8 + i * 14}%`,
              top: `${18 + (i % 3) * 18}%`,
              background: `radial-gradient(circle at 30% 30%, rgba(46,255,255,${0.07 + i * 0.02}), rgba(6,10,30,0.0))`,
              transform: "translateZ(0)"
            }}
          />
        ))}
      </div>

      <div ref={panelRef} className="relative w-full max-w-[920px] p-6 flex flex-col items-center justify-center gap-6" style={{ WebkitTapHighlightColor: "transparent", transform: "translateZ(0)" }}>
        <div className="flex flex-col items-center gap-5">
          <div ref={(el) => setCharRef(el, -1)} className="text-3xl md:text-5xl font-extrabold tracking-widest mt-2 text-center leading-tight" style={{ fontFamily: "'Orbitron', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto" }}>
            <div className="inline-block select-none">
              {titleChars.map((ch, i) => (
                <span
                  key={i}
                  ref={(el) => setCharRef(el, i)}
                  className={`inline-block ${ch === " " ? "w-[0.5rem]" : ""}`}
                  aria-hidden={prefersReduced}
                  style={{ willChange: "transform, opacity" }}
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>

          <div ref={lottieRef} className="w-[240px] h-[240px] will-change-transform relative" aria-hidden="true" style={{ transform: "translateZ(0)" }}>
            <Lottie animationData={animationData} loop={!prefersReduced} />
            <div className="pointer-events-none absolute inset-0 rounded-full blur-[18px] mix-blend-screen" />
          </div>

          <div className="flex items-center gap-3 mt-1 text-sm md:text-base opacity-80">
            <div className="h-1 w-10 rounded-full bg-cyan-400/60 animate-[pulse_2.8s_ease-in-out_infinite]" />
            <span className="font-medium tracking-wide">Initialize Future of Fitness With Us</span>
          </div>
        </div>


        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-8 mix-blend-screen animate-[scan_8s_linear_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes bg-pan { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes pulse { 0%{ transform: scaleX(.9); }50%{ transform: scaleX(1.05);}100%{transform:scaleX(.9);} }
        @keyframes scan { 0% { background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 100%); transform: translateY(-12%);} 100%{ transform: translateY(112%);} }
      `}</style>
    </div>
  );
}
