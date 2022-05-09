import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AnimateInView = ({ hidden, visible, width, duration = 2, children }) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }

    return () => {
      controls.stop();
    };
  }, [controls, inView]);

  const variants = {
    hidden: hidden || { scale: 0 },
    visible: visible || {
      scale: 1,
      transition: { duration: duration },
    },
  };

  return (
    <motion.div
      style={{ width: width || "fit-content" }}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView;
