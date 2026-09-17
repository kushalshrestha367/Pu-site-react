import { motion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d * 0.1, ease: 'easeOut' },
  }),
};

export const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  show: (d = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.6, delay: d * 0.1 } }),
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  show: (d = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.6, delay: d * 0.1 } }),
};

export default function Reveal({
  children, variant = 'up', delay = 0, className = '', amount = 0.2, as = 'div',
}) {
  const map = { up: fadeUp, right: fadeRight, left: fadeLeft };
  const v = map[variant] || fadeUp;
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={v}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}