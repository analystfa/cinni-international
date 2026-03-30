const Terms = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
        Terms &amp; Conditions
      </h1>

      <div className="font-body text-muted-foreground space-y-6 leading-relaxed text-sm">

        <p>
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p>
          These Terms &amp; Conditions govern your use of this website and the
          purchase of products manufactured and supplied by CINNI. By accessing
          this website or placing an enquiry or order, you agree to comply with
          these terms.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          1. Wholesale Terms
        </h2>
        <p>
          All prices listed on this website are indicative wholesale prices and
          may vary based on order quantity, customization requirements, and
          shipping destination. Final pricing will be confirmed after order
          enquiry and quotation approval.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          2. Minimum Order Quantity
        </h2>
        <p>
          Minimum Order Quantity (MOQ) applies to wholesale purchases. MOQ may
          vary depending on product category including leather belts, leather
          bags, cushion covers, and bicycle accessories. Exact MOQ will be
          confirmed during the enquiry or quotation process.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          3. Product Quality
        </h2>
        <p>
          All CINNI leather products are handcrafted using genuine leather.
          Natural leather may show slight variations in colour, grain, and
          texture. These variations are natural characteristics of leather and
          should not be considered manufacturing defects.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          4. Shipping &amp; Delivery
        </h2>
        <p>
          Shipping costs, delivery timelines, and logistics partners will be
          confirmed at the time of order placement. We ship internationally
          including to the USA, UK, Europe, and other global destinations.
          Delivery timelines may vary depending on order size, customization,
          and destination country.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          5. Customisation &amp; Private Label
        </h2>
        <p>
          We provide custom manufacturing and private label services for
          businesses. Custom orders may require additional production time and
          may involve different pricing structures depending on specifications,
          branding requirements, and quantity.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          6. Payments
        </h2>
        <p>
          Payment terms will be communicated during order confirmation. Orders
          may require advance payment or partial payment depending on order
          value and customization requirements.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          7. Intellectual Property
        </h2>
        <p>
          All product designs, images, logos, and content displayed on this
          website are the property of CINNI and may not be copied, reproduced,
          or distributed without prior written permission.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          8. Limitation of Liability
        </h2>
        <p>
          CINNI shall not be liable for any indirect, incidental, or
          consequential damages arising from the use of products purchased from
          this website.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          9. Governing Law
        </h2>
        <p>
          These Terms &amp; Conditions shall be governed and interpreted in
          accordance with the laws of India.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          10. Contact
        </h2>
        <p>
          If you have any questions regarding these Terms &amp; Conditions,
          please contact us at <strong>info@cinniinternational.com</strong>.
        </p>

      </div>
    </div>
  </section>
);

export default Terms;
