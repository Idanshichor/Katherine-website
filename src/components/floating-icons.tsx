"use client";
import { motion, type TargetAndTransition, type Transition } from "framer-motion";
import { Lightbulb, Brain, Sparkles, Target, Compass, Zap, Rocket, PenTool } from "lucide-react";

function FloatingIcon({ children, className, animate, transition }: { children: React.ReactNode; className: string; animate: TargetAndTransition; transition: Transition }) {
  return (
    <motion.div animate={animate} transition={transition} className={`absolute pointer-events-none ${className}`}>
      {children}
    </motion.div>
  );
}

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingIcon
        className="top-[8%] left-[6%] text-[var(--color-brand-pink)]"
        animate={{ y: [0, -35, 0], rotate: [0, 12, -12, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      >
        <Brain size={140} strokeWidth={0.8} className="opacity-25" />
      </FloatingIcon>

      <FloatingIcon
        className="top-[15%] right-[8%] text-[var(--color-brand-purple)]"
        animate={{ y: [0, 45, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 2 }}
      >
        <Lightbulb size={110} strokeWidth={0.8} className="opacity-20" />
      </FloatingIcon>

      <FloatingIcon
        className="bottom-[20%] left-[15%] text-[var(--color-brand-purple)]"
        animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut", delay: 4 }}
      >
        <Sparkles size={90} strokeWidth={0.8} className="opacity-20" />
      </FloatingIcon>

      <FloatingIcon
        className="top-[45%] right-[5%] text-[var(--color-brand-pink)]"
        animate={{ y: [0, 30, 0], rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 6 }}
      >
        <Target size={100} strokeWidth={0.8} className="opacity-15" />
      </FloatingIcon>

      <FloatingIcon
        className="bottom-[35%] right-[20%] text-[var(--color-brand-pink)]"
        animate={{ y: [0, -40, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut", delay: 3 }}
      >
        <Compass size={80} strokeWidth={0.8} className="opacity-15" />
      </FloatingIcon>

      {/* Color blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute top-[5%] right-[20%] w-72 h-72 rounded-full bg-[var(--color-brand-pink)] opacity-[0.06] blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[10%] left-[10%] w-96 h-96 rounded-full bg-[var(--color-brand-purple)] opacity-[0.05] blur-3xl"
      />
    </div>
  );
}

export function FloatingAccents() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingIcon
        className="top-[10%] right-[10%] text-[var(--color-brand-pink)]"
        animate={{ y: [0, -20, 0], rotate: [0, 8, -8, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      >
        <Zap size={70} strokeWidth={0.8} className="opacity-15" />
      </FloatingIcon>
      <FloatingIcon
        className="bottom-[15%] left-[8%] text-[var(--color-brand-purple)]"
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut", delay: 3 }}
      >
        <Rocket size={80} strokeWidth={0.8} className="opacity-[0.12]" />
      </FloatingIcon>
      <FloatingIcon
        className="top-[50%] left-[85%] text-[var(--color-brand-pink)]"
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 7 }}
      >
        <PenTool size={60} strokeWidth={0.8} className="opacity-[0.12]" />
      </FloatingIcon>
    </div>
  );
}
