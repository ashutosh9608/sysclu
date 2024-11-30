import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import { Database, BarChart2, PieChart, TrendingUp, Search, Brain } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import FeatureCard from '../../components/services/FeatureCard';
import TechStack from '../../components/services/TechStack';
import BackButton from '../../components/BackButton';

const features = [
  {
    icon: Database,
    title: 'Data Collection',
    description: 'Gather and organize data from multiple sources efficiently',
  },
  {
    icon: Search,
    title: 'Data Mining',
    description: 'Extract valuable patterns and insights from large datasets',
  },
  {
    icon: BarChart2,
    title: 'Statistical Analysis',
    description: 'Advanced statistical methods to validate hypotheses',
  },
  {
    icon: PieChart,
    title: 'Data Visualization',
    description: 'Create compelling visual representations of data',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast trends and make data-driven predictions',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Implement ML models for advanced data analysis',
  },
];

const technologies = [
  'Python',
  'R',
  'Tableau',
  'Power BI',
  'TensorFlow',
  'Pandas',
  'SQL',
  'Jupyter',
];

const DataAnalysis = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <BackButton />
          <div className="bg-[#03030a]/80 backdrop-blur-md border border-[#ffffff08] rounded-xl p-8">
            <ServiceHero 
              title="Data Analysis"
              subtitle="Transform raw data into actionable insights"
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>

            <div className="space-y-12">
              <TechStack technologies={technologies} />
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
      title: 'Market Analysis',
      description: 'Comprehensive market trend analysis for e-commerce platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      category: 'Business Intelligence',
    },
    {
      title: 'Predictive Modeling',
      description: 'Sales forecasting model with 95% accuracy',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      category: 'Machine Learning',
    },
    {
      title: 'Data Visualization',
      description: 'Interactive dashboard for real-time performance monitoring',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      category: 'Analytics',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#03030a]/60 backdrop-blur-sm p-8 rounded-xl border border-[#ffffff08]"
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
            className="group relative bg-[#03030a]/40 backdrop-blur-sm rounded-xl overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

export default DataAnalysis; 