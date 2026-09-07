import { useEffect, useState } from 'react';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { cn } from '../lib/utils';
import { LayoutDashboard, MessageSquare, Briefcase, LogOut, Loader2 } from 'lucide-react';

export default function AdminLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate('/admin/login');
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    if (auth) await signOut(auth);
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-brand-primary animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Inquiries', path: '/admin/inquiries', icon: MessageSquare },
    { name: 'Projects', path: '/admin/projects', icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-brand-light flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-brand-light border-r border-brand-border flex flex-col pt-24 md:pt-8 md:min-h-screen z-40">
        <div className="px-6 mb-8 hidden md:block">
          <Link to="/" className="inline-block">
            <span className="font-heading font-bold text-xl tracking-tight text-brand-darker">
              FLASH<span className="text-brand-primary">DEV</span>
            </span>
            <span className="text-xs text-brand-gray block mt-1 uppercase tracking-widest">Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-4 py-3 rounded-md transition-colors font-medium",
                location.pathname === item.path
                  ? "bg-brand-primary/10 text-brand-primary"
                  : "text-brand-gray hover:text-brand-dark hover:bg-brand-light"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 w-full rounded-md text-brand-gray hover:text-brand-dark hover:bg-brand-light transition-colors font-medium"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto pt-24 md:pt-12">
        {children}
      </main>
    </div>
  );
}
