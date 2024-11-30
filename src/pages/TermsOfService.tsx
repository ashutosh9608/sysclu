import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const TermsOfService = () => {
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
            Terms of Service
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-[#94979e]"
          >
            <section>
              <h2 className="text-2xl font-semibold text-[#dde2ff] mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#dde2ff] mb-4">2. Use License</h2>
              <p>Permission is granted to temporarily access our services for personal, non-commercial use only. This license does not include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Modifying or copying our materials</li>
                <li>Using materials for commercial purposes</li>
                <li>Attempting to reverse engineer any software</li>
                <li>Removing any copyright or proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#dde2ff] mb-4">3. Service Modifications</h2>
              <p>We reserve the right to modify or discontinue our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#dde2ff] mb-4">4. Limitation of Liability</h2>
              <p>We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#dde2ff] mb-4">5. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
            </section>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TermsOfService;