import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, categories } from '../data/projects';
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
      staggerChildren: 0.1
    }
  }
};

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-brand-light"
    >
      <section className="py-20 bg-transparent border-b border-brand-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeUp}>
              <SectionHeading subtitle="Selected Work" title="PORTFOLIO" />
            </motion.div>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-brand-gray leading-relaxed">
              We design and engineer platforms that drive business value. Explore our recent projects and case studies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-transparent sticky top-20 z-30 border-b border-brand-border shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 md:gap-4">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeFilter === 'All' 
                ? 'bg-brand-darker text-white shadow-md' 
                : 'bg-brand-light text-brand-gray hover:text-brand-darker border border-brand-border hover:border-brand-primary'
              }`}
            >
              All Projects
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeFilter === cat 
                  ? 'bg-brand-darker text-white shadow-md' 
                  : 'bg-brand-light text-brand-gray hover:text-brand-darker border border-brand-border hover:border-brand-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id} 
                  className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}
                >
                  <Link to={`/portfolio/${project.slug}`}>
                    <div className="aspect-[4/3] bg-transparent relative overflow-hidden rounded-3xl border border-brand-border shadow-sm group-hover:shadow-2xl transition-all duration-500 mb-8 p-0 flex items-center justify-center">
                       {project.id === 'food-xpress' && (
                          <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            src="/images/food_xpress.jpg" 
                            alt="Food Xpress" 
                            className="w-full h-full object-cover" 
                          />
                       )}
                       {project.id === 'smartfix-9ja' && (
                          <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            src="/images/smartfix.jpg" 
                            alt="Smartfix 9ja" 
                            className="w-full h-full object-cover" 
                          />
                       )}
                       {project.id !== 'food-xpress' && project.id !== 'smartfix-9ja' && (
                          <span className="text-brand-gray font-bold tracking-widest uppercase">{project.title} Visuals</span>
                       )}
                       <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-500"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-brand-primary text-xs font-bold tracking-wider uppercase bg-brand-primary/10 px-3 py-1 rounded-full">{project.category}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-3 font-heading text-brand-darker group-hover:text-brand-primary transition-colors">{project.title}</h3>
                      <p className="text-brand-gray text-base leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <span className="text-sm font-bold text-brand-primary group-hover:text-brand-primary transition-colors inline-flex items-center">
                        View Case Study <span className="ml-2 transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-brand-gray">
              <p className="text-xl">No projects found in this category.</p>
            </div>
          )}
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
          <h2 className="text-4xl font-heading font-bold mb-8 text-brand-darker">Ready to start your project?</h2>
          <Button to="/contact" size="lg" variant="primary">Let's talk</Button>
        </motion.div>
      </section>
    </motion.div>
  );
}
