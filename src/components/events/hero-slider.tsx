'use client';

import { Button } from '@/components/ui/button';

const event = {
  title: 'Sextou Reverso',
  date: 'Sábado, 17 de Agosto de 2024',
};

export function HeroSlider() {
  return (
    <section className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
        poster="https://images.pexels.com/photos/2835547/pexels-photo-2835547.jpeg"
      >
        {/* Este vídeo é um placeholder. Para usar um vídeo local, coloque-o na pasta /public e use o caminho, ex: /meu-video.mp4 */}
        <source src="https://videos.pexels.com/video-files/8786529/8786529-hd.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white p-4">
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
    </section>
  );
}
