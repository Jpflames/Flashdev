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

export default function About() {
  const team = [
    { name: 'Israel JohnPaul', role: 'Founder & CEO' },
    { name: 'Barka David', role: 'Co-Founder' },
    { name: 'Abel Malachi', role: 'HOD Tech/Innovation' },
    { name: 'Nankpang S.', role: 'Manager' },
    { name: 'Emmanuella E.', role: 'Operations & Comms' },
    { name: 'Ibukunoluwa M.', role: 'Sales Rep' },
    { name: 'Victoria A.', role: 'Admin' },
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-brand-light"
    >
      {/* Story Section */}
      <section className="py-20 md:py-32 bg-transparent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-primary-light/30 to-white pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.div variants={fadeUp}>
              <SectionHeading subtitle="Who We Are" title="OUR STORY" />
            </motion.div>
            <div className="space-y-6 text-xl text-brand-gray leading-relaxed">
              <motion.p variants={fadeUp}>
                Flashdev Technologies was founded on a simple principle: technology should solve problems, not create them. As businesses face increasingly complex operational challenges, the gap between 'having software' and 'having effective software' has never been wider.
              </motion.p>
              <motion.p variants={fadeUp}>
                We operate as a strategic technical partner for organizations looking to scale, automate, or digitize. By combining rigorous engineering standards with intuitive design, we build platforms that businesses can rely on.
              </motion.p>
              <motion.p variants={fadeUp}>
                Our work spans from building custom mobile applications and SaaS platforms, to developing complex enterprise systems for businesses across various sectors.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-brand-light border-y border-brand-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <SectionHeading subtitle="Leadership" title="THE TEAM" />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-transparent border border-brand-border p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl mb-6 flex items-center justify-center text-brand-primary font-bold text-xl uppercase">
                  {member.name.substring(0, 2)}
                </div>
                <h4 className="text-lg font-bold text-brand-darker mb-1 font-heading">{member.name}</h4>
                <p className="text-xs text-brand-primary font-bold uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="container mx-auto px-6 lg:px-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-brand-darker">Ready to build something?</h2>
          <Button to="/contact" size="lg">Contact Our Team</Button>
        </motion.div>
      </section>
    </motion.div>
  );
}
