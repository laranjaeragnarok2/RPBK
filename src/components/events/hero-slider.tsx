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
    title: 'Neon Dreams: The Ultimate Rave',
    date: 'Saturday, August 17, 2024',
    image: heroImages.find(i => i.id === 'hero-1'),
  },
  {
    title: 'Midnight Bloom: Rooftop Party',
    date: 'Friday, August 23, 2024',
    image: heroImages.find(i => i.id === 'hero-2'),
  },
  {
    title: 'Warehouse Echoes: Deep House Night',
    date: 'Saturday, September 7, 2024',
    image: {
      id: 'hero-4',
      imageUrl: 'https://images.unsplash.com/photo-1516999654410-4925a65c9533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxpbmR1c3RyaWFsJTIwY2x1YnxlbnwwfHx8fDE3NjMwMDYxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Dancers in a vast, atmospheric industrial warehouse club with moody lighting.',
      imageHint: 'industrial club'
    }
  },
  {
    title: 'Liquid Gold: Cocktail Festival',
    date: 'Sunday, September 1, 2024',
    image: heroImages.find(i => i.id === 'hero-3'),
  },
  {
    title: 'Sunset Grooves: Beach Party',
    date: 'Saturday, September 14, 2024',
    image: {
      id: 'hero-5',
      imageUrl: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxiZWFjaCUyMHBhcnR5fGVufDB8fHx8MTc2MzAwNjE4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'People dancing on a beach at sunset with a DJ booth.',
      imageHint: 'beach party'
    }
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
                    Book Your Spot
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
