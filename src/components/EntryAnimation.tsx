import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function EntryAnimation() {
  const ellipseRef = useRef<SVGEllipseElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 1920, h: 1080 });

  useEffect(() => {
    setDims({ w: window.innerWidth, h: window.innerHeight });
  }, []);

  useEffect(() => {
    if (!ellipseRef.current || !wrapperRef.current) return;

    const targetRx = Math.max(dims.w * 2, 2700);
    const targetRy = Math.max(dims.h * 2, 2150);

    gsap.to(ellipseRef.current, {
      attr: { rx: targetRx, ry: targetRy },
      duration: 1.25,
      ease: 'power2.out',
      onComplete: () => {
        if (wrapperRef.current) {
          wrapperRef.current.style.display = 'none';
        }
      },
    });
  }, [dims]);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 w-screen h-screen z-[100] pointer-events-none hidden md:block"
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${dims.w} ${dims.h}`}
        preserveAspectRatio="none"
        className="block w-screen h-screen"
      >
        <defs>
          <mask id="circle-reveal-mask">
            <rect width="100%" height="100%" fill="white" />
            <ellipse
              ref={ellipseRef}
              cx={dims.w / 2}
              cy={dims.h + dims.h * 0.8}
              rx="0"
              ry="0"
              fill="black"
            />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="#b2f6e3"
          mask="url(#circle-reveal-mask)"
        />
      </svg>
    </div>
  );
}
