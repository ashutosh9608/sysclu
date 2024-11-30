import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-[#03030a] border-t border-[#ffffff08] mt-auto relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#9dff13] rounded-full blur-[128px] opacity-10 -top-48 -left-48 animate-blob"></div>
        <div className="absolute w-96 h-96 bg-[#9dff13] rounded-full blur-[128px] opacity-10 -bottom-48 -right-48 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div variants={item}>
            <Link to="/" className="text-2xl font-bold text-gradient mb-4 inline-block">
              SysClu
            </Link>
            <p className="text-[#94979e] mb-4">
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <SocialIcon 
                Icon={Facebook} 
                href="https://www.facebook.com/profile.php?id=61569718163716&mibextid=ZbWKwL" 
              />
              <SocialIcon 
                Icon={Twitter} 
                href="https://x.com/syscluinfo?t=IetImTeD-juW1BvMjKwVIQ&s=09" 
              />
              <SocialIcon 
                Icon={Instagram} 
                href="https://www.instagram.com/sysclu/profilecard/?igsh=OWk2cDhhOTNsdTBk" 
              />
              <SocialIcon 
                Icon={Linkedin} 
                href="https://www.linkedin.com/company/105066538/admin/dashboard/" 
              />
              <SocialIcon 
                Icon={Youtube} 
                href="https://youtube.com/@sysclu?si=UAT2V5hkDAgOm6FZ" 
              />
            </div>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink text="Web Development" to="/services/web-development" />
              <FooterLink text="Graphic Design" to="/services/graphic-design" />
              <FooterLink text="Data Analysis" to="/services/data-analysis" />
              <FooterLink text="Social Media" to="/services/social-media" />
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink text="About Us" to="/about" />
              <FooterLink text="Contact" to="/contact" />
              <FooterLink text="Privacy Policy" to="/privacy-policy" />
              <FooterLink text="Terms of Service" to="/terms-of-service" />
            </ul>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-[#94979e]">
              <li>Buxar</li>
              <li>Bihar, 802101</li>
              <li>
                <a 
                  href="mailto:contact@sysclu.com" 
                  className="hover:text-[#9dff13] transition-colors"
                >
                  contact@sysclu.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+918252173458" 
                  className="hover:text-[#9dff13] transition-colors"
                >
                  +91 8252173458
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="border-t border-[#ffffff08] pt-8 text-center text-[#94979e]"
        >
          <p>&copy; {new Date().getFullYear()} SysClu. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

const SocialIcon = ({ Icon, href }: { Icon: any; href: string }) => (
  <motion.a
    href={href}
    className="w-10 h-10 rounded-full bg-[#ffffff08] flex items-center justify-center hover:bg-[#ffffff12] transition-colors"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

const FooterLink = ({ text, to = "#" }: { text: string; to?: string }) => (
  <li>
    <Link
      to={to}
      className="text-[#94979e] hover:text-[#9dff13] transition-colors"
    >
      {text}
    </Link>
  </li>
);

export default Footer;