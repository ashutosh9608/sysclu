import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';
import { Book, Video, Users, GraduationCap } from 'lucide-react';

const Learning = () => {
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
              Expand Your <span className="text-gradient">Knowledge</span>
            </h1>
            <p className="text-[#94979e] text-xl max-w-3xl mx-auto">
              Access our comprehensive learning resources and take your skills to the next level.
            </p>
          </motion.div>

          <LearningSection />
          <CourseSection />
        </div>
      </div>
    </PageTransition>
  );
};

const LearningSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: Book,
      title: 'Comprehensive Courses',
      description: 'In-depth learning materials covering various IT domains',
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for practical learning',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with peers and experts for guidance',
    },
    {
      icon: GraduationCap,
      title: 'Certifications',
      description: 'Earn certificates to showcase your expertise',
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 rounded-xl bg-[#ffffff08] hover:bg-[#ffffff12] transition-colors"
        >
          <feature.icon className="w-12 h-12 text-[#9dff13] mb-4" />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-[#94979e]">{feature.description}</p>
        </div>
      ))}
    </motion.div>
  );
};

const CourseSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const courses = [
    {
      title: 'Web Development Fundamentals',
      duration: '8 weeks',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Advanced UI/UX Design',
      duration: '10 weeks',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Data Analysis Masterclass',
      duration: '12 weeks',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-[#ffffff08] hover:bg-[#ffffff12] transition-colors"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <div className="flex justify-between text-[#94979e]">
                <span>{course.duration}</span>
                <span>{course.level}</span>
              </div>
              <button className="w-full mt-4 bg-[#9dff13] text-[#03030a] py-2 rounded-lg font-semibold hover:bg-[#8ae610] transition-colors">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Learning;