import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!headingRef.current) return;

      const heading = headingRef.current;

      const headingWidth = heading.offsetWidth;
      const windowWidth = window.innerWidth;

      // Initial heading position
      gsap.set(heading, {
        x: headingWidth - windowWidth + windowWidth * 0.5,
        y: 40,
      });

      // Slightly slower cinematic horizontal movement
      gsap.to(heading, {
        x: -(headingWidth - windowWidth + 1000),
        y: 110,
        ease: 'none',

        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: '+=' + windowWidth * 0.75,
          scrub: true,
        },
      });

      // Split text into chars
      const split = new SplitType(heading, {
        types: 'chars',
      });

      // Initial curved distortion
      gsap.set(split.chars, {
        yPercent: (i) => Math.sin(i * 0.5) * -120,
        rotate: (i) => Math.sin(i * 0.5) * 15,
      });

      // Character normalization
      gsap.to(split.chars, {
        yPercent: 0,
        rotate: 0,
        ease: 'back.inOut(4)',
        stagger: 0.03,

        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: '+=' + windowWidth * 0.6,
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#efeeec] hidden lg:block"
    >
      <div className="flex h-screen items-center overflow-hidden">
        <h1
          ref={headingRef}
          className="
            shrink-0
            whitespace-nowrap
            text-[16vw]
            font-medium
            tracking-tight
            leading-[0.9]
            text-black
            will-change-transform
            select-none
          "
        >
          Ready to Rise at Seven?
        </h1>
      </div>
    </section>
  );
}