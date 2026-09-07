import { motion } from 'framer-motion';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { Monitor, Smartphone, Cloud, PenTool, ShoppingCart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

import { services } from '../data/services';

export default function Home() {

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-gradient-to-b from-brand-primary-light/30 to-transparent">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full font-bold tracking-wider text-xs uppercase mb-6 border border-brand-primary/20">
                Flashdev Technologies
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-[75px] font-heading font-bold text-brand-darker leading-[1.1] mb-6 uppercase">
                SPEED MEETS <span className="text-brand-primary">INNOVATION</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-brand-darker font-bold tracking-wide mb-4">
                FAST SOLUTION, SMART TECHNOLOGY, REAL RESULTS
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-brand-gray mb-10 max-w-xl leading-relaxed">
                Flash Dev Technologies is a Full-service Digital Solutions Company Helping Business, Organisation and Individuals Transform Ideas into Powerful Digital Experience
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button to="/contact" size="lg">Start a Project &rarr;</Button>
                <Button to="/portfolio" variant="outline" size="lg">Explore Our Work</Button>
              </motion.div>
            </motion.div>

            {/* Right side professional visual representation */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="hidden lg:block relative h-[600px] w-full"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-dark/20 bg-brand-light">
                  <img src="/images/hero.jpg" alt="Flashdev Technologies" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent mix-blend-overlay"></div>
                </div>
              </motion.div>
              
              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-32 -left-12 bg-brand-light p-4 rounded-xl shadow-xl border border-brand-border flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  <Activity className="text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-darker">Systems Active</p>
                  <p className="text-xs text-brand-primary">100% Operational</p>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-20 -right-8 bg-brand-darker p-5 rounded-xl shadow-2xl flex items-center gap-4 z-20"
              >
                <div className="w-3 h-3 bg-brand-primary rounded-full animate-pulse"></div>
                <p className="text-sm font-bold text-white tracking-wide">Deployment Successful</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust / Capability Strip */}
      <div className="border-y border-brand-border bg-brand-light/80 backdrop-blur-md py-6 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-between items-center gap-6 text-sm font-bold text-brand-darker tracking-wider uppercase whitespace-nowrap"
          >
            <span className="hover:text-brand-primary transition-colors">Startups</span>
            <span className="hidden md:inline text-brand-primary">&bull;</span>
            <span className="hover:text-brand-primary transition-colors">Businesses</span>
            <span className="hidden lg:inline text-brand-primary">&bull;</span>
            <span className="hover:text-brand-primary transition-colors">Enterprises</span>
            <span className="hidden lg:inline text-brand-primary">&bull;</span>
            <span className="hover:text-brand-primary transition-colors">Government</span>
            <span className="hidden xl:inline text-brand-primary">&bull;</span>
            <span className="hover:text-brand-primary transition-colors">Education</span>
            <span className="hidden xl:inline text-brand-primary">&bull;</span>
            <span className="hover:text-brand-primary transition-colors">Healthcare</span>
            <span className="hidden xl:inline text-brand-primary">&bull;</span>
            <span className="hover:text-brand-primary transition-colors">E-commerce</span>
            <span className="hidden xl:inline text-brand-primary">&bull;</span>
            <span className="hover:text-brand-primary transition-colors">NGOs</span>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-24 md:py-32 bg-transparent relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-brand-primary-light/40 to-transparent -z-10"></div>
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <SectionHeading 
              title={
                <motion.span variants={fadeInUp} className="block">
                  Technology should solve problems.<br />
                  <span className="text-brand-gray">Not create more of them.</span>
                </motion.span>
              } 
              center 
            />
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto mb-10 leading-relaxed">
              Flashdev Technologies focuses on practical technology solutions that are scalable, intuitive, reliable, and fundamentally business-focused. We don't just write code; we engineer value.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button to="/about" variant="outline">Discover Flashdev &rarr;</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-primary/5 backdrop-blur-sm border-y border-brand-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <SectionHeading subtitle="What We Build" title="Services" />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.slice(0, 6).map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={scaleIn}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group p-8 border border-brand-border bg-brand-light rounded-2xl shadow-sm transition-all duration-300 hover:border-brand-primary/30 hover:shadow-xl flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-light rounded-xl group-hover:bg-brand-primary/10 transition-colors">
                    <service.icon className="text-brand-primary w-8 h-8" />
                  </div>
                  <span className="text-brand-border font-heading font-bold text-3xl group-hover:text-brand-primary/20 transition-colors">0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-darker group-hover:text-brand-primary transition-colors">{service.title}</h3>
                <p className="text-brand-gray mb-8 flex-grow">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-bold text-brand-primary group-hover:text-brand-primary transition-colors">
                  Explore <span className="ml-2 transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Button to="/services" variant="outline" size="lg">View All 13 Services</Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 md:py-32 bg-transparent">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16"
          >
            <SectionHeading 
              subtitle="Technology built around real-world needs" 
              title="SELECTED WORK" 
              className="mb-0"
            />
            <Button to="/portfolio" variant="ghost" className="mt-6 md:mt-0 px-0 hover:bg-transparent hover:text-brand-primary">
              View All Projects &rarr;
            </Button>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp} className="group cursor-pointer">
              <Link to="/portfolio/food-xpress">
                <div className="aspect-[4/3] bg-brand-light relative overflow-hidden rounded-3xl border border-brand-border shadow-sm group-hover:shadow-2xl transition-all duration-500 p-0 mb-8">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src="/images/food_xpress.jpg" 
                    alt="Food Xpress" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-500"></div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-brand-primary text-xs font-bold tracking-wider uppercase bg-brand-primary/10 px-3 py-1 rounded-full">E-Commerce</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 font-heading text-brand-darker group-hover:text-brand-primary transition-colors">FOOD XPRESS</h3>
                  <p className="text-brand-gray text-base leading-relaxed mb-4 max-w-md">
                    A multi-vendor fresh-food commerce platform designed to connect customers with vendors.
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="group cursor-pointer md:mt-16">
              <Link to="/portfolio/smartfix-9ja">
                <div className="aspect-[4/3] bg-brand-light relative overflow-hidden rounded-3xl border border-brand-border shadow-sm group-hover:shadow-2xl transition-all duration-500 p-0 mb-8">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src="/images/smartfix.jpg" 
                    alt="Smartfix 9ja" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/10 transition-colors duration-500"></div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-brand-primary text-xs font-bold tracking-wider uppercase bg-brand-primary/10 px-3 py-1 rounded-full">Platform</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 font-heading text-brand-darker group-hover:text-brand-primary transition-colors">SMARTFIX 9JA</h3>
                  <p className="text-brand-gray text-base leading-relaxed mb-4 max-w-md">
                    A digital platform connecting users with reliable repair services through a seamless booking interface.
                  </p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Flashdev */}
      <section className="py-24 bg-brand-darker text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionHeading 
              title={<span className="text-white">WHY FLASHDEV?</span>} 
              subtitle="The Difference" 
            />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-16"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">01</div>
                <h3 className="text-2xl font-bold font-heading">FAST DELIVERY</h3>
              </div>
              <p className="text-brand-border/70 text-lg leading-relaxed pl-16">We understand that speed matters. We deliver robust solutions quickly without compromising on quality or performance.</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">02</div>
                <h3 className="text-2xl font-bold font-heading">SMART SOLUTIONS</h3>
              </div>
              <p className="text-brand-border/70 text-lg leading-relaxed pl-16">We leverage the latest technology and intelligent architectures to build solutions that solve complex problems gracefully.</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">03</div>
                <h3 className="text-2xl font-bold font-heading">RELIABLE SUPPORTS</h3>
              </div>
              <p className="text-brand-border/70 text-lg leading-relaxed pl-16">Our partnership doesn't end at deployment. We provide dedicated, reliable support to ensure your technology runs flawlessly.</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold">04</div>
                <h3 className="text-2xl font-bold font-heading">REAL RESULTS</h3>
              </div>
              <p className="text-brand-border/70 text-lg leading-relaxed pl-16">We don't just build software; we drive outcomes. Everything we create is focused on generating tangible results for your business.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-brand-primary/5 backdrop-blur-sm overflow-hidden border-y border-brand-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="FROM IDEA TO IMPACT" center />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12 relative"
          >
            <div className="hidden md:block absolute top-8 left-[10%] w-[80%] h-0.5 bg-brand-border"></div>
            
            <motion.div variants={fadeInUp} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-brand-light border-2 border-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-brand-primary font-bold text-xl">01</div>
              <h3 className="text-xl font-bold mb-3 text-brand-darker font-heading">DISCOVER</h3>
              <p className="text-brand-gray text-sm leading-relaxed">Understand the business, users and problem deeply before writing a single line of code.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-brand-light border-2 border-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-brand-primary font-bold text-xl">02</div>
              <h3 className="text-xl font-bold mb-3 text-brand-darker font-heading">DESIGN</h3>
              <p className="text-brand-gray text-sm leading-relaxed">Define the experience, architecture and solution visually and technically.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-brand-primary text-white border-2 border-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg font-bold text-xl">03</div>
              <h3 className="text-xl font-bold mb-3 text-brand-darker font-heading">BUILD</h3>
              <p className="text-brand-gray text-sm leading-relaxed">Develop, test and refine the product using modern, scalable technologies.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-brand-primary text-white border-2 border-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg font-bold text-xl">04</div>
              <h3 className="text-xl font-bold mb-3 text-brand-darker font-heading">LAUNCH</h3>
              <p className="text-brand-gray text-sm leading-relaxed">Deploy, monitor and continuously improve the solution based on real-world usage.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ladies in Tech Teaser */}
      <section className="py-24 relative overflow-hidden bg-transparent text-brand-darker border-t border-brand-border">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full font-bold tracking-wider text-xs uppercase mb-6 border border-brand-primary/20">
                Community Initiative
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                BUILDING THE NEXT GENERATION OF WOMEN IN TECH.
              </h2>
              <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                Beyond building technology, Flashdev Technologies is committed to creating opportunities for people to learn, grow and participate in the technology ecosystem. The Ladies in Tech initiative supports and encourages women to build, learn and lead.
              </p>
              <Button to="/ladies-in-tech" variant="primary">Explore Ladies in Tech &rarr;</Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-brand-border"
            >
              <img src="/images/ladies_in_tech.jpg" alt="Ladies in Tech" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-primary text-white text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 lg:px-12"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">Have an idea?<br />Let's build it.</h2>
          <p className="text-xl text-brand-primary-light mb-12 max-w-2xl mx-auto">
            Tell us what you're trying to build, improve or automate. Your idea deserves more than a prototype.
          </p>
          <Button to="/contact" size="lg" className="bg-brand-dark text-brand-light hover:bg-brand-primary hover:text-white border border-brand-border">Start a Project &rarr;</Button>
        </motion.div>
      </section>
    </motion.div>
  );
}
