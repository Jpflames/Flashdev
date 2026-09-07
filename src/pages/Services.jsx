import { motion } from 'framer-motion';
import { services } from '../data/services';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { CheckCircle } from 'lucide-react';

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

export default function Services() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-brand-light"
    >
      <section className="py-20 bg-transparent border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary-light/30 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp}>
              <SectionHeading subtitle="Capabilities" title="OUR SERVICES" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-brand-gray leading-relaxed">
              We provide end-to-end technical solutions. From architectural design to deployment and scaling, our team handles the entire technical lifecycle.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="bg-transparent border border-brand-border p-8 md:p-12 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-light border border-brand-border rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h3 className="text-3xl font-bold font-heading mb-4 text-brand-darker">{service.title}</h3>
                    <p className="text-brand-gray text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="md:w-2/3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-6">Capabilities Include</h4>
                    <motion.div 
                      variants={staggerContainer}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      {service.capabilities.map((cap, i) => (
                        <motion.div variants={fadeUp} key={i} className="flex items-center gap-3 bg-brand-light p-4 rounded-xl border border-brand-border hover:border-brand-primary/50 transition-colors">
                          <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                          <span className="font-medium text-brand-darker">{cap}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent border-t border-brand-border">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="container mx-auto px-6 lg:px-12 text-center"
        >
          <div className="max-w-3xl mx-auto bg-brand-primary rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-heading font-bold mb-6">Need a custom solution?</h2>
            <p className="text-brand-primary-light text-lg mb-10">We tailor our technical approach to your specific business requirements.</p>
            <Button to="/contact" size="lg" className="bg-brand-dark text-brand-light hover:bg-brand-primary hover:text-white border border-brand-border">
              Discuss Your Requirements &rarr;
            </Button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
