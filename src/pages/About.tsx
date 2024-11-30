import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PageTransition from '../components/PageTransition';
import { Users, Target, Award, Rocket } from 'lucide-react';
import ceoImage from '../assets/images/team/ceo.jpg';
import techLeadImage from '../assets/images/team/tech-lead.jpg';
import creativeLeadImage from '../assets/images/team/creative-lead.jpg';

const About = () => {
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
              About <span className="text-gradient">SysClu</span>
            </h1>
            <p className="text-[#94979e] text-xl max-w-3xl mx-auto">
              We are a team of passionate technologists dedicated to transforming businesses
              through innovative digital solutions.
            </p>
          </motion.div>

          <StatsSection />
          <TeamSection />
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

const TeamSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const team = [
    {
      name: 'Avinash Kumar',
      role: 'CEO & Founder',
      image: ceoImage,
    },
    {
      name: 'Ashutosh Kumar',
      role: 'Technical Director',
      image: techLeadImage,
    },
    {
      name: 'Anshuman Mishra',
      role: 'Creative Lead',
      image: creativeLeadImage,
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
      <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
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
            className="relative bg-[#03030a] border border-[#ffffff15] rounded-xl overflow-hidden group flex flex-col items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9dff13]/5 to-[#9dff13]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-6 relative z-10 flex flex-col items-center w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="relative w-48 h-48 rounded-full overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 border-2 border-[#9dff13] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-1 mt-4 text-white group-hover:text-[#9dff13] transition-colors duration-300 text-center"
              >
                {member.name}
              </motion.h3>
              <motion.p 
                className="text-[#94979e] group-hover:text-white transition-colors duration-300 text-center"
              >
                {member.role}
              </motion.p>
            </div>
          </motion.div>
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