import { motion } from 'framer-motion';

interface TechStackProps {
  technologies: string[];
}

const TechStack = ({ technologies }: TechStackProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mb-20"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Technology Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg bg-[#ffffff08] text-center hover:bg-[#ffffff12] transition-colors"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;