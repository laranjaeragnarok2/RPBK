import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Logo = () => (
  <div className="flex flex-col items-center font-headline leading-none">
    <div className="text-xl font-bold tracking-widest text-primary neon-primary">REPUBLIKA</div>
    <div className="text-xs font-normal tracking-[0.4em]">BAR</div>
  </div>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="md:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>
        <nav className="hidden md:flex flex-1 justify-center items-center gap-4 text-sm lg:gap-6">
          <Link
            href="#events"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Eventos
          </Link>
          <Link
            href="#about"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Quem Somos
          </Link>
          <Link
            href="#rules"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Regras
          </Link>
          <Link
            href="#social"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Social
          </Link>
          <Link
            href="#gallery"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Galeria
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button>Entrar em contato</Button>
        </div>
      </div>
    </header>
  );
}
