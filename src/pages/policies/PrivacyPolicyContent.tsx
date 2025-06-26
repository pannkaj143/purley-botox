const PrivacyPolicyContent = () => (
  <div className="prose max-w-none">
    <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
    <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-primary">1. Information We Collect</h2>
      <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Personal identification information (Name, email address, phone number)</li>
        <li>Medical history and dental records</li>
        <li>Appointment preferences and history</li>
        <li>Payment information</li>
      </ul>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-primary">2. How We Use Your Information</h2>
      <p className="text-gray-600 mb-4">We use the information we collect to:</p>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Provide, maintain, and improve our services</li>
        <li>Process your appointments and payments</li>
        <li>Send you technical notices and support messages</li>
        <li>Communicate with you about products, services, and events</li>
      </ul>
    </section>
    {/* Additional sections... */}
  </div>
);

export default PrivacyPolicyContent;
