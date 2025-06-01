import Image from 'next/image';
import { IndianRupee } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Dish } from '@/types';

interface DishCardProps {
  dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative w-full h-56">
        <Image
          src={dish.imageSrc}
          alt={dish.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={dish.imageHint}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{dish.name}</CardTitle>
        <Badge variant="secondary" className="w-fit mt-1">{dish.category}</Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-foreground/80">
          {dish.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4 border-t">
        <div className="flex items-center text-lg font-semibold text-primary">
          <IndianRupee size={20} className="mr-1" />
          <span>{dish.price.toFixed(2)}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
