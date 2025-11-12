import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const socialImages = PlaceHolderImages.filter((img) => img.id.startsWith('social-'));
const avatarImages = PlaceHolderImages.filter((img) => img.id.startsWith('avatar-'));

const feedItems = [
  {
    user: 'DJ_Vortex',
    avatar: avatarImages.find(i => i.id === 'avatar-1'),
    content: 'Acabei de lançar um novo mix! 🔥 A energia ontem à noite foi insana. Mal posso esperar para ver todos vocês no Sonhos de Neon!',
    image: socialImages.find(i => i.id === 'social-2')
  },
  {
    user: 'Festeiro_99',
    avatar: avatarImages.find(i => i.id === 'avatar-2'),
    content: 'As vistas do terraço no Flor da Meia-Noite serão épicas. Quem vem?',
    image: socialImages.find(i => i.id === 'social-1')
  },
  {
    user: 'MixMasterMike',
    avatar: avatarImages.find(i => i.id === 'avatar-3'),
    content: 'Preparando o bar para o festival Ouro Líquido. Coquetéis incríveis estão a caminho! 🍹',
    image: socialImages.find(i => i.id === 'social-3')
  }
];

export function SocialFeed() {
  return (
    <section id="social" className="w-full">
      <div className="mb-8 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Da Cena</h2>
        <p className="text-lg text-muted-foreground">Atualizações em tempo real da nossa comunidade.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {feedItems.map((item, index) => (
          <Card key={index} className="flex flex-col overflow-hidden bg-card shadow-lg">
            {item.avatar && (
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={item.avatar.imageUrl} alt={`@${item.user}`} data-ai-hint={item.avatar.imageHint} />
                <AvatarFallback>{item.user.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">{item.user}</p>
                <p className="text-sm text-muted-foreground">@{item.user.toLowerCase()}</p>
              </div>
            </CardHeader>
            )}
            <CardContent className="flex-grow">
              <p className="text-foreground/90">{item.content}</p>
            </CardContent>
            {item.image && (
              <div className="aspect-video relative w-full mt-auto">
                  <Image
                      src={item.image.imageUrl}
                      alt={item.image.description}
                      data-ai-hint={item.image.imageHint}
                      fill
                      className="object-cover"
                  />
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
