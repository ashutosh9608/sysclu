import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8"
          >
            Privacy Policy
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-[#94979e]"
          >
            <section>
              <h2 className="text-2xl font-semibold text-[#dde2ff] mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Communication preferences</li>
                <li>Service usage information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#dde2ff] mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#dde2ff] mb-4">3. Information Sharing</h2>
              <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisers</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#dde2ff] mb-4">4. Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#dde2ff] mb-4">5. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">Email: privacy@sysclu.com</p>
            </section>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;