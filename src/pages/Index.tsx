import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EnquiryPopup from "@/components/EnquiryPopup";
import { products, categories } from "@/data/products";
import heroImg from "@/assets/hero-leather.jpg";

const showcaseProducts = [products[0], products[4], products[9], products[12]];

const Index = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Artisan leather craftsmanship" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Premium Leather Goods Manufacturer &amp; Wholesale Supplier
            </h1>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-lg">
              Handcrafted leather products for global retailers, brands, and businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#categories">Explore Products</a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10" onClick={() => setEnquiryOpen(true)}>
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
            Our Finest Leather Products
          </h2>
          <div className="space-y-20">
            {showcaseProducts.map((product, i) => (
              <div
                key={product.id}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                    {categories.find((c) => c.slug === product.category)?.name}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="font-body text-primary font-medium mb-3">{product.priceRange}</p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <Button onClick={() => setEnquiryOpen(true)}>Enquire Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
            Featured Categories
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Explore our range of premium leather goods, handcrafted for wholesale buyers worldwide.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="group relative rounded-lg overflow-hidden aspect-[3/4]"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl font-semibold text-primary-foreground">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Presence */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Find Our Products On
          </h2>
          <p className="font-body text-muted-foreground mb-14">
            Trusted by retailers worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {/* Amazon */}
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition-transform duration-200 hover:scale-105">
              <svg className="h-10 w-auto" viewBox="0 0 603 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M373.642 141.938c-34.999 25.797-85.729 39.561-129.406 39.561-61.243 0-116.377-22.651-158.088-60.325-3.278-2.963-.341-7.001 3.592-4.697 45.014 26.191 100.673 41.947 158.166 41.947 38.775 0 81.429-8.022 120.654-24.674 5.926-2.517 10.88 3.879 5.082 8.188z" fill="hsl(var(--foreground) / 0.7)"/>
                <path d="M388.182 125.29c-4.466-5.719-29.572-2.702-40.846-1.363-3.434.42-3.959-2.57-.865-4.723 20.003-14.078 52.822-10.012 56.649-5.296 3.827 4.742-.997 37.615-19.794 53.3-2.886 2.413-5.64 1.128-4.362-2.07 4.232-10.564 13.736-34.239 9.218-39.848z" fill="hsl(var(--foreground) / 0.7)"/>
                <path d="M348.918 21.89V6.784c0-2.297 1.742-3.828 3.828-3.828h67.686c2.176 0 3.918 1.576 3.918 3.828v12.948c-.023 2.18-1.855 5.032-5.101 9.434l-35.052 50.074c13.019-.315 26.77 1.621 38.573 8.278 2.66 1.508 3.384 3.716 3.587 5.896v16.124c0 2.225-2.45 4.82-5.024 3.474-20.987-11.004-48.867-12.202-72.053.125-2.36 1.28-4.834-1.272-4.834-3.497v-15.32c0-2.473.023-6.697 2.518-10.457l40.604-58.25h-35.345c-2.176 0-3.918-1.554-3.918-3.806zm-237.525 98.14h-20.584c-1.968-.158-3.532-1.621-3.69-3.497V7.003c0-2.112 1.765-3.806 3.963-3.806h19.187c1.99.09 3.577 1.599 3.737 3.497v13.779h.376c5.013-13.293 14.432-19.481 27.112-19.481 12.878 0 20.919 6.188 26.713 19.481 4.99-13.293 16.324-19.481 28.499-19.481 8.641 0 18.104 3.564 23.894 11.567 6.567 8.899 5.216 21.838 5.216 33.18l-.023 73.87c0 2.112-1.765 3.828-3.94 3.828h-20.562c-2.043-.158-3.69-1.788-3.69-3.828V55.14c0-4.46.397-15.601-.575-19.793-1.54-7.08-6.166-9.07-12.153-9.07-5.013 0-10.251 3.339-12.39 8.68-2.14 5.341-1.94 14.269-1.94 20.183v61.47c0 2.112-1.764 3.828-3.94 3.828h-20.562c-2.066-.158-3.69-1.788-3.69-3.828l-.023-61.47c0-11.792 1.94-29.111-12.728-29.111-14.845 0-14.275 16.905-14.275 29.111v61.47c0 2.112-1.765 3.828-3.94 3.828zm365.476-98.14c30.517 0 47.042 26.213 47.042 59.528 0 32.195-18.236 57.752-47.042 57.752-29.98 0-46.282-26.213-46.282-58.87 0-32.762 16.502-58.41 46.282-58.41zm.176 21.55c-15.158 0-16.102 20.65-16.102 33.513 0 12.886-.2 40.38 15.926 40.38 15.935 0 16.679-22.175 16.679-35.694 0-8.899-.376-19.548-3.065-28.023-2.316-7.372-6.923-10.176-13.438-10.176zm86.655 76.59h-20.494c-2.043-.158-3.69-1.788-3.69-3.828l-.023-109.666c.18-1.967 1.855-3.497 3.94-3.497h19.077c1.787.09 3.273 1.327 3.668 2.986v16.77h.376c5.74-14.912 13.78-21.968 27.938-21.968 9.24 0 18.259 3.339 24.071 12.462 5.415 8.464 5.415 22.693 5.415 32.851v71.422c-.222 1.877-1.878 3.384-3.94 3.384h-20.674c-1.923-.158-3.51-1.554-3.69-3.384V53.372c0-11.567 1.34-28.486-12.928-28.486-5.013 0-9.617 3.362-11.91 8.464-2.917 6.456-3.293 12.886-3.293 20.022v63.217c-.023 2.112-1.81 3.828-3.963 3.828zM199.7 67.607c0 8.016.2 14.71-3.85 21.838-3.271 5.787-8.485 9.351-14.252 9.351-7.898 0-12.528-6.016-12.528-14.912 0-17.543 15.71-20.74 30.63-20.74v4.463zm20.762 50.21c-1.362 1.214-3.337 1.304-4.879.49-6.856-5.696-8.088-8.338-11.843-13.766-11.33 11.546-19.365 15.008-34.032 15.008-17.378 0-30.895-10.716-30.895-32.195 0-16.77 9.085-28.2 22.02-33.783 11.198-4.94 26.824-5.828 38.8-7.192v-2.69c0-4.94.375-10.78-2.518-15.053-2.517-3.828-7.322-5.404-11.577-5.404-7.854 0-14.866 4.03-16.59 12.375-.35 1.855-1.72 3.69-3.59 3.783l-20.13-2.173c-1.697-.375-3.577-1.743-3.1-4.33C146.867 9.498 168.4.992 187.682.992c9.84 0 22.695 2.623 30.472 10.069 9.84 9.2 8.907 21.48 8.907 34.854v31.563c0 9.489 3.94 13.646 7.654 18.765 1.295 1.832 1.585 4.03-.068 5.404-4.145 3.452-11.51 9.888-15.57 13.487l-.614-.317z" fill="hsl(var(--foreground) / 0.85)"/>
              </svg>
              <span className="font-body text-xs text-muted-foreground">Amazon</span>
            </a>
            {/* eBay */}
            <a href="https://www.ebay.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition-transform duration-200 hover:scale-105">
              <svg className="h-10 w-auto" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="85" fontFamily="Helvetica, Arial, sans-serif" fontWeight="bold" fontSize="80">
                  <tspan fill="#E53238">e</tspan>
                  <tspan fill="#0064D2">b</tspan>
                  <tspan fill="#F5AF02">a</tspan>
                  <tspan fill="#86B817">y</tspan>
                </text>
              </svg>
              <span className="font-body text-xs text-muted-foreground">eBay</span>
            </a>
            {/* Etsy */}
            <a href="https://www.etsy.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition-transform duration-200 hover:scale-105">
              <svg className="h-10 w-auto" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="65" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="bold" fontStyle="italic" fontSize="70" fill="#F1641E">Etsy</text>
              </svg>
              <span className="font-body text-xs text-muted-foreground">Etsy</span>
            </a>
            {/* Walmart */}
            <a href="https://www.walmart.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 transition-transform duration-200 hover:scale-105">
              <svg className="h-10 w-auto" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="60" fontFamily="Helvetica, Arial, sans-serif" fontWeight="bold" fontSize="55" fill="#0071CE">Walmart</text>
                <g transform="translate(265,15)">
                  <circle cx="0" cy="-8" r="4" fill="#FFC220"/>
                  <circle cx="7" cy="4" r="4" fill="#FFC220"/>
                  <circle cx="-7" cy="4" r="4" fill="#FFC220"/>
                  <circle cx="0" cy="16" r="4" fill="#FFC220"/>
                  <circle cx="7" cy="4" r="4" fill="#FFC220"/>
                  <circle cx="-7" cy="4" r="4" fill="#FFC220"/>
                </g>
              </svg>
              <span className="font-body text-xs text-muted-foreground">Walmart</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Whether you need custom leather products, private label manufacturing, or bulk wholesale orders — we're here to help your business grow.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => setEnquiryOpen(true)}>
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      <EnquiryPopup open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </>
  );
};

export default Index;
