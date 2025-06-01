import DishCard from '@/components/DishCard';
import { DUMMY_DISHES } from '@/lib/constants';
import type { Dish } from '@/types';

export default function MenuPage() {
  const dishesByCategory: { [category: string]: Dish[] } = DUMMY_DISHES.reduce((acc, dish) => {
    if (!acc[dish.category]) {
      acc[dish.category] = [];
    }
    acc[dish.category].push(dish);
    return acc;
  }, {} as { [category: string]: Dish[] });

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-gradient-to-r from-primary/10 via-background to-primary/10 rounded-lg shadow-sm">
        <h1 className="text-5xl font-headline font-bold text-primary mb-4 animate-fadeIn">
          Welcome to Spice Route Bistro
        </h1>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto animate-fadeInUp">
          Embark on a culinary journey through the vibrant flavors of India. Each dish is crafted with passion and the freshest ingredients.
        </p>
      </section>

      {Object.entries(dishesByCategory).map(([category, dishes]) => (
        <section key={category}>
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-6 pb-2 border-b-2 border-primary/50">
            {category}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {dishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
