import { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { getInquiries, updateInquiryStatus } from '../../services/inquiryService';

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const data = await getInquiries();
      setInquiries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateInquiryStatus(id, newStatus);
      setInquiries(inquiries.map(i => i.id === id ? { ...i, status: newStatus } : i));
    } catch (error) {
      console.error(error);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'new': return 'bg-brand-primary text-white';
      case 'contacted': return 'bg-brand-accent text-white';
      case 'in progress': return 'bg-yellow-500 text-white';
      case 'completed': return 'bg-brand-dark text-white';
      case 'closed': return 'bg-gray-500 text-white';
      default: return 'bg-brand-gray text-white';
    }
  };

  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold text-brand-darker mb-2">Inquiries</h1>
          <p className="text-brand-gray">Manage project inquiries from potential clients.</p>
        </div>
      </div>

      <div className="bg-brand-light border border-brand-border rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-light border-b border-brand-border text-brand-gray text-sm uppercase tracking-wider">
                <th className="p-4 font-bold">Date</th>
                <th className="p-4 font-bold">Name</th>
                <th className="p-4 font-bold">Project</th>
                <th className="p-4 font-bold">Budget</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-brand-gray">Loading inquiries...</td>
                </tr>
              ) : inquiries.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-brand-gray">No inquiries found.</td>
                </tr>
              ) : (
                inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b border-brand-border hover:bg-brand-light transition-colors">
                    <td className="p-4 text-brand-gray whitespace-nowrap">
                      {inquiry.createdAt.toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-brand-darker">{inquiry.name}</div>
                      <div className="text-sm text-brand-gray">{inquiry.email}</div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-brand-darker">{inquiry.projectType}</div>
                      {inquiry.company && <div className="text-sm text-brand-gray">{inquiry.company}</div>}
                    </td>
                    <td className="p-4 text-brand-gray">{inquiry.budget}</td>
                    <td className="p-4">
                      <select 
                        value={inquiry.status}
                        onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                        className={`text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-full appearance-none outline-none cursor-pointer ${getStatusColor(inquiry.status)}`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-sm text-brand-primary hover:text-brand-darker underline">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
