'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

const heroImages = PlaceHolderImages.filter((img) => img.id.startsWith('hero-'));

const events = [
  {
    title: 'Sextou Reverso',
    date: 'Sábado, 17 de Agosto de 2024',
    image: heroImages.find(i => i.id === 'hero-1'),
  },
  {
    title: 'Flor da Meia-Noite: Festa no Terraço',
    date: 'Sexta-feira, 23 de Agosto de 2024',
    image: heroImages.find(i => i.id === 'hero-2'),
  },
  {
    title: 'Ecos do Armazém: Noite de Deep House',
    date: 'Sábado, 7 de Setembro de 2024',
    image: heroImages.find(i => i.id === 'hero-4'),
  },
  {
    title: 'Ouro Líquido: Festival de Coquetéis',
    date: 'Domingo, 1 de Setembro de 2024',
    image: heroImages.find(i => i.id === 'hero-3'),
  },
  {
    title: 'Ritmos do Pôr do Sol: Festa na Praia',
    date: 'Sábado, 14 de Setembro de 2024',
    image: heroImages.find(i => i.id === 'hero-5'),
  }
];

export function HeroSlider() {
  return (
    <section className="relative w-full h-[70vh] md:h-screen">
      <Carousel
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {events.map((event, index) => (
            <CarouselItem key={index} className="h-full">
            {event.image && (
              <div className="relative h-full w-full">
                <Image
                  src={event.image.imageUrl}
                  alt={event.image.description}
                  data-ai-hint={event.image.imageHint}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                    {event.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-white/90 drop-shadow-md">
                    {event.date}
                  </p>
                  <Button size="lg" className="mt-8 text-lg font-bold">
                    Reserve seu Lugar
                  </Button>
                </div>
              </div>
            )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </div>
      </Carousel>
    </section>
  );
}
