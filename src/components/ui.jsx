import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
          setTimeout(() => setDeleting(true), 1800);
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
    <span className="font-mono text-cyan-400">
      {text}
      <span className="cursor-blink text-purple-400">|</span>
    </span>
  );
}

export function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden grid-bg">
      <div className="glow-orb w-[500px] h-[500px] bg-purple-600/20 -top-32 -left-32" />
      <div className="glow-orb w-[400px] h-[400px] bg-cyan-500/15 top-1/3 -right-32" />
      <div className="glow-orb w-[350px] h-[350px] bg-pink-500/10 bottom-0 left-1/3" />
    </div>
  );
}
