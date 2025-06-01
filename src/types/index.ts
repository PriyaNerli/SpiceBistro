export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  imageHint: string;
  category: string;
}

export interface NavLink {
  href: string;
  label: string;
}
