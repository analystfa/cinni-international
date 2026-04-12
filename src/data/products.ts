import beltImg from "@/assets/product-belt.jpg";
import beltImg2 from "@/assets/product-belt-2.jpg";
import bagImg from "@/assets/product-bag.jpg";
import bagImg2 from "@/assets/product-bag-2.jpg";
import cushionImg from "@/assets/product-cushion.jpg";
import cushionImg2 from "@/assets/product-cushion-2.jpg";
import saddleImg from "@/assets/product-saddle.jpg";
import saddleImg2 from "@/assets/product-saddle-2.jpg";
import leatherDetail1 from "@/assets/leather-detail-1.jpg";
import leatherDetail2 from "@/assets/leather-detail-2.jpg";

export interface Product {
  id: string;
  title: string;
  slug: string;
  category: "belts" | "bags" | "cushion-covers" | "bicycle-saddles";
  priceRange: string;
  moq: string;
  customization: string[];
  privateLabelAvailable: boolean;
  description: string;
  metaDescription: string;
  image: string;
  images: string[];
}

const moqByCategory: Record<string, string> = {
  belts: "50–100 units",
  bags: "25–50 units",
  "cushion-covers": "50–100 units",
  "bicycle-saddles": "25–50 units",
};

const customizationByCategory: Record<string, string[]> = {
  belts: ["Width & length", "Leather type & finish", "Buckle style & metal", "Thread colour"],
  bags: ["Size & dimensions", "Leather type & colour", "Hardware finish", "Interior lining"],
  "cushion-covers": ["Size & shape", "Leather type & colour", "Stitching pattern", "Zipper colour"],
  "bicycle-saddles": ["Rail material", "Leather type & colour", "Rivet finish", "Spring tension"],
};

export const categories = [
  { slug: "belts", name: "Leather Belts", image: beltImg, description: "Premium handcrafted leather belts for wholesale distribution across USA, UK, and Europe." },
  { slug: "bags", name: "Leather Bags", image: bagImg, description: "Luxury leather bags manufactured with artisan craftsmanship for global B2B buyers." },
  { slug: "cushion-covers", name: "Leather Cushion Covers", image: cushionImg, description: "Elegant leather cushion covers for home décor wholesalers and interior designers." },
  { slug: "bicycle-saddles", name: "Leather Bicycle Saddles", image: saddleImg, description: "Handmade leather bicycle saddles combining vintage aesthetics with modern comfort." },
] as const;

