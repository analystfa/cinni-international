import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryPopup from "@/components/EnquiryPopup";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Leather Belts", to: "/products/belts" },
  { label: "Leather Bags", to: "/products/bags" },
  { label: "Cushion Covers", to: "/products/cushion-covers" },
  { label: "Bicycle Saddles", to: "/products/bicycle-saddles" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const location = useLocation();

  const isProductRoute = location.pathname.startsWith("/products");

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
          <Link to="/" className="font-heading text-2xl md:text-3xl font-bold tracking-[0.15em] text-foreground">
            CINNI
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((l) => {
                const isActive = l.to.startsWith("/products/") ? location.pathname === l.to : location.pathname === l.to;
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`font-body text-sm tracking-wide transition-colors hover:text-primary ${
                        isActive ? "text-primary font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button size="sm" onClick={() => setEnquiryOpen(true)}>
              Get a Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((l) => {
                const isActive = location.pathname === l.to;
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`font-body text-sm tracking-wide transition-colors hover:text-primary ${
                        isActive ? "text-primary font-semibold" : "text-muted-foreground"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Button size="sm" className="w-full" onClick={() => { setEnquiryOpen(true); setOpen(false); }}>
                  Get a Quote
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <EnquiryPopup open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </>
  );
};

export default Navbar;
