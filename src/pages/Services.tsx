import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Code, Palette, Database, Share2 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceType {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  path: string;
  image: string;
}

interface ServiceCardProps extends ServiceType {
  index: number;
}

const Services = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20 bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-[#94979e] text-xl max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business grow and succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          <ProcessSection />
        </div>
      </div>
    </PageTransition>
  );
};

const services: ServiceType[] = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
    features: ['Responsive Design', 'E-commerce Solutions', 'Progressive Web Apps', 'Custom CMS Development'],
    path: '/services/web-development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative designs that capture attention and communicate your message.',
    features: ['Brand Identity', 'UI/UX Design', 'Marketing Materials', 'Social Media Graphics'],
    path: '/services/graphic-design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Database,
    title: 'Data Analysis',
    description: 'Transform your data into actionable insights for better decision making.',
    features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Statistical Analysis'],
    path: '/services/data-analysis',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Share2,
    title: 'Social Media',
    description: 'Build and grow your brand presence across social platforms.',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting'],
    path: '/services/social-media',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
  },
];

const ServiceCard = ({ icon: Icon, title, description, features, path, image, index }: ServiceCardProps) => {
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
      className="group relative bg-[#03030a]/80 backdrop-blur-sm border border-[#ffffff15] rounded-xl overflow-hidden cursor-pointer"
    >
      <Link to={path} className="block">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-10 transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#03030a] via-[#03030a]/90 to-[#03030a]/70" />
        </div>

        {/* Content */}
        <div className="relative p-8">
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              className="p-3 bg-[#9dff13]/10 rounded-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Icon className="w-8 h-8 text-[#9dff13]" />
            </motion.div>
            <h3 className="text-2xl font-bold group-hover:text-[#9dff13] transition-colors duration-300">
              {title}
            </h3>
          </div>

          <p className="text-[#94979e] mb-8 text-lg group-hover:text-white transition-colors duration-300">
            {description}
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-[#dde2ff]"
              >
                <span className="w-2 h-2 bg-[#9dff13] rounded-full group-hover:scale-150 transition-transform duration-300" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="inline-flex items-center gap-2 text-[#9dff13] font-semibold"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Learn More
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

const ProcessSection = () => {
  const steps = [
    { number: '01', title: 'Discovery', description: 'Understanding your needs and objectives' },
    { number: '02', title: 'Strategy', description: 'Developing a tailored solution' },
    { number: '03', title: 'Implementation', description: 'Bringing your vision to life' },
    { number: '04', title: 'Support', description: 'Ongoing maintenance and optimization' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="text-center p-6 rounded-xl bg-[#ffffff08] hover:bg-[#ffffff12] transition-all duration-300"
          >
            <motion.div 
              className="text-4xl font-bold text-[#9dff13] mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {step.number}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-[#94979e]">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;