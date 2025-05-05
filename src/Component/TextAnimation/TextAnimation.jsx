import { motion } from 'framer-motion';

function TextAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.9 }}
      className=""
    >
      {children}
    </motion.div>
  );
}

export default TextAnimation;
