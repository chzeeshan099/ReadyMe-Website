"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const pageVariants = {
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.46,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(6px)",
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
};

const directionOffsets = {
  bottom: { x: 0, y: 34 },
  left: { x: -52, y: 0 },
  right: { x: 52, y: 0 },
  top: { x: 0, y: -34 },
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function getRevealVariants(direction, delay) {
  const offset = directionOffsets[direction] || directionOffsets.bottom;

  return {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: 0.985,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function PageTransition({ children }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div key={pathname}>{children}</div>;
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pathname}
        initial={false}
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.12,
  direction = "bottom",
}) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const variants = getRevealVariants(direction, delay);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (isMobile) {
    return (
      <motion.div
        className={className}
        initial={false}
        animate="visible"
        variants={variants}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -12% 0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className, delay = 0 }) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={isMobile ? undefined : "visible"}
      animate={isMobile ? "visible" : undefined}
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} custom={delay} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

export function AmbientMotion() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return null;
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-14 h-52 w-52 rounded-full blur-2xl sm:h-72 sm:w-72"
        animate={{
          x: [0, 36, -10, 0],
          y: [0, 18, 30, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-4rem] top-1/3 h-56 w-56 rounded-full blur-2xl sm:h-80 sm:w-80"
        animate={{
          x: [0, -30, 10, 0],
          y: [0, -16, 22, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-5rem] left-1/3 h-44 w-44 rounded-full blur-2xl sm:h-64 sm:w-64"
        animate={{
          x: [0, 18, -22, 0],
          y: [0, -24, 10, 0],
          scale: [1, 1.04, 0.92, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
