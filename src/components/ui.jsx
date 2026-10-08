import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";

export default function TypingRoles({ roles }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index, roles]);

  return (
    <span className="font-mono text-cyan-400 font-medium">
      {text}
      <span className="cursor-blink text-purple-400">|</span>
    </span>
  );
}

export function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 origin-left z-50 pointer-events-none shadow-sm shadow-purple-500/50"
      style={{ scaleX }}
    />
  );
}

export function MouseSpotlight() {
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(650px circle at ${coords.x}px ${coords.y}px, rgba(168, 85, 247, 0.08), transparent 70%)`,
      }}
    />
  );
}

export function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const match = value.match(/([\d.]+)(.*)/);
  const targetNum = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const duration = 1600;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * targetNum;

      setDisplayValue(isDecimal ? current.toFixed(2) : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetNum);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetNum, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? Number(displayValue).toFixed(2) : displayValue}
      {suffix}
    </span>
  );
}

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden grid-bg pointer-events-none">
      <div className="glow-orb w-[450px] h-[450px] bg-purple-600/20 -top-24 -left-24" />
      <div className="glow-orb w-[380px] h-[380px] bg-cyan-500/15 top-1/3 -right-24" />
      <div className="glow-orb w-[320px] h-[320px] bg-pink-500/10 bottom-10 left-1/4" />
    </div>
  );
}
