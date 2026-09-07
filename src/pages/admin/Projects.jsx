import AdminLayout from '../../components/AdminLayout';
import Button from '../../components/Button';

export default function Projects() {
  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-heading font-bold text-brand-darker mb-2">Projects</h1>
          <p className="text-brand-gray">Manage portfolio projects.</p>
        </div>
        <Button>Add Project</Button>
      </div>

      <div className="bg-brand-light border border-brand-border rounded-xl overflow-hidden p-12 text-center shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-brand-darker">Coming Soon</h3>
        <p className="text-brand-gray max-w-md mx-auto">
          The project management interface is currently under development. For now, projects are managed via the static data file.
        </p>
      </div>
    </AdminLayout>
  );
}
