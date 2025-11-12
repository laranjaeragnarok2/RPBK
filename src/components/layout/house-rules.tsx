import { Card, CardContent } from '@/components/ui/card';
import {
  MicOff,
  Clock,
  Ban,
  Hand,
  CigaretteOff,
} from 'lucide-react';

const rules = [
  { text: 'Proibido som automotivo', icon: MicOff },
  { text: 'Proibido o uso de drogas ilícitas', icon: CigaretteOff },
  { text: 'Os pedidos encerram pontualmente ao horário de encerramento do bar', icon: Clock },
  { text: 'Pedidos de rosh encerram 1h antes do horário de encerramento do bar', icon: Clock },
  { text: 'Jogos de baralho não são permitidos', icon: Ban },
  { text: 'Atendimento somente no balcão', icon: Hand },
];

export function HouseRules() {
  return (
    <section id="rules" className="w-full">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          <span className="text-primary neon-primary">REGRAS</span> da casa
        </h2>
        <p className="text-lg text-muted-foreground mt-2 mb-8">
          Para a segurança e conforto de todos.
        </p>
      </div>
      <Card className="bg-card/50">
        <CardContent className="p-6 md:p-8">
          <ul className="space-y-4">
            {rules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <li
                  key={index}
                  className="flex items-center gap-4 text-base md:text-lg"
                >
                  <Icon className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-foreground/90">{rule.text}</span>
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
