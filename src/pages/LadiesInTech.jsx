import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

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

export default function LadiesInTech() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-brand-light"
    >
      <section className="py-20 bg-transparent border-b border-brand-border overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent -z-10"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp}>
              <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full font-bold tracking-wider text-xs uppercase mb-6 border border-brand-primary/20">
                Community Initiative
              </span>
            </motion.div>
            <motion.div variants={fadeUp}>
              <SectionHeading title="LADIES IN TECH" className="mb-8" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-brand-gray leading-relaxed">
              We believe the future of technology must be inclusive. Our Ladies in Tech initiative is designed to empower, educate, and elevate women in the tech industry.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-6 lg:px-12">
           <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-brand-border bg-brand-light flex items-center justify-center relative"
          >
             <img src="/images/ladies_in_tech.jpg" alt="Ladies in Tech" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay pointer-events-none"></div>
           </motion.div>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h3 variants={fadeUp} className="text-3xl font-bold font-heading text-brand-darker">The Mission</motion.h3>
              <motion.p variants={fadeUp} className="text-lg text-brand-gray leading-relaxed">
                Despite rapid growth in the tech sector, women remain significantly underrepresented in engineering, product, and technical leadership roles. 
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-brand-gray leading-relaxed">
                Flashdev Technologies launched this initiative to actively close that gap by providing mentorship, resources, and real-world project experience to aspiring female technologists.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-brand-light p-8 md:p-12 rounded-3xl border border-brand-border shadow-sm space-y-8"
            >
              <motion.h3 variants={fadeUp} className="text-2xl font-bold font-heading text-brand-darker">What We Offer</motion.h3>
              <ul className="space-y-6">
                <motion.li variants={fadeUp} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-brand-darker mb-1">Technical Mentorship</h4>
                    <p className="text-brand-gray">Direct guidance from senior engineers on real-world projects.</p>
                  </div>
                </motion.li>
                <motion.li variants={fadeUp} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-brand-darker mb-1">Skill Development</h4>
                    <p className="text-brand-gray">Workshops focusing on modern tech stacks (React, Node, Cloud).</p>
                  </div>
                </motion.li>
                <motion.li variants={fadeUp} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-brand-darker mb-1">Career Pathways</h4>
                    <p className="text-brand-gray">Interview prep, portfolio building, and potential hiring opportunities.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-primary text-white border-t border-brand-border">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="container mx-auto px-6 lg:px-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Join the Initiative</h2>
            <p className="text-brand-primary-light text-lg mb-10 leading-relaxed">
              Whether you are just starting your journey in tech or looking to level up your skills, we want to hear from you.
            </p>
            <Button to="/contact" size="lg" className="bg-brand-dark text-brand-light border border-brand-border hover:bg-brand-primary hover:text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Apply or Partner With Us
            </Button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
