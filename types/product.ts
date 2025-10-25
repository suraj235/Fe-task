export interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  category?: string;
  price?: number;
}