export const products: Product[] = [
  // Belts
  { id: "b1", title: "Classic Full-Grain Leather Belt", slug: "classic-full-grain-leather-belt", category: "belts", priceRange: "$8 – $18", moq: moqByCategory["belts"], customization: customizationByCategory["belts"], privateLabelAvailable: true, description: "Handcrafted from premium full-grain leather, this classic belt features a solid brass buckle and hand-stitched edges. Ideal for wholesale buyers seeking timeless elegance and durable quality. Available in multiple sizes and colours for bulk orders.", metaDescription: "Wholesale classic full-grain leather belt with brass buckle. Bulk orders available for USA, UK & Europe retailers.", image: beltImg, images: [beltImg, beltImg2, leatherDetail1, leatherDetail2] },
  { id: "b2", title: "Braided Leather Belt – Wholesale", slug: "braided-leather-belt-wholesale", category: "belts", priceRange: "$10 – $22", moq: moqByCategory["belts"], customization: customizationByCategory["belts"], privateLabelAvailable: true, description: "Expertly braided from genuine leather strips, this belt offers a refined casual look. Perfect for boutiques and fashion retailers. Customisation options available including colour, width and buckle style for MOQ orders.", metaDescription: "Bulk braided leather belt for wholesale. Custom colours and buckle options. MOQ pricing for B2B buyers.", image: beltImg, images: [beltImg, leatherDetail2, beltImg2, leatherDetail1] },
  { id: "b3", title: "Vintage Distressed Leather Belt", slug: "vintage-distressed-leather-belt", category: "belts", priceRange: "$9 – $20", moq: moqByCategory["belts"], customization: customizationByCategory["belts"], privateLabelAvailable: true, description: "This hand-finished distressed leather belt brings character and vintage appeal. Made from top-grain leather with an antique brass roller buckle. Wholesale pricing available with customisation for private label brands.", metaDescription: "Vintage distressed leather belt manufacturer. Wholesale pricing with private label options for global buyers.", image: beltImg, images: [beltImg, beltImg2, leatherDetail1] },
  { id: "b4", title: "Reversible Leather Dress Belt", slug: "reversible-leather-dress-belt", category: "belts", priceRange: "$12 – $25", moq: moqByCategory["belts"], customization: customizationByCategory["belts"], privateLabelAvailable: true, description: "A versatile reversible belt in two complementary leather tones. Crafted from genuine cowhide leather with a rotating buckle mechanism. Excellent wholesale option for department stores and online retailers.", metaDescription: "Reversible leather dress belt for wholesale. Two-tone design, bulk pricing for retailers worldwide.", image: beltImg, images: [beltImg, leatherDetail2, beltImg2, leatherDetail1] },

  // Bags
  { id: "g1", title: "Handcrafted Leather Tote Bag", slug: "handcrafted-leather-tote-bag", category: "bags", priceRange: "$25 – $55", moq: moqByCategory["bags"], customization: customizationByCategory["bags"], privateLabelAvailable: true, description: "Spacious leather tote bag handmade from premium vegetable-tanned leather. Features reinforced handles, interior pocket and brass hardware. Perfect for wholesale buyers supplying fashion retail and corporate gifting markets.", metaDescription: "Wholesale handcrafted leather tote bag. Vegetable-tanned, bulk orders for USA, UK & European retailers.", image: bagImg, images: [bagImg, bagImg2, leatherDetail1, leatherDetail2] },
  { id: "g2", title: "Leather Messenger Bag – Bulk", slug: "leather-messenger-bag-bulk", category: "bags", priceRange: "$30 – $65", moq: moqByCategory["bags"], customization: customizationByCategory["bags"], privateLabelAvailable: true, description: "A classic messenger bag crafted from full-grain leather with adjustable crossbody strap. Features multiple compartments and antique brass closures. Available for B2B wholesale orders with private label branding.", metaDescription: "Bulk leather messenger bag supplier. Full-grain leather, private label wholesale for global markets.", image: bagImg, images: [bagImg, leatherDetail2, bagImg2, leatherDetail1] },
  { id: "g3", title: "Leather Duffle Travel Bag", slug: "leather-duffle-travel-bag", category: "bags", priceRange: "$40 – $85", moq: moqByCategory["bags"], customization: customizationByCategory["bags"], privateLabelAvailable: true, description: "Premium leather duffle bag designed for travel and weekends. Handcrafted with sturdy handles, detachable shoulder strap and spacious interior. Wholesale MOQ pricing for luxury travel accessories retailers.", metaDescription: "Wholesale leather duffle travel bag. Handcrafted premium quality, MOQ pricing for luxury retailers.", image: bagImg, images: [bagImg, bagImg2, leatherDetail1] },
  { id: "g4", title: "Leather Laptop Sleeve", slug: "leather-laptop-sleeve", category: "bags", priceRange: "$15 – $35", moq: moqByCategory["bags"], customization: customizationByCategory["bags"], privateLabelAvailable: true, description: "Slim and elegant leather laptop sleeve with soft interior lining. Fits 13–15 inch laptops. Available in multiple leather finishes for corporate gifting and tech accessories wholesalers.", metaDescription: "Wholesale leather laptop sleeve. Corporate gifting and bulk orders for tech accessory retailers.", image: bagImg, images: [bagImg, leatherDetail1, bagImg2, leatherDetail2] },

  // Cushion Covers
  { id: "c1", title: "Genuine Leather Cushion Cover – Square", slug: "genuine-leather-cushion-cover-square", category: "cushion-covers", priceRange: "$12 – $28", moq: moqByCategory["cushion-covers"], customization: customizationByCategory["cushion-covers"], privateLabelAvailable: true, description: "Luxurious square leather cushion cover made from soft genuine leather. Features hidden zipper closure and durable stitching. Ideal for home décor wholesalers and interior design firms ordering in bulk.", metaDescription: "Wholesale genuine leather cushion cover. Square design, bulk orders for home décor retailers.", image: cushionImg, images: [cushionImg, cushionImg2, leatherDetail1, leatherDetail2] },
  { id: "c2", title: "Patchwork Leather Cushion Cover", slug: "patchwork-leather-cushion-cover", category: "cushion-covers", priceRange: "$14 – $32", moq: moqByCategory["cushion-covers"], customization: customizationByCategory["cushion-covers"], privateLabelAvailable: true, description: "Artisan patchwork leather cushion cover combining multiple leather tones and textures. Each piece is unique with hand-stitched details. Perfect for bohemian and rustic home décor wholesale markets.", metaDescription: "Patchwork leather cushion cover manufacturer. Unique artisan designs for wholesale home décor buyers.", image: cushionImg, images: [cushionImg, leatherDetail2, cushionImg2, leatherDetail1] },
  { id: "c3", title: "Embossed Leather Throw Pillow Cover", slug: "embossed-leather-throw-pillow-cover", category: "cushion-covers", priceRange: "$15 – $35", moq: moqByCategory["cushion-covers"], customization: customizationByCategory["cushion-covers"], privateLabelAvailable: true, description: "Elegant embossed leather throw pillow cover featuring intricate geometric patterns. Made from top-quality leather with zipper closure. Available for wholesale with custom embossing options.", metaDescription: "Wholesale embossed leather throw pillow cover. Custom patterns available for bulk B2B orders.", image: cushionImg, images: [cushionImg, cushionImg2, leatherDetail1] },

  // Bicycle Saddles
  { id: "s1", title: "Classic Leather Bicycle Saddle", slug: "classic-leather-bicycle-saddle", category: "bicycle-saddles", priceRange: "$18 – $40", moq: moqByCategory["bicycle-saddles"], customization: customizationByCategory["bicycle-saddles"], privateLabelAvailable: true, description: "Traditional leather bicycle saddle handcrafted from vegetable-tanned cowhide. Features copper rivets, chrome-plated steel rails and spring suspension. Wholesale pricing for bicycle manufacturers and vintage cycling retailers.", metaDescription: "Wholesale classic leather bicycle saddle. Handcrafted with copper rivets, bulk pricing for bike manufacturers.", image: saddleImg, images: [saddleImg, saddleImg2, leatherDetail1, leatherDetail2] },
  { id: "s2", title: "Vintage Racing Leather Saddle", slug: "vintage-racing-leather-saddle", category: "bicycle-saddles", priceRange: "$22 – $48", moq: moqByCategory["bicycle-saddles"], customization: customizationByCategory["bicycle-saddles"], privateLabelAvailable: true, description: "Slim-profile vintage racing saddle made from premium hide leather. Lightweight design with titanium rail option. Ideal for cycling brand wholesalers and custom bicycle builders worldwide.", metaDescription: "Vintage racing leather bicycle saddle supplier. Premium hide, wholesale for cycling brands globally.", image: saddleImg, images: [saddleImg, leatherDetail2, saddleImg2, leatherDetail1] },
  { id: "s3", title: "Touring Comfort Leather Saddle", slug: "touring-comfort-leather-saddle", category: "bicycle-saddles", priceRange: "$20 – $45", moq: moqByCategory["bicycle-saddles"], customization: customizationByCategory["bicycle-saddles"], privateLabelAvailable: true, description: "Wide-profile touring saddle designed for comfort on long rides. Premium leather with dual-spring suspension and hand-laced edges. Wholesale available for touring bicycle companies and cycle accessory distributors.", metaDescription: "Wholesale touring leather bicycle saddle. Comfort design with dual springs, bulk orders for distributors.", image: saddleImg, images: [saddleImg, saddleImg2, leatherDetail1] },
];

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);
