import AdminLayout from '../../components/AdminLayout';
import { useState, useEffect } from 'react';
import { getInquiries } from '../../services/inquiryService';

export default function Dashboard() {
  const [stats, setStats] = useState({ total: 0, new: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getInquiries();
        setStats({
          total: data.length,
          new: data.filter(i => i.status === 'new').length
        });
      } catch (error) {
        console.error("Error fetching stats", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-brand-darker mb-2">Overview</h1>
        <p className="text-brand-gray">Welcome to the Flashdev Admin Dashboard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white border border-brand-border rounded-xl p-6 shadow-sm">
          <h3 className="text-brand-gray text-sm font-medium mb-2 uppercase tracking-wider">Total Inquiries</h3>
          <p className="text-4xl font-heading font-bold text-brand-darker">{loading ? '-' : stats.total}</p>
        </div>
        <div className="bg-white border border-brand-border rounded-xl p-6 shadow-sm">
          <h3 className="text-brand-gray text-sm font-medium mb-2 uppercase tracking-wider">New Inquiries</h3>
          <p className="text-4xl font-heading font-bold text-brand-primary">{loading ? '-' : stats.new}</p>
        </div>
        <div className="bg-white border border-brand-border rounded-xl p-6 shadow-sm">
          <h3 className="text-brand-gray text-sm font-medium mb-2 uppercase tracking-wider">Projects</h3>
          <p className="text-4xl font-heading font-bold text-brand-darker">2</p>
        </div>
        <div className="bg-white border border-brand-border rounded-xl p-6 shadow-sm">
          <h3 className="text-brand-gray text-sm font-medium mb-2 uppercase tracking-wider">Team Members</h3>
          <p className="text-4xl font-heading font-bold text-brand-darker">7</p>
        </div>
      </div>
    </AdminLayout>
  );
}
