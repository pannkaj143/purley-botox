const TermsOfServiceContent = () => (
  <div className="prose max-w-none">
    <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
    <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h2>
      <p className="text-gray-600 mb-4">By accessing or using our services, you agree to be bound by these Terms of Service.</p>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-primary">2. Use of Services</h2>
      <p className="text-gray-600 mb-4">You agree to use our services only for lawful purposes and in accordance with these terms.</p>
    </section>
    {/* Additional sections... */}
  </div>
);

export default TermsOfServiceContent;
