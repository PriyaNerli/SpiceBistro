import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, Leaf, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-primary/10 rounded-lg shadow-sm">
        <h1 className="text-5xl font-headline font-bold text-primary mb-4">
          About Spice Route Bistro
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Discover the story behind our passion for authentic Indian cuisine and warm hospitality.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">Our Journey</h2>
          <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
            Spice Route Bistro began with a simple dream: to bring the rich tapestry of Indian flavors to our community. Inspired by the ancient spice trade routes that connected cultures and cuisines, we aim to offer an authentic dining experience that transports you to the heart of India.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our chefs meticulously craft each dish using traditional recipes passed down through generations, combined with a touch of modern culinary innovation. We believe in using only the freshest, highest-quality ingredients to ensure every bite is a celebration of taste and aroma.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/Restaurant Interior.jpg"
            alt="Restaurant Interior"
            width={600}
            height={400}
            className="object-cover"
            data-ai-hint="restaurant interior"
          />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-semibold text-foreground mb-6 text-center">Our Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit mb-2">
                <UtensilsCrossed size={32} className="text-primary" />
              </div>
              <CardTitle className="font-headline">Authentic Flavors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">We stay true to traditional Indian cooking methods and spice blends to deliver an unforgettable taste experience.</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit mb-2">
                <Leaf size={32} className="text-primary" />
              </div>
              <CardTitle className="font-headline">Fresh Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Quality is paramount. We source the freshest local produce and finest spices for our dishes.</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit mb-2">
                <Users size={32} className="text-primary" />
              </div>
              <CardTitle className="font-headline">Warm Hospitality</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Our team is dedicated to providing a welcoming atmosphere and exceptional service to all our guests.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-lg overflow-hidden shadow-xl order-last md:order-first">
            <Image
                src="/Indian Spices.jpg"
                alt="Indian Spices"
                width={600}
                height={400}
                className="object-cover"
                data-ai-hint="indian spices"
            />
        </div>
        <div>
            <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">The Spice Route Experience</h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
                Dining at Spice Route Bistro is more than just a meal; it's an experience. Our ambiance is designed to be warm and inviting, reflecting the vibrant culture of India. Whether you're joining us for a casual lunch, a family dinner, or a special celebration, we strive to make every visit memorable.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
                We invite you to explore our menu, discover new tastes, and share the joy of food with your loved ones at Spice Route Bistro.
            </p>
        </div>
      </section>
    </div>
  );
}
