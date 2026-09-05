import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl md:text-[120px] font-heading font-bold text-brand-primary mb-6">404</h1>
      <h2 className="text-2xl md:text-4xl font-heading font-bold mb-8 text-brand-darker">
        Looks like this page went offline.
      </h2>
      <Button to="/">Back Home &rarr;</Button>
    </div>
  );
}
