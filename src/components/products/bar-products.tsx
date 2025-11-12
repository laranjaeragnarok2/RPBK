import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card';

const productImages = PlaceHolderImages.filter((img) => img.id.startsWith('product-'));

const products = [
  {
    name: 'Coquetel Espectral',
    image: productImages.find(i => i.id === 'product-1'),
  },
  {
    name: 'Cerveja Artesanal Pulsar',
    image: productImages.find(i => i.id === 'product-2'),
  },
  {
    name: 'Petiscos da Noite',
    image: productImages.find(i => i.id === 'product-3'),
  }
];

export function BarProducts() {
  return (
    <section id="products" className="w-full">
      <div className="mb-8 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Nosso Cardápio</h2>
        <p className="text-lg text-muted-foreground">O combustível para sua noite.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="group flex flex-col overflow-hidden bg-card shadow-lg transition-all hover:shadow-primary/20 hover:-translate-y-1">
            {product.image && (
              <div className="aspect-video relative w-full">
                  <Image
                      src={product.image.imageUrl}
                      alt={product.image.description}
                      data-ai-hint={product.image.imageHint}
                      fill
                      className="object-cover"
                  />
              </div>
            )}
            <CardHeader>
                <CardTitle className="text-center text-xl">{product.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
