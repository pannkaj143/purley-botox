const MigraineTreatmentSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white" id="migraine-relief">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image left on desktop, top on mobile */}
          <div className="flex justify-center order-1 md:order-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="/images/Relief-Beyond-Wrinkles.png"
              alt="Relief Beyond Wrinkles - Migraine Treatment"
              className="rounded-lg shadow-xl max-w-full h-auto border-4 border-white"
              style={{ maxWidth: '70%' }}
            />
          </div>
          {/* Text content */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold mb-4 text-primary">Relief Beyond Wrinkles: Treatment for Migraines</h2>
            <p className="text-gray-700 mb-6 max-w-xl">
              For individuals living with <span className="font-semibold text-primary">chronic migraines</span> defined as experiencing headaches on 15 or more days per month, we offer more than just cosmetic treatment. This neuromodulating treatment has emerged as a powerful tool in the fight against debilitating headache disorders.
            </p>
            <ul className="space-y-2 mb-6 w-full max-w-xl text-left list-disc pl-6">
              <li>Works preventatively by blocking pain-associated neurotransmitters when injected into specific areas of the head and neck.</li>
              <li>Reduces the frequency, intensity, and duration of migraine days over time.</li>
              <li>Clinical studies show up to a <span className="font-semibold text-primary">50% reduction</span> in headache days for many individuals with repeated treatments (every 12 weeks).</li>
              <li>Especially effective for high-frequency migraines, with benefits increasing over successive cycles.</li>
              <li>Minimally invasive: sessions last ~20 minutes with a series of small injections; side effects are generally mild and localized.</li>
              <li>Often covered by insurance for those who meet criteria for chronic migraine.</li>
            </ul>
            <p className="text-base text-gray-700 mb-4 max-w-xl">
              In the evolving landscape of migraine management, this stands out as a scientifically backed, patient-approved solution—offering not just fewer headaches, but a renewed sense of control and quality of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigraineTreatmentSection;
