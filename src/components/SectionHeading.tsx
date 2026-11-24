export default function SectionHeading({
  command,
  title,
  subtitle,
}: {
  command: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-accent mb-3">
        <span className="text-zinc-600">$ </span>
        {command}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-zinc-400 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
