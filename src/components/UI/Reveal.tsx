'use client';

import { motion, type MotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
} & Omit<MotionProps, 'children'>;

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  once = true,
  ...motionProps
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
