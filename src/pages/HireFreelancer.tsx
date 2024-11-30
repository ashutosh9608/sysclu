import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';
import { Search, Star, Shield, DollarSign } from 'lucide-react';

const HireFreelancer = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find the Perfect <span className="text-gradient">Freelancer</span>
            </h1>
            <p className="text-[#94979e] text-xl max-w-3xl mx-auto">
              Connect with skilled professionals for your next project.
            </p>
          </motion.div>

          <SearchSection />
          <FreelancerGrid />
          <WhyChooseUs />
        </div>
      </div>
    </PageTransition>
  );
};

const SearchSection = () => {
  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search skills or services..."
            className="w-full px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#ffffff20] focus:border-[#9dff13] focus:outline-none"
          />
        </div>
        <button className="bg-[#9dff13] text-[#03030a] px-8 py-3 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors">
          Search Freelancers
        </button>
      </div>
    </div>
  );
};

const FreelancerGrid = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const freelancers = [
    {
      name: 'Alex Johnson',
      role: 'Full Stack Developer',
      rating: 4.9,
      hourlyRate: '$45',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      rating: 4.8,
      hourlyRate: '$40',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Mike Wilson',
      role: 'Data Analyst',
      rating: 4.7,
      hourlyRate: '$35',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
    >
      {freelancers.map((freelancer, index) => (
        <div
          key={index}
          className="p-6 rounded-xl bg-[#ffffff08] hover:bg-[#ffffff12] transition-colors"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={freelancer.image}
              alt={freelancer.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{freelancer.name}</h3>
              <p className="text-[#94979e]">{freelancer.role}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-[#9dff13]" />
              <span>{freelancer.rating}</span>
            </div>
            <div className="text-[#94979e]">{freelancer.hourlyRate}/hr</div>
          </div>
          <button className="w-full bg-[#9dff13] text-[#03030a] py-2 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors">
            View Profile
          </button>
        </div>
      ))}
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: Search,
      title: 'Easy to Find',
      description: 'Quick and simple process to find the right talent',
    },
    {
      icon: Star,
      title: 'Top Talent',
      description: 'Access to highly skilled and verified professionals',
    },
    {
      icon: Shield,
      title: 'Secure Hiring',
      description: 'Protected payments and confidential information',
    },
    {
      icon: DollarSign,
      title: 'Competitive Rates',
      description: 'Find professionals within your budget',
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-xl bg-[#ffffff08]"
          >
            <feature.icon className="w-12 h-12 text-[#9dff13] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-[#94979e]">{feature.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HireFreelancer;