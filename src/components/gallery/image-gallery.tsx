import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImages = PlaceHolderImages.filter((img) => img.id.startsWith('gallery-'));

export function ImageGallery() {
  return (
    <section id="gallery" className="w-full">
      <div className="mb-8 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Event Gallery</h2>
        <p className="text-lg text-muted-foreground">Moments we've captured.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg">
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
