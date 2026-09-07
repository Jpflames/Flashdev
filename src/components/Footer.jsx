import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-brand-primary/10 to-transparent border-t border-brand-border pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                FLASH<span className="text-brand-primary">DEV</span>
              </span>
            </Link>
            <p className="text-brand-border/60 mb-6 max-w-sm">
              Building practical digital solutions for businesses, organizations and ambitious ideas.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase text-sm">Navigation</h4>
            <ul className="space-y-4 text-brand-border/60">
              <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-brand-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-primary transition-colors">Our Work</Link></li>
              <li><Link to="/ladies-in-tech" className="hover:text-brand-primary transition-colors">Ladies in Tech</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-4 text-brand-border/60">
              <li>Flashdev Technologies</li>
              <li><a href="mailto:flashdevtechnologies@gmail.com" className="hover:text-brand-primary transition-colors">flashdevtechnologies@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-heading tracking-wide uppercase text-sm">Socials</h4>
            <ul className="space-y-4 text-brand-border/60">
              <li><a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">X</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-border/40">
          <p>&copy; {currentYear} Flashdev Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
