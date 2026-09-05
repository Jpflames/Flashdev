import { motion } from 'framer-motion';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { Mail, MapPin, Phone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Contact form functionality will be connected to backend shortly.');
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-brand-light"
    >
      <section className="py-20 bg-white border-b border-brand-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp}>
              <SectionHeading subtitle="Get in touch" title="LET'S BUILD SOMETHING" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-brand-gray leading-relaxed">
              Whether you need a custom application, a digital platform, or want to automate your business processes, we are ready to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              <div>
                <motion.h3 variants={fadeUp} className="text-2xl font-bold font-heading mb-6 text-brand-darker">Contact Information</motion.h3>
                <motion.div variants={fadeUp} className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-light border border-brand-border rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-darker mb-1 uppercase tracking-wider">Email</p>
                      <a href="mailto:flashdevtechnologies@gmail.com" className="text-brand-gray hover:text-brand-primary transition-colors text-lg">
                        flashdevtechnologies@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-light border border-brand-border rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-darker mb-1 uppercase tracking-wider">Location</p>
                      <p className="text-brand-gray text-lg">Available Worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-light border border-brand-border rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-darker mb-1 uppercase tracking-wider">Phone</p>
                      <p className="text-brand-gray text-lg">Available upon request</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white border border-brand-border p-8 md:p-12 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-bold font-heading mb-8 text-brand-darker">Send an Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-darker">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-brand-light border border-brand-border rounded-xl p-4 text-brand-dark focus:border-brand-primary focus:outline-none transition-colors" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-darker">Company</label>
                    <input 
                      type="text" 
                      className="w-full bg-brand-light border border-brand-border rounded-xl p-4 text-brand-dark focus:border-brand-primary focus:outline-none transition-colors" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-darker">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-brand-light border border-brand-border rounded-xl p-4 text-brand-dark focus:border-brand-primary focus:outline-none transition-colors" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-darker">Project Type</label>
                  <select className="w-full bg-brand-light border border-brand-border rounded-xl p-4 text-brand-dark focus:border-brand-primary focus:outline-none transition-colors appearance-none">
                    <option value="">Select a project type</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="saas">SaaS Platform</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-darker">Project Details</label>
                  <textarea 
                    rows={5} 
                    className="w-full bg-brand-light border border-brand-border rounded-xl p-4 text-brand-dark focus:border-brand-primary focus:outline-none transition-colors resize-none" 
                    placeholder="Tell us about your project, goals, and timeline..."
                    required 
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
