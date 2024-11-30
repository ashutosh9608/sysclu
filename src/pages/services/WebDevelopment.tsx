import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import { Code, Globe, Smartphone, Database, Gauge, Lock, FileSearch, Pencil, Laptop, TestTube, Rocket } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import FeatureCard from '../../components/services/FeatureCard';
import TechStack from '../../components/services/TechStack';
import BackButton from '../../components/BackButton';
import { useState } from 'react';

const features = [
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored solutions built from scratch to meet your specific needs',
  },
  {
    icon: Globe,
    title: 'Responsive Design',
    description: 'Websites that work flawlessly across all devices and screen sizes',
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description: 'Web apps that offer native-like experience on mobile devices',
  },
  {
    icon: Database,
    title: 'Database Integration',
    description: 'Robust data management solutions for your applications',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Lightning-fast loading speeds and optimal user experience',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Advanced security measures to protect your web applications',
  },
];

const technologies = [
  'React', 'Node.js', 'TypeScript',
  'Next.js', 'MongoDB', 'PostgreSQL',
  'AWS', 'Docker', 'GraphQL'
];

const WebDevelopment = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BackButton />
          <div className="bg-[#03030a]/80 backdrop-blur-md border border-[#ffffff08] rounded-xl p-6 mt-24">
            <ServiceHero 
              title="Web Development"
              subtitle="Creating powerful, scalable, and beautiful web applications"
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

            <div className="space-y-8">
              <TechStack technologies={technologies} />
              <ProjectShowcase />
              <ProcessTimeline />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with advanced features',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=800&q=80',
      category: 'Web App',
    },
    {
      title: 'CMS Dashboard',
      description: 'Custom content management system with real-time updates',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      category: 'Dashboard',
    },
    {
      title: 'SaaS Application',
      description: 'Cloud-based software solution for business management',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      category: 'SaaS',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#03030a]/60 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-[#03030a]/40 backdrop-blur-sm rounded-xl overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#9dff13] text-sm font-medium mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#94979e] text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ProcessTimeline = () => {
  const steps = [
    {
      phase: 'Planning',
      description: 'Project scope and requirements analysis',
      icon: FileSearch,
      details: {
        title: 'Discovery & Planning Phase',
        points: [
          'Requirement gathering and analysis',
          'Project scope definition',
          'Technology stack selection',
          'Timeline and milestone planning',
          'Resource allocation'
        ],
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80'
      }
    },
    {
      phase: 'Design',
      description: 'UI/UX design and prototyping',
      icon: Pencil,
      details: {
        title: 'Design & Prototyping',
        points: [
          'Wireframe creation',
          'UI/UX design',
          'Interactive prototypes',
          'Design system development',
          'Client feedback integration'
        ],
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80'
      }
    },
    {
      phase: 'Development',
      description: 'Frontend and backend implementation',
      icon: Laptop,
      details: {
        title: 'Development & Implementation',
        points: [
          'Frontend development',
          'Backend API creation',
          'Database architecture',
          'Integration of features',
          'Code review and optimization'
        ],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
      }
    },
    {
      phase: 'Testing',
      description: 'Quality assurance and bug fixing',
      icon: TestTube,
      details: {
        title: 'Testing & Quality Assurance',
        points: [
          'Unit testing',
          'Integration testing',
          'Performance optimization',
          'Security testing',
          'Cross-browser compatibility'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
      }
    },
    {
      phase: 'Deployment',
      description: 'Launch and maintenance',
      icon: Rocket,
      details: {
        title: 'Deployment & Maintenance',
        points: [
          'Server configuration',
          'Deployment automation',
          'Performance monitoring',
          'Regular updates',
          'Ongoing support'
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
      }
    },
  ];

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const isMobile = window.innerWidth < 768;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#03030a]/60 backdrop-blur-sm p-4 md:p-8 rounded-xl border border-[#ffffff08] mb-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-16 text-center">Our Development Process</h2>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Main Timeline Line - Hidden on mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#9dff13]/20 via-[#9dff13]/10 to-transparent hidden md:block" />

        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`
              mb-12 last:mb-0 relative 
              ${isMobile ? 'pl-4' : index % 2 === 0 ? 'pr-1/2' : 'pl-1/2'}
            `}
          >
            <motion.div
              initial={{ opacity: 0, x: isMobile ? -20 : (index % 2 === 0 ? -50 : 50) }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
              onMouseEnter={() => !isMobile && setHoveredStep(index)}
              onMouseLeave={() => !isMobile && setHoveredStep(null)}
              onClick={() => isMobile && setHoveredStep(hoveredStep === index ? null : index)}
            >
              {/* Timeline Node */}
              <div className={`
                absolute top-0 
                ${isMobile ? 'left-0 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'} 
                -translate-y-1/2
              `}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 md:w-12 md:h-12 bg-[#9dff13]/10 rounded-full border-2 border-[#9dff13] flex items-center justify-center"
                >
                  <step.icon className="w-4 h-4 md:w-6 md:h-6 text-[#9dff13]" />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`
                bg-[#ffffff08] rounded-xl p-4 md:p-6
                ${isMobile ? 'ml-6' : index % 2 === 0 ? 'mr-12' : 'ml-12'}
                hover:bg-[#ffffff10] transition-colors duration-300
                cursor-pointer md:cursor-default
              `}>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.phase}</h3>
                <p className="text-sm md:text-base text-[#94979e]">{step.description}</p>

                {/* Detailed Info - Shows on Hover/Click */}
                <AnimatePresence>
                  {hoveredStep === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="pt-4 border-t border-[#ffffff15]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative h-24 md:h-32 rounded-lg overflow-hidden">
                            <img
                              src={step.details.image}
                              alt={step.phase}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#03030a] to-transparent" />
                          </div>
                          <ul className="space-y-2">
                            {step.details.points.map((point, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-2 text-[#94979e] text-xs md:text-sm"
                              >
                                <span className="w-1 h-1 bg-[#9dff13] rounded-full flex-shrink-0" />
                                {point}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WebDevelopment;