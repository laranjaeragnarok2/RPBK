import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-1');

export function AboutUs() {
  return (
    <section className="w-full">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
            Quem <span className="text-primary neon-primary">Somos</span>
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Nascido da paixão pela vida noturna e do desejo de criar um espaço único em Rio Verde, Goiás, o Republika Bar é mais do que apenas um bar - é um ponto de encontro para amigos, amantes de música e todos que procuram uma experiência inesquecível.
            </p>
            <p>
              Nossa missão é simples: oferecer noites memoráveis com os melhores DJs da cena, coquetéis artesanais que surpreendem o paladar e um ambiente onde todos se sintam bem-vindos. Do deep house ao techno, nossa curadoria musical é pensada para criar a trilha sonora perfeita para a sua noite.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
            {aboutImage && (
                <Card className="aspect-square relative w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                        src={aboutImage.imageUrl}
                        alt={aboutImage.description}
                        data-ai-hint={aboutImage.imageHint}
                        fill
                        className="object-cover"
                    />
              </Card>
            )}
        </div>
      </div>
    </section>
  );
}
