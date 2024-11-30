import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';
import { Briefcase, Target, Clock, Award } from 'lucide-react';

const GetHired = () => {
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
              Find Your Next <span className="text-gradient">Opportunity</span>
            </h1>
            <p className="text-[#94979e] text-xl max-w-3xl mx-auto">
              Showcase your skills and connect with clients looking for your expertise.
            </p>
          </motion.div>

          <ProfileSection />
          <JobListings />
          <HowItWorks />
        </div>
      </div>
    </PageTransition>
  );
};

const ProfileSection = () => {
  return (
    <div className="mb-16 p-8 rounded-xl bg-[#ffffff08]">
      <h2 className="text-2xl font-bold mb-6">Complete Your Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Professional Title</label>
            <input
              type="text"
              placeholder="e.g., Full Stack Developer"
              className="w-full px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#ffffff20] focus:border-[#9dff13] focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Hourly Rate ($)</label>
            <input
              type="number"
              placeholder="e.g., 45"
              className="w-full px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#ffffff20] focus:border-[#9dff13] focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Skills</label>
          <textarea
            placeholder="List your key skills..."
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-[#ffffff08] border border-[#ffffff20] focus:border-[#9dff13] focus:outline-none"
          ></textarea>
        </div>
      </div>
      <button className="mt-6 bg-[#9dff13] text-[#03030a] px-8 py-3 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors">
        Update Profile
      </button>
    </div>
  );
};

const JobListings = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const jobs = [
    {
      title: 'Senior React Developer',
      company: 'Tech Solutions Inc.',
      type: 'Full-time',
      budget: '$60-80k/year',
      description: 'Looking for an experienced React developer to join our team...',
    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      type: 'Contract',
      budget: '$45/hour',
      description: 'Seeking a talented designer for our upcoming projects...',
    },
    {
      title: 'Data Scientist',
      company: 'Analytics Pro',
      type: 'Part-time',
      budget: '$50/hour',
      description: 'Need a data scientist for analyzing customer behavior...',
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
      <h2 className="text-3xl font-bold mb-12 text-center">Latest Opportunities</h2>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-[#ffffff08] hover:bg-[#ffffff12] transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-[#94979e]">{job.company}</p>
              </div>
              <div className="text-right">
                <span className="bg-[#9dff13] text-[#03030a] px-3 py-1 rounded-full text-sm font-medium">
                  {job.type}
                </span>
                <p className="text-[#94979e] mt-2">{job.budget}</p>
              </div>
            </div>
            <p className="text-[#94979e]">{job.description}</p>
            <button className="mt-4 bg-[#ffffff12] text-[#dde2ff] px-6 py-2 rounded-lg hover:bg-[#ffffff20] transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      icon: Briefcase,
      title: 'Create Profile',
      description: 'Set up your professional profile',
    },
    {
      icon: Target,
      title: 'Find Jobs',
      description: 'Browse relevant opportunities',
    },
    {
      icon: Clock,
      title: 'Submit Proposals',
      description: 'Apply to interesting projects',
    },
    {
      icon: Award,
      title: 'Get Hired',
      description: 'Start working and earning',
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-xl bg-[#ffffff08]"
          >
            <step.icon className="w-12 h-12 text-[#9dff13] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-[#94979e]">{step.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default GetHired;