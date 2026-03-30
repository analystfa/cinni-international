import { useState } from "react";
import { Button } from "@/components/ui/button";
import EnquiryPopup from "./EnquiryPopup";
import ProductGallery from "./ProductGallery";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row gap-0">
          {/* Gallery */}
          <div className="w-full md:w-1/2 p-4">
            <ProductGallery images={product.images} title={product.title} />
          </div>
          {/* Details */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-2">{product.title}</h3>
            <p className="font-body text-sm font-medium text-primary mb-3">{product.priceRange}</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              {product.description}
            </p>
            <Button onClick={() => setEnquiryOpen(true)} className="w-full md:w-auto">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
      <EnquiryPopup open={enquiryOpen} onOpenChange={setEnquiryOpen} productTitle={product.title} />
    </>
  );
};

export default ProductCard;
