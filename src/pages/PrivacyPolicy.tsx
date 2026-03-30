const PrivacyPolicy = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
        Privacy Policy
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
          This Privacy Policy explains how CINNI collects, uses, and protects
          your personal information when you visit our website or interact with
          our business. We are committed to protecting your privacy and ensuring
          that your personal information is handled responsibly.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          1. Information We Collect
        </h2>
        <p>
          When you visit our website or contact us regarding wholesale leather
          products, we may collect the following information:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company or business name</li>
          <li>Shipping and billing address</li>
          <li>Product enquiry details</li>
        </ul>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          2. How We Use Your Information
        </h2>
        <p>
          We use the collected information to respond to enquiries, process
          wholesale orders, provide quotations, improve our services, and
          communicate with customers regarding products or order updates.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          3. Cookies and Website Data
        </h2>
        <p>
          Our website may use cookies or similar technologies to enhance user
          experience and analyze website traffic. Cookies help us understand how
          visitors interact with our website and allow us to improve our
          services.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          4. Sharing of Information
        </h2>
        <p>
          We do not sell or rent personal information to third parties. However,
          we may share necessary information with trusted service providers such
          as payment processors, shipping partners, or website service
          providers in order to complete transactions and operate our business.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          5. Data Security
        </h2>
        <p>
          We take reasonable technical and organizational measures to protect
          your personal information from unauthorized access, misuse, or
          disclosure. However, no internet transmission method is completely
          secure.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          6. International Customers
        </h2>
        <p>
          As a manufacturer supplying leather products globally, we may collect
          information from international buyers for communication, order
          processing, and shipping purposes.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          7. Third-Party Links
        </h2>
        <p>
          Our website may contain links to external websites. We are not
          responsible for the privacy practices or content of those websites.
          Users are encouraged to review the privacy policies of third-party
          websites.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          8. Updates to This Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes in
          our practices or legal requirements. Any updates will be posted on
          this page.
        </p>

        <h2 className="font-heading text-xl font-semibold text-foreground">
          9. Contact Us
        </h2>
        <p>
          If you have any questions regarding this Privacy Policy or how your
          information is handled, please contact us at{" "}
          <strong>info@cinniinternational.com</strong>.
        </p>

      </div>
    </div>
  </section>
);

export default PrivacyPolicy;
