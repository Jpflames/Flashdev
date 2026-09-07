import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!auth) throw new Error("Firebase Auth not initialized");
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      console.error(err);
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/" className="inline-block mb-8">
            <span className="font-heading font-bold text-2xl tracking-tight text-brand-darker">
              FLASH<span className="text-brand-primary">DEV</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold font-heading uppercase text-brand-darker">Admin Access</h1>
        </div>

        <div className="bg-brand-light border border-brand-border rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-brand-gray">Email Address</label>
              <input 
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-brand-light border border-brand-border rounded-md p-3 text-brand-dark focus:border-brand-primary focus:outline-none transition-colors" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-brand-gray">Password</label>
              <input 
                type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-brand-light border border-brand-border rounded-md p-3 text-brand-dark focus:border-brand-primary focus:outline-none transition-colors" 
                required 
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Authenticating...' : 'Sign In'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
