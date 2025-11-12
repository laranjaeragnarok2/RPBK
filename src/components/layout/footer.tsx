import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';


const Logo = () => (
    <div className="flex flex-col items-center font-headline leading-none">
        <div className="text-lg font-bold tracking-widest text-primary neon-primary">REPUBLIKA</div>
        <div className="text-xs font-normal tracking-[0.4em]">BAR</div>
    </div>
)


export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-8 py-10">
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <Logo />
          <p className="text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Republika Bar. Todos os Direitos Reservados.
          </p>
        </div>
        
        <div className="flex items-center justify-center md:justify-end gap-4 md:col-start-3">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
