import { ChefHat } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center mb-2">
          <ChefHat size={24} className="text-primary mr-2" />
          <p className="font-headline text-lg">Spice Route Bistro</p>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Spice Route Bistro. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Experience the authentic flavors of India.
        </p>
      </div>
    </footer>
  );
}
