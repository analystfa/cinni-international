import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold tracking-[0.15em] mb-4">CINNI</h3>
          <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
            Crafted for global brands. Premium leather goods manufacturer & wholesale supplier.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Products</h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
            <li><Link to="/products/belts" className="hover:text-primary-foreground transition-colors">Leather Belts</Link></li>
            <li><Link to="/products/bags" className="hover:text-primary-foreground transition-colors">Leather Bags</Link></li>
            <li><Link to="/products/cushion-covers" className="hover:text-primary-foreground transition-colors">Cushion Covers</Link></li>
            <li><Link to="/products/bicycle-saddles" className="hover:text-primary-foreground transition-colors">Bicycle Saddles</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
            <li>
              <a href="mailto:hello@cinni.com" className="hover:text-primary-foreground transition-colors">hello@cinni.com</a>
            </li>
            <li>
              <a href="https://wa.me/917084500555" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">+1 234 567 8900</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} CINNI. All rights reserved.
        </p>
        <p className="font-body text-xs text-primary-foreground/50">
          Manufactured in India · Serving clients worldwide
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
