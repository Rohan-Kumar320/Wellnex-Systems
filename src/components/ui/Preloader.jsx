import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import animationData from "../../assets/lotties/preloader.json";

export default function Preloader({ visible = false, onExited = () => {} }) {
  const [mounted, setMounted] = useState(visible);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const lottieRef = useRef(null);
  const titleRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    if (visible) setMounted(true);
  }, [visible]);

  useEffect(() => {
    if (!mounted) return;

    const overlay = overlayRef.current;
    const panel = panelRef.current;
    const lottieEl = lottieRef.current;
    const titleEl = titleRef.current;

    gsap.killTweensOf([overlay, panel, lottieEl, titleEl]);

    gsap.set([overlay, panel, lottieEl, titleEl], {
      clearProps: "all",
      force3D: true
    });

    const intro = gsap.timeline();

    intro.fromTo(
      overlay,
      { autoAlpha: 0, filter: "blur(6px)", y: "0%" },
      { autoAlpha: 1, filter: "blur(0px)", duration: 0.45, ease: "power2.out" },
      0
    );

    intro.fromTo(
      panel,
      { scale: 0.96, autoAlpha: 0, y: 6 },
      { scale: 1, autoAlpha: 1, y: 0, duration: 0.95, ease: "power3.out" },
      0
    );

    intro.fromTo(
      lottieEl,
      { scale: 0.86, autoAlpha: 0, y: 6 },
      { scale: 1, autoAlpha: 1, y: 0, duration: 1.05, ease: "back.out(1.05)" },
      0.06
    );

    intro.fromTo(
      titleEl,
      { y: 18, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1.25, ease: "power3.out" },
      0.12
    );

    return () => intro.kill();
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    if (visible) return; // wait until visible flips to false to run exit

    const overlay = overlayRef.current;
    const panel = panelRef.current;
    const lottieEl = lottieRef.current;
    const titleEl = titleRef.current;

    gsap.killTweensOf([overlay, panel, lottieEl, titleEl]);

    const tl = gsap.timeline({
      defaults: { force3D: true },
      onComplete: () => {
        setMounted(false);
        try { onExited(); } catch (e) {}
      }
    });

    // Lottie and title lead the motion slightly; overlay follows and fades/blur-out for soft reveal
    tl.to(
      [lottieEl, titleEl],
      { y: -70, autoAlpha: 0.95, duration: 1.0, ease: "power2.out" },
      0
    );

    tl.to(
      panel,
      { y: -150, duration: 0.9, ease: "power4.inOut" },
      0.06
    );

    // overlay moves up a little later, gets slightly blurred and faded — creates soft focus on incoming page
    tl.to(
      overlay,
      { y: "-130%", autoAlpha: 0, filter: "blur(8px)", duration: 0.95, ease: "power3.in" },
      0.12
    );

    tlRef.current = tl;

    return () => tl.kill();
  }, [visible, mounted, onExited]);

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden={!visible}
      style={{ pointerEvents: visible ? "auto" : "none", willChange: "transform, opacity, filter" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#06060a] text-cyan-400"
    >
      <div
        ref={panelRef}
        className="w-full h-full flex flex-col items-center justify-center"
        style={{ WebkitTapHighlightColor: "transparent", transform: "translateZ(0)" }}
      >
        <div className="flex flex-col items-center gap-6">

          <div
            ref={titleRef}
            className="text-3xl md:text-4xl font-extrabold tracking-widest mt-2 text-center"
            style={{ fontFamily: "var(--font-heading)", transform: "translateZ(0)" }}
          >
            Wellnex Systems
          </div>

          <div
            ref={lottieRef}
            className="w-[200px] h-[200px] will-change-transform"
            aria-hidden="true"
            style={{ transform: "translateZ(0)" }}
          >
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
