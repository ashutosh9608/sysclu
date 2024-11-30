import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';
import { ArrowRight, Code, Palette, Database, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <HeroSection />
          <ServicesSection />
          <FeaturesSection />
          <CTASection />
        </div>
      </div>
    </PageTransition>
  );
};

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-20 bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Transform Your <span className="text-gradient">Digital Presence</span>
      </h1>
      <p className="text-[#94979e] text-xl max-w-3xl mx-auto mb-8">
        We create innovative digital solutions that help businesses thrive in the modern world.
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#9dff13] text-[#03030a] px-8 py-3 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors"
        >
          Get Started
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications',
      path: '/services/web-development',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Stunning visual designs and branding',
      path: '/services/graphic-design',
    },
    {
      icon: Database,
      title: 'Data Analysis',
      description: 'Transform data into insights',
      path: '/services/data-analysis',
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Engage and grow your audience',
      path: '/services/social-media',
    },
  ];

  return (
    <div className="mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Our Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
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
            <Link to={service.path}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9dff13]/5 to-[#9dff13]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6 relative z-10">
                <service.icon className="w-12 h-12 text-[#9dff13] mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#9dff13] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#94979e] group-hover:text-white transition-colors">
                  {service.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-20 bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
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
                <feature.icon className="w-8 h-8 text-[#9dff13]" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#9dff13] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#94979e] group-hover:text-white transition-colors">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const CTASection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center bg-[#03030a]/80 backdrop-blur-sm p-12 rounded-xl border border-[#ffffff08]"
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-[#94979e] text-xl mb-8">
        Let's transform your ideas into reality.
      </p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#9dff13] text-[#03030a] px-8 py-3 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors"
        >
          Contact Us
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </motion.div>
  );
};

const features = [
  {
    icon: Code,
    title: 'Innovation',
    description: 'Cutting-edge solutions for modern challenges',
  },
  {
    icon: Palette,
    title: 'Quality',
    description: 'Exceptional results that exceed expectations',
  },
  {
    icon: Share2,
    title: 'Support',
    description: 'Dedicated assistance every step of the way',
  },
];

export default Home;