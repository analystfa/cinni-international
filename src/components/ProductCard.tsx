import { useState } from "react";
import { Button } from "@/components/ui/button";
import EnquiryPopup from "./EnquiryPopup";
import ProductGallery from "./ProductGallery";
import type { Product } from "@/data/products";
import { Package, Palette, Tag } from "lucide-react";

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
            <p className="font-body text-lg font-semibold text-primary mb-1">{product.priceRange} <span className="text-xs font-normal text-muted-foreground">per unit</span></p>
            <p className="font-body text-xs text-muted-foreground italic mb-4">
              Better pricing available for higher quantities — contact us for a custom quote.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              {product.description}
            </p>

            {/* MOQ & Customization Section */}
            <div className="border-t border-border pt-4 mb-5 space-y-3">
              <h4 className="font-heading text-xs uppercase tracking-widest text-foreground/70 mb-2">Minimum Order & Customization</h4>
              <div className="flex items-start gap-2">
                <Package size={14} className="text-primary mt-0.5 shrink-0" />
                <p className="font-body text-sm text-muted-foreground"><span className="font-medium text-foreground">MOQ:</span> {product.moq}</p>
              </div>
              <div className="flex items-start gap-2">
                <Palette size={14} className="text-primary mt-0.5 shrink-0" />
                <p className="font-body text-sm text-muted-foreground"><span className="font-medium text-foreground">Customization:</span> {product.customization.join(" · ")}</p>
              </div>
              {product.privateLabelAvailable && (
                <div className="flex items-start gap-2">
                  <Tag size={14} className="text-primary mt-0.5 shrink-0" />
                  <p className="font-body text-sm text-muted-foreground"><span className="font-medium text-foreground">Private Label:</span> Available on all bulk orders</p>
                </div>
              )}
            </div>

            <Button onClick={() => setEnquiryOpen(true)} className="w-full md:w-auto">
              Get Bulk Pricing
            </Button>
          </div>
        </div>
      </div>
      <EnquiryPopup open={enquiryOpen} onOpenChange={setEnquiryOpen} productTitle={product.title} />
    </>
  );
};

export default ProductCard;
