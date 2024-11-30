import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import { Palette, Layout, Image, Brush, Target, Users } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import FeatureCard from '../../components/services/FeatureCard';
import TechStack from '../../components/services/TechStack';
import BackButton from '../../components/BackButton';

const features = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Create a unique and memorable brand identity that resonates with your audience',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Design intuitive and engaging user interfaces for web and mobile applications',
  },
  {
    icon: Image,
    title: 'Visual Design',
    description: 'Create stunning visuals that capture attention and communicate your message',
  },
  {
    icon: Brush,
    title: 'Illustration',
    description: 'Custom illustrations and graphics that bring your ideas to life',
  },
  {
    icon: Target,
    title: 'Marketing Design',
    description: 'Eye-catching marketing materials that drive engagement',
  },
  {
    icon: Users,
    title: 'Social Media',
    description: 'Engaging social media graphics that build your online presence',
  },
];

const technologies = [
  'Adobe Creative Suite',
  'Figma',
  'Sketch',
  'After Effects',
  'Illustrator',
  'Photoshop',
  'InDesign',
  'Blender',
];

const GraphicDesign = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BackButton />
          <div className="bg-[#03030a]/80 backdrop-blur-md border border-[#ffffff08] rounded-xl p-8">
            <ServiceHero 
              title="Graphic Design"
              subtitle="Creating visually stunning designs that tell your story"
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>

            <div className="space-y-12">
              <TechStack technologies={technologies} />
              <PortfolioShowcase />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const PortfolioShowcase = () => {
  const projects = [
    {
      title: 'Brand Identity',
      description: 'Complete brand identity design including logo, color palette, and guidelines',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
      category: 'Branding',
    },
    {
      title: 'UI/UX Design',
      description: 'Modern and intuitive user interface design for mobile applications',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
      category: 'UI/UX',
    },
    {
      title: 'Marketing Campaign',
      description: 'Comprehensive visual design for multi-channel marketing campaigns',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
      category: 'Marketing',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-[#ffffff08] rounded-xl overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

export default GraphicDesign;