import { motion } from 'framer-motion';

function DivAnimation({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className=""
    >
      {children}
    </motion.div>
  );
}

export default DivAnimation;
