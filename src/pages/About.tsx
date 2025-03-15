import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';
import { Users, Target, Award, Rocket, Code, Palette, BarChart3, Share2 } from 'lucide-react';

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20 bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">SysClu</span>
            </h1>
            <p className="text-[#94979e] text-xl max-w-3xl mx-auto">
              We are a team of passionate technologists dedicated to transforming businesses
              through innovative digital solutions.
            </p>
          </motion.div>

          <StatsSection />
          <ServicesSection />
          <ValuesSection />
        </div>
      </div>
    </PageTransition>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { number: '100+', label: 'Clients Served' },
    { number: '150+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h3 className="text-4xl font-bold text-[#9dff13] mb-2">{stat.number}</h3>
          <p className="text-[#94979e]">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'We create custom websites and web applications tailored to your business needs. Our team uses the latest technologies to build responsive, user-friendly, and secure web solutions that help you achieve your business goals.',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Our graphic design services include branding, logo design, marketing materials, and more. We work closely with you to create visually appealing designs that effectively communicate your brand message and captivate your audience.',
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'We provide data analysis services to help you make informed business decisions. Our team of experts uses advanced analytical tools and techniques to extract valuable insights from your data, enabling you to optimize your operations and drive growth.',
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Our social media management services help you build a strong online presence and engage with your audience. We create and execute effective social media strategies that increase your brand visibility, drive traffic, and boost conversions.',
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="text-center p-6 rounded-xl bg-[#ffffff08] hover:bg-[#ffffff12] transition-all duration-300"
          >
            <service.icon className="w-12 h-12 text-[#9dff13] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-[#94979e]">{service.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ValuesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together to achieve excellence',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Delivering exceptional results every time',
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'Continuously evolving and improving',
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="text-center p-6 rounded-xl bg-[#ffffff08] hover:bg-[#ffffff12] transition-all duration-300"
          >
            <value.icon className="w-12 h-12 text-[#9dff13] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-[#94979e]">{value.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default About;