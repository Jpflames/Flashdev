import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { ArrowLeft } from 'lucide-react';

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

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
        <Button to="/portfolio">Back to Portfolio</Button>
      </div>
    );
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-brand-light"
    >
      <section className="py-16 md:py-24 bg-transparent border-b border-brand-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp}>
              <Link to="/portfolio" className="inline-flex items-center text-brand-gray hover:text-brand-primary mb-8 transition-colors font-medium">
                <ArrowLeft size={16} className="mr-2" />
                Back to Portfolio
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <SectionHeading subtitle={project.category} title={project.title} className="mb-8" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-brand-gray leading-relaxed">
              {project.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-brand-light py-12 border-b border-brand-border">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-12"
        >
          <div className="aspect-video bg-brand-light border border-brand-border rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl">
             {project.id === 'food-xpress' && (
                <img src="/images/food_xpress.jpg" alt="Food Xpress" className="w-full h-full object-cover" />
             )}
             {project.id === 'smartfix-9ja' && (
                <img src="/images/smartfix.jpg" alt="Smartfix 9ja" className="w-full h-full object-cover" />
             )}
             {project.id !== 'food-xpress' && project.id !== 'smartfix-9ja' && (
                <span className="text-brand-gray text-xl font-bold uppercase tracking-widest">{project.title} Visuals</span>
             )}
          </div>
        </motion.div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-2 space-y-12"
            >
              <motion.div variants={fadeUp}>
                <h3 className="text-2xl font-bold font-heading mb-6 text-brand-darker">The Challenge</h3>
                <p className="text-lg text-brand-gray leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h3 className="text-2xl font-bold font-heading mb-6 text-brand-darker">The Solution</h3>
                <p className="text-lg text-brand-gray leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="bg-brand-light border border-brand-border p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold font-heading mb-6 text-brand-darker">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-brand-light border border-brand-border text-brand-darker text-sm px-4 py-2 rounded-full font-medium shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-brand-primary text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold font-heading mb-4">Start your project</h3>
                <p className="text-brand-accent-light mb-6">Need a similar solution for your business?</p>
                <Button to="/contact" variant="primary" className="w-full bg-brand-dark text-brand-light hover:bg-brand-primary hover:text-white border border-brand-border">Get in touch</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
