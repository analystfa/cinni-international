import { useParams, Link } from "react-router-dom";
import { categories, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useEffect } from "react";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = getProductsByCategory(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-3xl text-foreground mb-4">Category Not Found</h1>
        <Link to="/" className="font-body text-primary hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 flex items-center">
        <div className="absolute inset-0">
          <img src={category.image} alt={category.name} className="w-full h-full object-cover" width={800} height={800} />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">{category.name}</h1>
          <p className="font-body text-primary-foreground/80 mt-2 max-w-lg">{category.description}</p>
        </div>
      </section>

      {/* Products - Catalog Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
