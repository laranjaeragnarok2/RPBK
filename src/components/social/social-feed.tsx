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
    content: 'Just dropped a new mix! 🔥 The energy last night was insane. Can\'t wait to see you all at Neon Dreams!',
    image: socialImages.find(i => i.id === 'social-2')
  },
  {
    user: 'PartyAnimal_99',
    avatar: avatarImages.find(i => i.id === 'avatar-2'),
    content: 'The rooftop views at Midnight Bloom are going to be epic. Who\'s coming?',
    image: socialImages.find(i => i.id === 'social-1')
  },
  {
    user: 'MixMasterMike',
    avatar: avatarImages.find(i => i.id === 'avatar-3'),
    content: 'Getting the bar ready for the Liquid Gold festival. Some amazing cocktails are coming your way! 🍹',
    image: socialImages.find(i => i.id === 'social-3')
  }
];

export function SocialFeed() {
  return (
    <section id="social" className="w-full">
      <div className="mb-8 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">From The Scene</h2>
        <p className="text-lg text-muted-foreground">Real-time updates from our community.</p>
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
