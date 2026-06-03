import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-6xl mx-auto w-full px-4 pb-8">
      <Separator className="mb-8" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {year}{" "}
          <span className="text-foreground font-medium">Amanpreet Singh</span>. All rights
          reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Amanbig"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/amanpreet-singh-9a1929211"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:amanpreetsinghjhiwant7@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
