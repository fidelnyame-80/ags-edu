import { motion, useReducedMotion } from "motion/react";

const motionElements = {
  a: motion.a,
  article: motion.article,
  aside: motion.aside,
  div: motion.div,
  figure: motion.figure,
  form: motion.form,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  iframe: motion.iframe,
  img: motion.img,
  li: motion.li,
  section: motion.section,
  span: motion.span,
  blockquote: motion.blockquote,
};

const revealEase = [0.22, 1, 0.36, 1];

export default function MotionText({
  as = "div",
  amount = 0.3,
  children,
  className = "",
  delay = 0,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motionElements[as] || motion.div;
  const yOffset = prefersReducedMotion ? 0 : 18;

  return (
    <Component
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        delay: prefersReducedMotion ? 0 : delay,
        duration: prefersReducedMotion ? 0.01 : 0.64,
        ease: revealEase,
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
