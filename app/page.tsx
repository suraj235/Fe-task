"use client";
// ToDo/Improvements: It can be converted to server component if routing is implemented. 
// (Didn't implemented here Becauase it was not the part of the task requirement)

import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

export const sampleProducts: Product[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    title: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation and 30-hour battery life.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    title: "Classic Sneakers",
    description:
      "Step up your style game with these comfortable and trendy classic sneakers. Perfect for everyday wear.",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
    title: "Smart Fitness Watch",
    description:
      "Track your fitness goals with precision. Features heart rate monitoring, GPS, and waterproof design.",
  },
];

export default function Home() {
  const handleViewMore = (productTitle: string) => {
    alert(`Viewing more details about: ${productTitle}`);
    // ToDo/Improvements:
    // 1. In a real app, navigate to product detail page
    // 2. router.push(`/products/${productId}`);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Our Featured Products
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated collection of premium products designed
          to enhance your lifestyle
        </p>
      </header>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              buttonText="View More"
              onButtonClick={() => handleViewMore(product.title)}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-500">
        <p className="text-sm">
          Built with Next.js 16 & Tailwind CSS | Responsive Product Card Demo
        </p>
      </footer>
    </main>
  );
}
