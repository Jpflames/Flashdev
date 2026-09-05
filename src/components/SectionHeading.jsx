import { cn } from '../lib/utils';

export default function SectionHeading({ title, subtitle, className, center = false }) {
  return (
    <div className={cn("max-w-3xl mb-12", center && "mx-auto text-center", className)}>
      {subtitle && (
        <span className="block text-brand-primary font-bold tracking-wider text-sm uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-darker leading-tight">
        {title}
      </h2>
    </div>
  );
}
