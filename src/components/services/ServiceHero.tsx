import { motion } from 'framer-motion';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
}

const ServiceHero = ({ title, subtitle }: ServiceHeroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-20"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        {title} <span className="text-gradient">Services</span>
      </h1>
      <p className="text-[#94979e] text-xl max-w-3xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default ServiceHero;