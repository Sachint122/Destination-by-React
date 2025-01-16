import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import "./CountUpCircle.css";

export default function CountUp({
  to,
  from = 0,
  startWhen = true,
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && startWhen) {
      motionValue.set(to);
    }
  }, [isInView, startWhen, motionValue, to]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest.toFixed(0)}+`;
      }
    });

    return () => unsubscribe();
  }, [springValue]);

  return (

    <span className={`countup-text`} ref={ref} >+</span>

  );
}
