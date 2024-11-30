import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import { Share2, Users, BarChart, MessageCircle, Target, Calendar } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import FeatureCard from '../../components/services/FeatureCard';
import TechStack from '../../components/services/TechStack';
import BackButton from '../../components/BackButton';

const features = [
  {
    icon: Share2,
    title: 'Content Strategy',
    description: 'Develop engaging content strategies that resonate with your audience',
  },
  {
    icon: Users,
    title: 'Community Management',
    description: 'Build and nurture your online community across platforms',
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'Track and analyze social media performance metrics',
  },
  {
    icon: MessageCircle,
    title: 'Engagement',
    description: 'Increase audience interaction and brand loyalty',
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    description: 'Strategic paid social campaigns that drive results',
  },
  {
    icon: Calendar,
    title: 'Content Calendar',
    description: 'Organized content planning and scheduling',
  },
];

const platforms = [
  'Instagram',
  'Facebook',
  'Twitter',
  'LinkedIn',
  'TikTok',
  'Pinterest',
  'YouTube',
  'Buffer',
];

const SocialMedia = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BackButton />
          <div className="bg-[#03030a]/80 backdrop-blur-md border border-[#ffffff08] rounded-xl p-8">
            <ServiceHero 
              title="Social Media Management"
              subtitle="Build your brand's presence across social platforms"
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>

            <div className="space-y-12">
              <TechStack technologies={platforms} />
              <CaseStudies />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

const CaseStudies = () => {
  const studies = [
    {
      title: 'Brand Growth Campaign',
      description: 'Increased social media following by 200% in 3 months',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
      category: 'Social Growth',
    },
    {
      title: 'Influencer Marketing',
      description: 'Successful collaboration with industry influencers',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80',
      category: 'Marketing',
    },
    {
      title: 'Content Strategy',
      description: 'Developed comprehensive content strategy for brand awareness',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
      category: 'Strategy',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#03030a]/80 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {studies.map((study, index) => (
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
                src={study.image}
                alt={study.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#9dff13] text-sm font-medium mb-2 block">
                  {study.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-[#94979e] text-sm">
                  {study.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialMedia; 