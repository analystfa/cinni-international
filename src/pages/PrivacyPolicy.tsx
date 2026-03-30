const PrivacyPolicy = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
      <div className="font-body text-muted-foreground space-y-6 leading-relaxed text-sm">
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <h2 className="font-heading text-xl font-semibold text-foreground">1. Information We Collect</h2>
        <p>We collect information you provide directly, including your name, email address, phone number, and business details when you submit enquiries through our website or contact us via WhatsApp or email.</p>
        <h2 className="font-heading text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
        <p>We use your information to respond to wholesale enquiries, provide product information, process bulk orders, and communicate about our leather products and services.</p>
        <h2 className="font-heading text-xl font-semibold text-foreground">3. Information Sharing</h2>
        <p>We do not sell or share your personal information with third parties except as necessary to fulfill your orders or as required by law.</p>
        <h2 className="font-heading text-xl font-semibold text-foreground">4. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
        <h2 className="font-heading text-xl font-semibold text-foreground">5. Contact Us</h2>
        <p>For questions about this privacy policy, please contact us at info@cinni.com.</p>
      </div>
    </div>
  </section>
);

export default PrivacyPolicy;
