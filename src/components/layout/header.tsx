import Link from 'next/link';
import { Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary neon-icon" />
          <span className="font-headline text-lg font-bold">Nightlife Pulse</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="#events"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Events
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
            Gallery
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
           <Button>Get Tickets</Button>
        </div>
      </div>
    </header>
  );
}
