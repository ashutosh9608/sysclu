import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      whileHover={{ y: -10 }}
      className="relative bg-[#03030a] border border-[#ffffff15] rounded-xl overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9dff13]/5 to-[#9dff13]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="p-6 relative z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="p-3 bg-[#9dff13]/10 rounded-xl w-fit mb-4"
        >
          <Icon className="w-8 h-8 text-[#9dff13]" />
        </motion.div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#9dff13] transition-colors">
          {title}
        </h3>
        <p className="text-[#94979e] group-hover:text-white transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;