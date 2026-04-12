const Terms = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-8">Terms &amp; Conditions</h1>
      <div className="font-body text-muted-foreground space-y-6 leading-relaxed text-sm">
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <h2 className="font-heading text-xl font-semibold text-foreground">1. Wholesale Terms</h2>
        <p>All prices listed on this website are indicative wholesale prices and may vary based on order quantity, customisation requirements, and shipping destination. Final pricing will be confirmed upon enquiry.</p>
        <h2 className="font-heading text-xl font-semibold text-foreground">2. Minimum Order Quantity</h2>
        <p>Minimum order quantities (MOQ) apply to all wholesale purchases. MOQ varies by product category and will be communicated during the enquiry process.</p>
        <h2 className="font-heading text-xl font-semibold text-foreground">3. Product Quality</h2>
        <p>All CINNI leather products are handcrafted from genuine leather. Minor variations in colour, texture, and grain are natural characteristics of leather and not considered defects.</p>
        <h2 className="font-heading text-xl font-semibold text-foreground">4. Shipping &amp; Delivery</h2>
        <p>Shipping terms, delivery timelines, and costs will be discussed and agreed upon during order placement. We ship to USA, UK, Europe, and other international destinations.</p>
        <h2 className="font-heading text-xl font-semibold text-foreground">5. Customisation</h2>
        <p>We offer private label and custom manufacturing services. Custom orders may have different lead times and pricing. Please contact us to discuss your specific requirements.</p>
        <h2 className="font-heading text-xl font-semibold text-foreground">6. Contact</h2>
        <p>For any questions regarding these terms, please reach out to us at info@cinni.com.</p>
      </div>
    </div>
  </section>
);

export default Terms;
